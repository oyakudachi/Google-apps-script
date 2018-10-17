/*fetch練習*/
function fetch2() {

var　ss,sht,a1,sht2

ss　= SpreadsheetApp.getActiveSpreadsheet();
sht= ss.getSheetByName('シート2');
a1=　sht.getRange("A1").getValue();
key = a1;

/*
  for (var i in results) {
    var data = results[i];
    sheet.appendRow([data.title, data.link]);
  }
}
*/

// アクセス先を定義
var　url　=　"https://www.google.co.jp/search?q="+key
// GETリクエスト
var response = UrlFetchApp.fetch(url);
// HTMLの結果を取得
var html = response.getContentText();
//title要素だけを取得
//var h3=/<h3 class=\"r\">([\s\S]*?)<\/h3>/gi;
var h3=/<h3 class=\"r\">(<a href=\"\/url[\s\S]*?)<\/h3>/gi;
var　title = html.match(h3);

//余計なhtmlタグを除去
//title = title.replace(/(^\s+)|(\s+$)/g,"");
//title = title.replace(/<\/?[^>]+>/gi,"");

//shtのB1へtitleをセット
sht.getRange("B1").setValue(title);
Logger.log(title);

//var source = json["content"]["data"];

/*
for (var i=0;i<10;i++){
Logger.log(title);
}
*/

}



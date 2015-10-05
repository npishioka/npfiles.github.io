var url = location.href;
var renderer = new SpreadsheetRenderer({
  key: '1T-yHSNh7sv3Dfkar3k9DZqwqDBev1Q-_9EdVaB492AU',
  template:'<li><a href="%2%">%1%</a></li>' });
renderer.render('select * WHERE A = "' + (url) + '" AND D = 0', 'result');

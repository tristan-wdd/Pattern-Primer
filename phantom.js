var page = require('webpage').create();
page.open('index.html', function() {
  page.render('a.png');
 // phantom.exit();
});

var page = require('webpage').create();
page.open('http://holdingbay.co.uk/blog', function() {
  page.render('b.png');
  phantom.exit();
});

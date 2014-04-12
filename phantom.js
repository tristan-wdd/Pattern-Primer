var page = require('webpage').create();
page.open('http://localhost/index.php', function() {
  page.render('a.png');
 // phantom.exit();
});

var page = require('webpage').create();
page.open('http://holdingbay.co.uk/blog', function() {
  page.render('b.png');
  phantom.exit();
});

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

function display() {
  console.log("hello");
}
/* $('.box').on('click', function() {
  var $element = $(this);
  
  var $openElement = $('<div class="absoluteBox"></div>');
  
  $openElement.css('left', $element.position().left);
  $openElement.css('right', $element.width());
      
  $element.html($openElement);
  
  $openElement.animate({left : 0, width : $('.wrapper').width()}, 500);
 
}); */

module.exports = router;

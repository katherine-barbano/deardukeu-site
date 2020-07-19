var express = require('express');
var router = express.Router();
var $ = require('jquery');

/* GET home page. */
  const fs = require('fs')
  captions = []
  fs.readFile(process.cwd() + '/data/deardukeu.json', 'utf8', (err, fileContents) => {
    if (err) {
      console.error(err)
      return
    }
    try {
      const data = JSON.parse(fileContents);
      for(i=0; i<data.length; i++){
        captions.push(data[i].node.edge_media_to_caption.edges[0].node.text);
      }
      read_ig_data(captions)
    } catch(err) {
      console.error(err)
    }
  })
  function read_ig_data(captions) {
    router.get('/', function(req, res, next) {
      res.render('index', { text: captions });
    });
  }

function display() {
  console.log("hello");
}

/* (function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( $ ); */

/* $('.box').on('click', function() {
  var $element = $(this);
  
  var $openElement = $('<div class="absoluteBox"></div>');
  
  $openElement.css('left', $element.position().left);
  $openElement.css('right', $element.width());
      
  $element.html($openElement);
  
  $openElement.animate({left : 0, width : $('.wrapper').width()}, 500);
 
}); */

module.exports = router;

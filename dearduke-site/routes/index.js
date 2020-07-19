var express = require('express');
var router = express.Router();

/* GET home page. */
  const fs = require('fs')
  panhel = []
  ifc = []
  prof = []
  students = []
  fs.readFile(process.cwd() + '/data/deardukeu.json', 'utf8', (err, fileContents) => {
    if (err) {
      console.error(err)
      return
    }
    try {
      const data = JSON.parse(fileContents);
      for(i=0; i<data.length-1; i++){
        caption = data[i].node.edge_media_to_caption.edges[0].node.text.replace("#dearduke #duke #dukeuniversity", "")
        if(! (caption.toLowerCase().includes("announcement") || caption.toLowerCase().includes("@kappasigmaduke"))) {
          if(caption.toLowerCase().includes("ifc") || caption.toLowerCase().includes("frat") || caption.toLowerCase().includes("greek")) {
            ifc.push(caption);
          }
          if(caption.toLowerCase().includes("greek") || caption.toLowerCase().includes("panhel") || caption.toLowerCase().includes("sorority")) {
            panhel.push(caption);
          }
          else if (caption.toLowerCase().includes("prof") || caption.toLowerCase().includes("counselor") || caption.toLowerCase().includes("manager") || caption.toLowerCase().includes("advisor") || caption.toLowerCase().includes("admin") || caption.toLowerCase().includes("tenure") || caption.toLowerCase().includes("office")) {
            prof.push(caption);
          }
          else {
            students.push(caption);
          }
        }
      }
    } catch(err) {
      console.error(err)
    }
  })
  router.get('/', function(req, res, next) {
    res.render('index');
  });
  router.get('/faculty', function (req, res) {
    res.render('faculty')
  })
  router.get('/panhel', function (req, res) {
    res.render('panhel')
  })
  router.get('/ifc', function (req, res) {
    res.render('ifc')
  })
  router.get('/students', function (req, res) {
    res.render('students')
  })

function display() {
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

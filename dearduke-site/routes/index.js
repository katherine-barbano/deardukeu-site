var express = require('express');
var router = express.Router();

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

module.exports = router;

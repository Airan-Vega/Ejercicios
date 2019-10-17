const router = require('express').Router();

router.get('/peticion',peticion);

function peticion(req,res){
  let obj = {
    creators:[
      {name:'Airan'},
      {name:'Rubén'},
      {name:'Jonás'}
    ]
  };
  res.json(obj);
}

module.exports = router;
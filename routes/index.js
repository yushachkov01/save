let express = require('express');
let router = express.Router();
let SaveForm = require('../models/form')
/* GET home page. */
router.get('/', async function (req, res, next) {
  const recordings = await SaveForm.find()
  console.log(recordings);
  res.render('index', { recordings });
});

router.post('/', async function (req, res, next) {
  // await SaveForm.create({ text: req.body.text, topic: req.body.topic }) (1 variant)

  const { text, topic } = req.body;
  try {
    await SaveForm.create({ text, topic })
    res.sendStatus(200)
  } catch (error) {
    res.sendStatus(500)
  }

});



module.exports = router;

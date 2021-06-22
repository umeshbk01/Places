const express = require('express')
const { getAllPlaces, addPlace} = require('../../controllers/placeControllers');
const router = express.Router();


router.get('/all', getAllPlaces);
router.post('/new', addPlace);

module.exports = router;
const express = require('express');
const nftController = require('../controllers/nft.js');
const router = express.Router();

router.get('/fetch',nftController.fetchNFT)
module.exports = router;

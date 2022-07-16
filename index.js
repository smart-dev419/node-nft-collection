const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const nftRoute = require('./routes/nft_router');

const app = express();
dotenv.config();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(`${process.env.API_VERSION_1_ROUTE}/nft`,nftRoute);

const PORT = 5000;

app.listen(PORT, console.log(`App is running on port ${PORT}`));

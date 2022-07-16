const axios = require('axios')
const OPENSEA_API_KEY = process.env.OPENSEA_API_KEY
const fetchNFT = async (req,res) => {
    const data = await axios.get(
        'https://testnets-api.opensea.io/assets?asset_contract_address=0xb0bB166f6b019F9B53437105c78340a2004828Bd&format=json&order_direction=asc'
      )

    res.json(data.data.assets);
}

module.exports = {
    fetchNFT
};
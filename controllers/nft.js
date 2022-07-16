const axios = require('axios')
const OPENSEA_API_KEY = process.env.OPENSEA_API_KEY
const fetchNFT = async (req,res) => {
    const data = await axios.get(
        'https://testnets-api.opensea.io/assets?asset_contract_address=${WALLET_ADDRESS}&format=json&order_direction=asc'
      );

    /*
        
        const options = {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'X-API-KEY': OPENSEA_API_KEY,
            },
          };

          const collectionResponse = await fetch(
            `https://api.opensea.io/api/v1/collections?asset_owner=${WALLET_ADDRESS}`,
            options,
          ).then(response => response.json());
    */

    res.json(data.data.assets);
}

module.exports = {
    fetchNFT
};


const solanaRate = async (req, res) => {

    const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd");
    const data = await response.json();

    res.setHeader("Access-control-Allow-Origin", "*");
    res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate");
    
    res.status(200).json(data.solana.usd);
}

export default solanaRate
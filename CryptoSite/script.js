var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var pi = document.getElementById("pi");

var settings = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/",
    "method": "GET",
    "headers": {}
}
$.ajax(settings).done(function(response){
  btc.innerHTML = response.bitcoin.usd;  
  eth.innerHTML = response.ethereum.usd; 
  pi.innerHTML = response.picoin.usd; 
});
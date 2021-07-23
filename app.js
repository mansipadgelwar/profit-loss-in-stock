const form = document.forms[0];
var purchasePrice = document.querySelector("#purchase-price");
var stockQuantity = document.querySelector("#stock-quantity");
var currentPrice = document.querySelector("#current-price");
var btnSubmit = document.querySelector("#btn-submit");
var profitGIF = "./images/profit.webp";
var lossGIF = "./images/loss.webp"; 

btnSubmit.addEventListener('click', profitLoss);


function profitLoss(e){
    e.preventDefault();
    purchasePrice = Number(purchasePrice.value);
    stockQuantity = Number(stockQuantity.value);
    currentPrice = Number(currentPrice.value);
    console.log(purchasePrice);
    
if(purchasePrice > 0 || stockQuantity > 0 || currentPrice > 0){
    if(purchasePrice > currentPrice){
        const loss = (purchasePrice - currentPrice) * stockQuantity;
        const percentLoss = (((purchasePrice - currentPrice)*100)/purchasePrice).toFixed(2);
        output.innerHTML ="You lost " + percentLoss +
        " %. Your total loss is Rs." + loss;
        outputGIF.style.display = "block";
        outputGIF.style.backgroundImage = "url('/images/loss.webp')";
      }
    else{
        const profit = (currentPrice - purchasePrice) * stockQuantity;
        const percentProfit = (((currentPrice - purchasePrice)*100)/purchasePrice).toFixed(2);
        output.innerHTML ="You gained " + percentProfit +
        " %. Your total profit is Rs." + profit;
        outputGIF.style.display = "block";
        outputGIF.style.backgroundImage = "url('/images/profit.webp')";
    
    }
}
else{
    output.innerHTML = "Enter values greater than 0";
}


}
var oldPrice = document.querySelector("#purchase-price");
var quantity = document.querySelector("#stock-quantity");
var newPrice = document.querySelector("#current-price");
var output = document.querySelector("#output");
var btnSubmit = document.querySelector("#btn-submit");
var profitGIF = "./images/profit.webp";
var lossGIF = "./images/loss.webp"; 


function profitLoss(e){
   e.preventDefault();
    outputGIF.style.display = "none";
    output.innerHTML = "";
    purchasePrice = Number(oldPrice.value);
    stockQuantity = Number(quantity.value);
    currentPrice = Number(newPrice.value);
    
    if(purchasePrice != "" && stockQuantity != "" && currentPrice != "")
    {
       if(purchasePrice > 0 && stockQuantity > 0 && currentPrice > 0)
       {
    
         if(purchasePrice > currentPrice)
         {
            const loss = (purchasePrice - currentPrice) * stockQuantity;
            const percentLoss = (((purchasePrice - currentPrice)*100)/purchasePrice).toFixed(2);
            output.innerText =`You lost ${percentLoss}%. Your total loss is Rs. ${loss}`;
            outputGIF.style.display = "block";
            outputGIF.style.backgroundImage = "url('/images/loss.webp')";
         }
         else if(currentPrice > purchasePrice)
         {
            const profit = (currentPrice - purchasePrice) * stockQuantity;
            const percentProfit = (((currentPrice - purchasePrice) * 100)/purchasePrice).toFixed(2);
            output.innerText =`You gained ${percentProfit}%. Your total profit is Rs. ${profit}`;
            outputGIF.style.display = "block";
            outputGIF.style.backgroundImage = "url('/images/profit.webp')";
         }
         else{
            output.innerText ="NO profit No loss";
         }
    
        }
        else
        {
        output.innerText = "Enter values greater than 0";
        }
    }    
    else
    {
    output.innerText = "All the fields are mandatory, please enter all the values!";
    
    }
}

btnSubmit.addEventListener("click", profitLoss);
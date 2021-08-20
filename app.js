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
            const percentLoss = ((loss / purchasePrice)*100).toFixed(2);
            output.innerHTML ="You lost " + percentLoss +
            " %. Your total loss is Rs." + loss;
            outputGIF.style.display = "block";
            outputGIF.style.backgroundImage = "url('/images/loss.webp')";
         }
         else if(currentPrice > purchasePrice)
         {
            const profit = (currentPrice - purchasePrice) * stockQuantity;
            const percentProfit = ((profit / purchasePrice) * 100).toFixed(2);
            output.innerHTML ="You gained " + percentProfit +
            " %. Your total profit is Rs." + profit;
            outputGIF.style.display = "block";
            outputGIF.style.backgroundImage = "url('/images/profit.webp')";
         }
         else{
            output.innerHTML ="NO profit No loss";
         }
    
        }
        else
        {
        output.innerHTML = "Enter values greater than 0";
        }
    }    
    else
    {
    output.innerHTML = "All the fields are mandatory, please enter all the values!";
    
    }


}

btnSubmit.addEventListener("click", profitLoss);
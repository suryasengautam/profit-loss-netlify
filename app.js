// selecting all elements
var initialPrice = document.querySelector("#initial-price");
var stockQuantity = document.querySelector("#quantity-of-stock");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");
submitBtn.addEventListener("click",submitHanler)
function submitHanler(){
  var ip = Number(initialPrice.value)
  var qty = Number(stockQuantity.value);
  var curr = Number(currentPrice.value);
  calculateProfitAndLoss(ip,qty,curr)
}
function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / ( initial*quantity)) * 100;
    showOutput(
      `hey the loss is ${loss} and the percentage loss is ${lossPercentage}%`
    );
  } else if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit /( initial*quantity)) * 100;
    showOutput(
      `hey the profit is ${profit} and the percentage profit is ${profitPercentage}%`
    );
    
  } else {
    showOutput("equal");

  }
}
function showOutput(message){
  outputBox.innerHTML = message

}

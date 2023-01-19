// write a function that indicates whether or not to sell a stock
var sellStock = function(stockPrice, sellPrice){
    if(stockPrice >= sellPrice){
        return true;
    }else{
        return false;
    }
}
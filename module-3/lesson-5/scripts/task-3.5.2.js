function foodDiscount(arr){

    let totalPrice = 0;

    for ( let index = 0; index < arr.length; index++ ) {      
    totalPrice = totalPrice + arr[index].price * arr[index].quantity;
    }

    if (arr[index].type === food) {
       let discount = (arr[index.price] / 100) * 20;
       
       totalPrice = totalPrice + (arr[index].price - discount) * arr [index].quantity;
       
    } else {

        totalPrice = totalPrice + (arr [index].price *arr [index].quantity);
    }

    return totalPrice.toFixed(2);

} 

console.log("£" + foodDiscount(shoppingCart));


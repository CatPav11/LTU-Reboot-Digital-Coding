function shoppingCartTotalPrice(arr){
    let totalPrice = 0;

    for ( let index = 0; index < arr.length; index++ ) {
       
        // console.log(arr[ index ].price );

        totalPrice = totalPrice + arr[index].price * arr[index].quantity;

    }

    return totalPrice.toFixed(2);

}

console.log("£" + shoppingCartTotalPrice ( shoppingCart ));
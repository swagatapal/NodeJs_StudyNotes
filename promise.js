function placeOrder (drink){
    return new Promise(function(resolve, reject){
        if(drink ==='coffee')
        {
            resolve('order for coffee recieved');
        }else{
            reject('other order rejected');
        }
    })

}

function processOrder (order){
    return new Promise(function(resolve){

        console.log('order is being processed');
        resolve(`${order} is being served`);

    })
}

// solution with promises

// placeOrder('coffee').then(function(orderPlaced){
//     console.log(orderPlaced);
//     let orderIsProcessed = processOrder(orderPlaced);
//     return orderIsProcessed;
// }).then(function(processOrder){
//     console.log(processOrder);
// }).catch(function(err){
//     console.log(err)
// })// chaining of promise


// solution with async await

async function serveOrder(){

    try{
        let orderPlaced = await placeOrder('coffee');
        console.log(orderPlaced);
        let processdOrder = await processOrder(orderPlaced);
        console.log(processdOrder);
    }catch(error){
        console.log(error);

    }
    
}

serveOrder();
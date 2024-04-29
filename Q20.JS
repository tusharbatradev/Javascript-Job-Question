// Write a C program to calculate profit and loss on a transaction.
// Test Data :
// 500 700

function ProfitLossCounter(costPrice, sellingPrice){
    let ProfitorLoss = sellingPrice - costPrice;

    if(ProfitorLoss > 0){
        console.log(`You can booked your profit amount : ${ProfitorLoss}`)
    } else{
        console.log(`You can booked your loss amount : ${ProfitorLoss}`)
    }
}

ProfitLossCounter(500,700)
// Write a C program to calculate profit and loss on a transaction.
// Test Data :
// 500 700

function ProfitLossCounter(costPrice, sellingPrice){
    let ProOrLoss = sellingPrice - costPrice;

    if(ProOrLoss > 0){
        console.log(`You can booked your profit amount : ${ProOrLoss}`)
    } else{
        console.log(`You can booked your loss amount : ${ProOrLoss}`)
    }
}

ProfitLossCounter(700,900)
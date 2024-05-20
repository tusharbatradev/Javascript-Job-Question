// Write a C program to calculate profit and loss on a transaction.
// Test Data :
// 500 700

function ProfitOrLoss(costPrice , sellingPrice){
    let status = sellingPrice - costPrice;

    if(status>0){
        console.log(`Profit of ${status}`)
    } else if(status===0){
        console.log(`No Profit No Loss`)
    } else{
        console.log(`Loss of ${status}`)
    }
}

ProfitOrLoss(500,700)
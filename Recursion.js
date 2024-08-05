let num = 1;
function Show(num){
    console.log(`Value of ${num}`)
    num++;
    Show();
}
Show(num)
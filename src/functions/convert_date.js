export const CoinDate = (number)=>{
    var myDate = new Date(number);
    return myDate.getDate() + "/" + (myDate.getMonth()+1);
}
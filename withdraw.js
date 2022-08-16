document.getElementById('withdraw-money').addEventListener('click',function(){
    const withdrawField =document.getElementById('withdraw-amount');
    const newWithdrawamountString =withdrawField.value;
    const newWithdrawAmount =parseFloat(newWithdrawamountString);
    // console.log(newWithdrawAmount); ---///

   const newWithAmount = document.getElementById('with-amount');
   const newWithAmountString = newWithAmount.innerText;
   const withdrwnamount = parseFloat(newWithAmountString);
   const withdrwnTotalamount= withdrwnamount+newWithdrawAmount;
   newWithAmount.innerText=withdrwnTotalamount;


})
document.getElementById('deposite').addEventListener('click', function(){
  const depositeField =document.getElementById('deposit-field');
  const neWdepositeAmountString =depositeField.value;
  const neWdepositeAmount =parseFloat(neWdepositeAmountString);
//   console.log(depositeAmount)
 const depositeTotalMoney = document.getElementById('deposite-total');
 const previousDepositeTotalString  =depositeTotalMoney.innerText;
 const newDepositeTotal=parseFloat(previousDepositeTotalString);
 const curentDepositeTotal =  neWdepositeAmount +newDepositeTotal ;
  
 depositeTotalMoney.innerText= curentDepositeTotal;
 
   const balanceTotalElement = document.getElementById('balance-total');
   const previousbalanceTotalElementSrting=balanceTotalElement.innerText;
   const newBalance =parseFloat(previousbalanceTotalElementSrting);
     const  currentBalance=newBalance+neWdepositeAmount;

     balanceTotalElement.innerText=currentBalance;
     
   
//  cleaar yje depo field

depositeField.value ='';
 

})
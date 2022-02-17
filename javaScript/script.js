
function calculat(clickId){
    document.getElementById(clickId).addEventListener('click',function(){
        const totalIncome = document.getElementById('income').value ;
        const foodCost = document.getElementById('food-cost').value;
        const rentCost = document.getElementById('rent-cost').value;
        const clothesCost = document.getElementById('clothes-cost').value;
        let totalcost = parseFloat(foodCost) + parseFloat(rentCost)+ parseFloat(clothesCost);
       
      const totalExpenses = document.getElementById('total-expenses').innerText = totalcost;
      
      
      let remainExpense = parseFloat(totalIncome) - totalExpenses;
      const balance = document.getElementById('total-balance').innerText = remainExpense;
    //  if the balance is short than income

      if( totalExpenses > totalIncome ){
          alert("Insufficient balance !");
          let balance = document.getElementById('total-balance').innerText;
          let reasin = document.getElementById('total-balance').innerText = 0;
   }
    //    validition input value

    if(isNaN(totalIncome + rentCost + foodCost + clothesCost ) == true){
        alert("Enter only number !");
    }
    // positive number only

    if( totalIncome < 0 ){
        alert("Enter positive  number !");
    }
    if( rentCost < 0 ){
        alert("Enter positive  number !");
    }
    if( foodCost < 0 ){
        alert("Enter positive  number !");
    }
    if( clothesCost < 0 ){
        alert("Enter positive  number !");
    }

      return ;
    })
}

calculat( 'calculat-btn');



// saving calculation

function saving(saveId){

    document.getElementById(saveId).addEventListener('click',function(){

        const totalIncome = document.getElementById('income').value ;
        const persent = document.getElementById('save-money').value;
        let saving = parseFloat(totalIncome) * parseFloat(persent ) / 100;
    
      let savingAmount = document.getElementById('saving-amount').innerText=saving;
     
      const balance = document.getElementById('total-balance').innerText;
     let saveBalance = parseFloat(balance) -  parseFloat(savingAmount);
    const reaminBalance = document.getElementById('remaining-balance').innerText=saveBalance;
   
    // remaining balance 
    if( reaminBalance < 0 ){
     let remain =  document.getElementById('remaining-balance').innerText;
    //  console.log(remain) ;
     let reasin = document.getElementById('remaining-balance').innerText= "Not enough money !";
    }
//  saving error handle 
if(isNaN(persent) == true ){
  alert("Enter only number and not up to 20 % !");
}

    
    })
}
saving( 'save-btn');
   






   





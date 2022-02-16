document.getElementById('calculat-btn').addEventListener('click',function(){

  const totalIncome = document.getElementById('income').value ;
  const foodCost = document.getElementById('food-cost').value;
  const rentCost = document.getElementById('rent-cost').value;
  const clothesCost = document.getElementById('clothes-cost').value;
  let totalcost = parseFloat(foodCost) + parseFloat(rentCost)+ parseFloat(clothesCost);
 
const totalExpenses = document.getElementById('total-expenses').innerText = totalcost;


let remainExpense = parseFloat(totalIncome) - totalExpenses;
const balance = document.getElementById('total-balance').innerText = remainExpense;

return;
})

document.getElementById('save-btn').addEventListener('click',function(){

    const totalIncome = document.getElementById('income').value ;
    const persent = document.getElementById('save-money').value;
    let saving = parseFloat(totalIncome) * parseFloat(persent )/100;

  let savingAmount = document.getElementById('saving-amount').innerText=saving;
 
  const balance = document.getElementById('total-balance').innerText;
 let saveBalance = parseFloat(balance) -  parseFloat(savingAmount);
const reaminBalance = document.getElementById('remaining-balance').innerText=saveBalance;

})

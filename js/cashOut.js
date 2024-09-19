document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();

    
    
    const inputCashOutMoney = document.getElementById('input-cash-out').value;
    const inputCshOutPin = document.getElementById('input-cash-out-pin').value;
    if(inputCshOutPin === '1234'){
        const mainBalance = document.getElementById('balance').innerText;
     const mainBalanceNumber = parseFloat(mainBalance);
     const inputCashOutMoneyNumber = parseFloat(inputCashOutMoney);
     const newBalanceAfterCashOut = mainBalanceNumber - inputCashOutMoneyNumber;
     document.getElementById('balance').innerText = newBalanceAfterCashOut;
     console.log(newBalanceAfterCashOut)

    }
    else{
        alert('Wrong pin! try again!')
    }

})
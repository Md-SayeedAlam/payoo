document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault()
    

    const addMoneyInput = document.getElementById('input-add-money').value;
    

    const pinNumberinput = document.getElementById('input-pin-number').value;
    console.log(addMoneyInput,pinNumberinput)
    
    if(pinNumberinput === '1234'){
                      
        const balanceMAin = document.getElementById('balance').innerText;
        const addMoneyNumber = parseFloat(addMoneyInput)
        const balanceNumber = parseFloat(balanceMAin)
        const newBalance = addMoneyNumber + balanceNumber
    //   const newBalance = Number(balanceMAin) + Number(addMoneyInput);[evabew kora jai]
      console.log(newBalance);

      document.getElementById('balance').innerText = newBalance
    

      balance

    }
    else{
        alert('Failed to add money! Please try again')
    }

})

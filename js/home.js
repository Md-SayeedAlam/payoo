document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault()
    

    const addMoneyInput = document.getElementById('input-add-money').value;
    

    const pinNumberinput = document.getElementById('input-pin-number').value;
    console.log(addMoneyInput,pinNumberinput)
})

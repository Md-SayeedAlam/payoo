document.getElementById('btn-show-cashout').addEventListener('click',function(){
    const cashOutDiv = document.getElementById('cash-out-div');
    const addMoneyDiv = document.getElementById('add-money-div');
    cashOutDiv.classList.remove('hidden')
    addMoneyDiv.classList.add('hidden')
})
document.getElementById('btn-show-add-money').addEventListener('click',function(){
    const cashOutDiv = document.getElementById('cash-out-div');
    const addMoneyDiv = document.getElementById('add-money-div');
    cashOutDiv.classList.add('hidden')
    addMoneyDiv.classList.remove('hidden')
})
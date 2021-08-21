//handle deposit and withdraw button event handler

document.getElementById("deposit-button").addEventListener("click", function () {
    //    console.log("deposit button clicked")
    // get the amount depositted
    const depositInput = document.getElementById('deposit-input');

    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);


    // console.log(depositAmount)

    // update deposit total
    const depositTotal = document.getElementById('deposit-total');
    // console.log(depositTotal.value); this is wrong.If the id is in "input"  then you'll use-'value' | or if the id is in "paragraph/h" then you'll use - innerText
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);

    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    // update account balance after adding in Deposit

    const balanceTotal = document.getElementById('balance-total');

    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    // console.log(previousBalanceTotal)
    // const newBalanceTotal = previousBalanceTotal + newDepositTotal;
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    // clear the input field after deposit 
    depositInput.value = '';
})

//handle withdraw event handler
document.getElementById("withdraw-button").addEventListener("click", function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    // console.log(withdrawAmountText);
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    // console.log(newWithdrawAmount);

    // set withdraw Total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // update balance after withdraw 

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;


    // clear withdraw input 
    withdrawInput.value = '';
})


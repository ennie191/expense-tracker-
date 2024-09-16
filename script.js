document.addEventListener('DOMContentLoaded', () => {
    const addExpenseBtn = document.getElementById('add-expense-btn');
    const expenseNameInput = document.getElementById('expense-name');
    const expenseAmountInput = document.getElementById('expense-amount');
    const expenseList = document.getElementById('expense-list');
    const totalAmountSpan = document.getElementById('total-amount');

    let totalAmount = 0;

    addExpenseBtn.addEventListener('click', () => {
        const expenseName = expenseNameInput.value.trim();
        const expenseAmount = parseFloat(expenseAmountInput.value.trim());

        if (expenseName === '' || isNaN(expenseAmount) || expenseAmount <= 0) {
            alert('Please enter valid expense details.');
            return;
        }

        const li = document.createElement('li');
        li.innerHTML = `
            ${expenseName} - $${expenseAmount.toFixed(2)}
            <button class="remove-btn">Remove</button>
        `;

        const removeBtn = li.querySelector('.remove-btn');
        removeBtn.addEventListener('click', () => {
            totalAmount -= expenseAmount;
            totalAmountSpan.textContent = totalAmount.toFixed(2);
            li.remove();
        });

        expenseList.appendChild(li);

        totalAmount += expenseAmount;
        totalAmountSpan.textContent = totalAmount.toFixed(2);

        expenseNameInput.value = '';
        expenseAmountInput.value = '';
    });
});

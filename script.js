const statusButton = document.querySelector('.status-button');

const resetButton = document.querySelector('.reset-button');

const statusText = document.querySelector('.status-text');

const statusPanel = document.querySelector('.status-panel');

statusButton.addEventListener('click', function() {
    statusText.textContent = 'Практическая работа выполнена!';
    statusPanel.classList.add('completed');
});

resetButton.addEventListener('click', function() {
    statusText.textContent = 'Работа ещё не отмечена как выполненная.';
    statusPanel.classList.remove('completed');
});

const bottonAddTask = document.getElementById('show-input-btn');
const inputCard = document.getElementById('input-container');
const inputTask = document.getElementById('task-name');
const taskList = document.getElementById('task-list');

bottonAddTask.addEventListener('click', () => {
    bottonAddTask.classList.add('d-none');
    inputCard.classList.remove('d-none');
    inputTask.focus();
});

inputTask.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const inputText = inputTask.value.trim();

        if (inputText !== "") {
            addTask(inputText);
            resetTaskView();
        }
    }
});

function addTask(text) {
    const li = document.createElement('li');
    li.className = 'task-item';
    li.innerHTML = `
    <i class="bi bi-circle task-check"></i>
    <span class="task-text">${text}</span>
    `;

    taskList.appendChild(li);

    li.querySelector('.task-check').addEventListener('click', (e) => {
        e.target.classList.toggle('bi-circle');
        e.target.classList.toggle('bi-check-circle-fill');
        li.classList.toggle('completed');
    });
}


document.addEventListener('mousedown', (e) => {
    if (!inputCard.contains(e.target) && inputTask.value === "") {

        resetTaskView();
    }
});

function resetTaskView() {
    inputTask.value = "";
    inputCard.classList.add('d-none');
    bottonAddTask.classList.remove('d-none');
}



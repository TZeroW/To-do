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
    <button class="delete-btn">
        <i class="bi bi-trash" aria-label="Borrar tarea"></i>
    </button>
    `;

    taskList.appendChild(li);

    li.querySelector('.task-check').addEventListener('click', (e) => {
        e.target.classList.toggle('bi-circle');
        e.target.classList.toggle('bi-check-circle-fill');
        li.classList.toggle('completed');
    });

    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
        li.style.opacity = '0';
        li.style.transform = 'translateX(20px)';
        setTimeout(() => {
            li.remove();
        }, 200);
    })
}

function mensajeDesarrollo() {
    window.alert("Esta sección está en desarrollo.");
}

function updateDate() {
    const dateElement = document.getElementById('date-day');
    const now = new Date();

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    let formattedDate = now.toLocaleDateString('es-ES', options);
    formattedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

    dateElement.textContent = formattedDate;
}

updateDate();



// Boton y el input pa que desaparesca y aparesca

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



// Time & Greeting
function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;

  // Background change
  if (hours < 12) {
    document.body.style.background = 'linear-gradient(to right, #FFEFBA, #FFFFFF)';
  } else if (hours < 18) {
    document.body.style.background = 'linear-gradient(to right, #56CCF2, #2F80ED)';
  } else {
    document.body.style.background = 'linear-gradient(to right, #2C3E50, #4CA1AF)';
  }
}
setInterval(updateTime, 1000);
updateTime();

// Focus Input
const focusInput = document.getElementById('focus-input');
focusInput.value = localStorage.getItem('dailyFocus') || '';
focusInput.addEventListener('input', () => {
  localStorage.setItem('dailyFocus', focusInput.value);
});

// To-Do List
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

function loadTodos() {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${todo}</span>
      <button onclick="deleteTodo(${index})">🗑️</button>
    `;
    todoList.appendChild(li);
  });
}

function addTodo() {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  if (todoInput.value.trim() !== '') {
    todos.push(todoInput.value.trim());
    localStorage.setItem('todos', JSON.stringify(todos));
    todoInput.value = '';
    loadTodos();
  }
}

function deleteTodo(index) {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos.splice(index, 1);
  localStorage.setItem('todos', JSON.stringify(todos));
  loadTodos();
}

loadTodos();

// Quotes
const quotes = [
  "Stay hungry, stay foolish.",
  "You miss 100% of the shots you don’t take.",
  "Believe you can and you’re halfway there.",
  "Dream big and dare to fail.",
  "Success is not final, failure is not fatal."
];
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
document.getElementById('quote').textContent = randomQuote;

// ============================================
//  NOTEVAULT — Task Manager
//  Features: Add, Edit, Delete, Complete,
//            Filter, Sort, localStorage
// ============================================

// ===== STORAGE KEY =====
const STORAGE_KEY = 'notevault_tasks';

// ===== STATE =====
let tasks = [];
let currentFilter = 'all';   // all | pending | completed
let currentSort = 'date-desc'; // date-desc | date-asc | a-z
let editingTaskId = null;

// ===== DOM ELEMENTS =====
const taskInput         = document.getElementById('task-input');
const addBtn            = document.getElementById('add-btn');
const tasksList         = document.getElementById('tasks-list');
const emptyState        = document.getElementById('empty-state');
const filterSelect      = document.getElementById('filter-select');
const sortSelect        = document.getElementById('sort-select');
const clearCompletedBtn = document.getElementById('clear-completed-btn');
const taskCountBadge    = document.getElementById('task-count-badge');
const completedCount    = document.getElementById('completed-count');
const totalCount        = document.getElementById('total-count');
const statTotal         = document.getElementById('stat-total');
const statPending       = document.getElementById('stat-pending');
const statCompleted     = document.getElementById('stat-completed');
const editModal         = document.getElementById('edit-modal');
const editInput         = document.getElementById('edit-input');
const modalOverlay      = document.getElementById('modal-overlay');
const modalCloseBtn     = document.getElementById('modal-close-btn');
const modalCancelBtn    = document.getElementById('modal-cancel-btn');
const modalSaveBtn      = document.getElementById('modal-save-btn');

// ===== UTILITY: Format timestamp =====
function formatTime(timestamp) {
  const d = new Date(timestamp);
  const date = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  const time = d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  return `${date} at ${time}`;
}

// ===== UTILITY: Escape HTML (prevent XSS) =====
function escapeHTML(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// ===== STORAGE: Load tasks =====
function loadTasks() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    tasks = saved ? JSON.parse(saved) : [];
  } catch (err) {
    console.error('Error loading tasks:', err);
    tasks = [];
  }
}

// ===== STORAGE: Save tasks =====
function saveTasks() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (err) {
    console.error('Error saving tasks:', err);
  }
}

// ===== CORE: Add task =====
function addTask() {
  const text = taskInput.value.trim();
  if (!text) {
    taskInput.focus();
    taskInput.style.borderColor = 'var(--danger)';
    setTimeout(() => { taskInput.style.borderColor = ''; }, 1200);
    return;
  }

  const newTask = {
    id: Date.now(),
    text: text,
    completed: false,
    timestamp: Date.now()
  };

  tasks.unshift(newTask);
  saveTasks();
  taskInput.value = '';
  taskInput.focus();
  render();
}

// ===== CORE: Toggle completion =====
function toggleTask(id) {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.completed = !task.completed;
    saveTasks();
    render();
  }
}

// ===== CORE: Delete task =====
function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  saveTasks();
  render();
}

// ===== CORE: Open edit modal =====
function openEditModal(id) {
  const task = tasks.find(t => t.id === id);
  if (!task) return;
  editingTaskId = id;
  editInput.value = task.text;
  editModal.classList.remove('hidden');
  setTimeout(() => editInput.focus(), 50);
}

// ===== CORE: Close edit modal =====
function closeEditModal() {
  editModal.classList.add('hidden');
  editingTaskId = null;
  editInput.value = '';
}

// ===== CORE: Save edited task =====
function saveEditedTask() {
  if (!editingTaskId) return;
  const text = editInput.value.trim();
  if (!text) {
    editInput.focus();
    editInput.style.borderColor = 'var(--danger)';
    setTimeout(() => { editInput.style.borderColor = ''; }, 1200);
    return;
  }
  const task = tasks.find(t => t.id === editingTaskId);
  if (task) {
    task.text = text;
    saveTasks();
    render();
    closeEditModal();
  }
}

// ===== CORE: Clear completed tasks =====
function clearCompleted() {
  const hasCompleted = tasks.some(t => t.completed);
  if (!hasCompleted) return;
  tasks = tasks.filter(t => !t.completed);
  saveTasks();
  render();
}

// ===== FILTER: Get filtered tasks =====
function getFilteredTasks() {
  if (currentFilter === 'pending')   return tasks.filter(t => !t.completed);
  if (currentFilter === 'completed') return tasks.filter(t => t.completed);
  return [...tasks];
}

// ===== SORT: Sort tasks =====
function sortTasks(list) {
  const arr = [...list];
  if (currentSort === 'date-asc')  return arr.sort((a, b) => a.timestamp - b.timestamp);
  if (currentSort === 'date-desc') return arr.sort((a, b) => b.timestamp - a.timestamp);
  if (currentSort === 'a-z')       return arr.sort((a, b) => a.text.localeCompare(b.text));
  return arr;
}

// ===== RENDER: Update stats =====
function updateStats() {
  const total     = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending   = total - completed;

  // Header stats
  completedCount.textContent = completed;
  totalCount.textContent     = total;

  // Stat cards
  statTotal.textContent     = total;
  statPending.textContent   = pending;
  statCompleted.textContent = completed;

  // Badge
  const filtered = getFilteredTasks();
  const word = filtered.length === 1 ? 'task' : 'tasks';
  taskCountBadge.textContent = `${filtered.length} ${word}`;
}

// ===== RENDER: Task list =====
function renderTasks() {
  tasksList.innerHTML = '';

  const filtered = getFilteredTasks();
  const sorted   = sortTasks(filtered);

  if (sorted.length === 0) {
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');

  sorted.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = `task-item${task.completed ? ' completed' : ''}`;
    li.style.animationDelay = `${index * 0.04}s`;

    li.innerHTML = `
      <input
        type="checkbox"
        class="task-checkbox"
        ${task.completed ? 'checked' : ''}
        data-id="${task.id}"
        aria-label="Mark task complete"
      />
      <div class="task-content">
        <div class="task-text">${escapeHTML(task.text)}</div>
        <div class="task-time">
          <i class="fas fa-clock"></i>
          ${formatTime(task.timestamp)}
        </div>
      </div>
      <div class="task-actions">
        <button class="task-btn edit" data-id="${task.id}" title="Edit task">
          <i class="fas fa-edit"></i>
        </button>
        <button class="task-btn delete" data-id="${task.id}" title="Delete task">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    `;

    tasksList.appendChild(li);
  });

  // Attach events via delegation (avoids inline onclick)
  tasksList.querySelectorAll('.task-checkbox').forEach(cb => {
    cb.addEventListener('change', () => toggleTask(Number(cb.dataset.id)));
  });
  tasksList.querySelectorAll('.task-btn.edit').forEach(btn => {
    btn.addEventListener('click', () => openEditModal(Number(btn.dataset.id)));
  });
  tasksList.querySelectorAll('.task-btn.delete').forEach(btn => {
    btn.addEventListener('click', () => deleteTask(Number(btn.dataset.id)));
  });
}

// ===== RENDER: Full UI =====
function render() {
  renderTasks();
  updateStats();
}

// ===== EVENTS: Add task =====
addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') { e.preventDefault(); addTask(); }
});

// ===== EVENTS: Filters & Sort =====
filterSelect.addEventListener('change', e => { currentFilter = e.target.value; render(); });
sortSelect.addEventListener('change',   e => { currentSort   = e.target.value; render(); });

// ===== EVENTS: Clear completed =====
clearCompletedBtn.addEventListener('click', clearCompleted);

// ===== EVENTS: Modal =====
modalOverlay.addEventListener('click', closeEditModal);
modalCloseBtn.addEventListener('click', closeEditModal);
modalCancelBtn.addEventListener('click', closeEditModal);
modalSaveBtn.addEventListener('click', saveEditedTask);
editInput.addEventListener('keydown', e => {
  if (e.key === 'Enter')  { e.preventDefault(); saveEditedTask(); }
  if (e.key === 'Escape') { closeEditModal(); }
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !editModal.classList.contains('hidden')) closeEditModal();
});

// ===== INIT =====
function init() {
  loadTasks();
  render();
  taskInput.focus();
}

init();

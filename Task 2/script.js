// TaskFlow — script.js | Mukkamula Manoj
'use strict';

let tasks = [], sortOrder = 'newest', searchQ = '';
const $ = id => document.getElementById(id);

const dom = {
  navToggle: $('navToggle'), navMenu: $('navMenu'),
  taskForm: $('taskForm'), taskTitle: $('taskTitle'), taskDesc: $('taskDesc'),
  taskPriority: $('taskPriority'), taskCategory: $('taskCategory'), taskDue: $('taskDue'),
  clearFormBtn: $('clearFormBtn'), taskList: $('taskList'), emptyState: $('emptyState'),
  taskSearch: $('taskSearch'), sortSelect: $('sortSelect'), clearAllBtn: $('clearAllBtn'),
  statTotal: $('statTotal'), statDone: $('statDone'), statPending: $('statPending'),
  progressBar: $('progressBar'), progressWrap: $('progressWrap'), progressLabel: $('progressLabel'),
  contactForm: $('contactForm'), contactName: $('contactName'), contactEmail: $('contactEmail'),
  contactSubject: $('contactSubject'), contactMessage: $('contactMessage'),
  contactCharCount: $('contactCharCount'), contactSubmitBtn: $('contactSubmitBtn'),
  successBanner: $('successBanner'), footerYear: $('footerYear'), toast: $('toast'),
};

// helpers
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2,6);
const escHtml = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const isEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

function formatDate(str) {
  if (!str) return null;
  const [y,m,d] = str.split('-').map(Number);
  return new Date(y,m-1,d).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'});
}
function isOverdue(str) {
  if (!str) return false;
  const [y,m,d] = str.split('-').map(Number);
  const now = new Date(); now.setHours(0,0,0,0);
  return new Date(y,m-1,d) < now;
}

let toastTimer;
function toast(msg) {
  clearTimeout(toastTimer);
  dom.toast.textContent = msg;
  dom.toast.classList.add('show');
  toastTimer = setTimeout(() => dom.toast.classList.remove('show'), 2800);
}

function setErr(el, errId, msg) {
  el.classList.toggle('is-invalid', !!msg);
  el.classList.toggle('is-valid', !msg);
  $(errId).textContent = msg || '';
}
function clearErr(el, errId) {
  el.classList.remove('is-invalid','is-valid');
  $(errId).textContent = '';
}

// navbar
dom.navToggle.addEventListener('click', () => {
  const open = dom.navMenu.classList.toggle('is-open');
  dom.navToggle.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    dom.navMenu.classList.remove('is-open');
    dom.navToggle.setAttribute('aria-expanded','false');
  });
});

// scroll spy
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting)
      document.querySelectorAll('.nav-link').forEach(l =>
        l.classList.toggle('active', l.getAttribute('href') === `#${e.target.id}`)
      );
  });
}, { rootMargin: '-40% 0px -50% 0px' });
document.querySelectorAll('section[id], main[id]').forEach(s => observer.observe(s));

// task form
const taskFields = ['taskTitle','taskPriority','taskCategory'];
taskFields.forEach(id => $(id).addEventListener('input', () => clearErr($(id), id+'Error')));

function validateTask() {
  let ok = true;
  const t = dom.taskTitle.value.trim();
  if (!t || t.length < 3) { setErr(dom.taskTitle,'taskTitleError', !t ? 'Title is required.' : 'At least 3 characters.'); ok=false; }
  else setErr(dom.taskTitle,'taskTitleError','');
  if (!dom.taskPriority.value) { setErr(dom.taskPriority,'taskPriorityError','Select a priority.'); ok=false; }
  else setErr(dom.taskPriority,'taskPriorityError','');
  if (!dom.taskCategory.value) { setErr(dom.taskCategory,'taskCategoryError','Select a category.'); ok=false; }
  else setErr(dom.taskCategory,'taskCategoryError','');
  return ok;
}

dom.taskForm.addEventListener('submit', e => {
  e.preventDefault();
  if (!validateTask()) return;
  tasks.unshift({ id:uid(), done:false, createdAt:Date.now(),
    title:dom.taskTitle.value.trim(), desc:dom.taskDesc.value.trim(),
    priority:dom.taskPriority.value, category:dom.taskCategory.value, due:dom.taskDue.value||null });
  render(); updateStats();
  dom.taskForm.reset();
  taskFields.forEach(id => clearErr($(id), id+'Error'));
  toast('Task added.'); dom.taskTitle.focus();
});

dom.clearFormBtn.addEventListener('click', () => {
  dom.taskForm.reset();
  taskFields.forEach(id => clearErr($(id), id+'Error'));
});

// render
function getSorted() {
  let list = [...tasks];
  if (searchQ) { const q = searchQ.toLowerCase(); list = list.filter(t => t.title.toLowerCase().includes(q) || t.desc?.toLowerCase().includes(q)); }
  const pri = {high:0,medium:1,low:2};
  if (sortOrder==='oldest')   list.sort((a,b) => a.createdAt-b.createdAt);
  else if (sortOrder==='priority') list.sort((a,b) => pri[a.priority]-pri[b.priority]);
  else if (sortOrder==='az')  list.sort((a,b) => a.title.localeCompare(b.title));
  else list.sort((a,b) => b.createdAt-a.createdAt);
  return list;
}

function render() {
  const list = getSorted();
  dom.taskList.innerHTML = '';
  dom.emptyState.classList.toggle('hidden', !!list.length);
  list.forEach(t => dom.taskList.appendChild(makeItem(t)));
}

function makeItem(t) {
  const cap = s => s.charAt(0).toUpperCase()+s.slice(1);
  const li = document.createElement('li');
  li.className = 'task-item' + (t.done?' is-done':'');
  li.dataset.priority = t.priority;
  const due = t.due ? `<span class="task-due${isOverdue(t.due)&&!t.done?' overdue':''}"><i class="fa-regular fa-calendar"></i> ${isOverdue(t.due)&&!t.done?'Overdue · ':''}${formatDate(t.due)}</span>` : '';
  li.innerHTML = `
    <input type="checkbox" class="task-checkbox" ${t.done?'checked':''} aria-label="Toggle task"/>
    <div class="task-body">
      <p class="task-title">${escHtml(t.title)}</p>
      ${t.desc?`<p class="task-desc">${escHtml(t.desc)}</p>`:''}
      <div class="task-meta">
        <span class="tag tag-${t.priority}">${cap(t.priority)}</span>
        <span class="tag tag-${t.category}">${cap(t.category)}</span>
        ${due}
      </div>
    </div>
    <div class="task-actions">
      <button class="icon-btn" data-del aria-label="Delete"><i class="fa-solid fa-trash-can"></i></button>
    </div>`;
  li.querySelector('.task-checkbox').addEventListener('change', () => {
    t.done=!t.done; render(); updateStats();
    toast(t.done?'Marked complete.':'Marked incomplete.');
  });
  li.querySelector('[data-del]').addEventListener('click', () => {
    li.classList.add('is-removing');
    li.addEventListener('animationend', () => { tasks=tasks.filter(x=>x.id!==t.id); render(); updateStats(); }, {once:true});
    toast('Task deleted.');
  });
  return li;
}

dom.taskSearch.addEventListener('input', () => { searchQ=dom.taskSearch.value.trim(); render(); });
dom.sortSelect.addEventListener('change', () => { sortOrder=dom.sortSelect.value; render(); });
dom.clearAllBtn.addEventListener('click', () => {
  if (!tasks.length||!confirm('Clear all tasks?')) return;
  tasks=[]; render(); updateStats(); toast('All tasks cleared.');
});

function updateStats() {
  const total=tasks.length, done=tasks.filter(t=>t.done).length, pct=total?Math.round(done/total*100):0;
  dom.statTotal.textContent=total; dom.statDone.textContent=done; dom.statPending.textContent=total-done;
  dom.progressBar.style.width=pct+'%'; dom.progressLabel.textContent=pct+'% complete';
  dom.progressWrap.setAttribute('aria-valuenow',pct);
}

// contact form
dom.contactMessage.addEventListener('input', () => {
  const len=dom.contactMessage.value.length;
  dom.contactCharCount.textContent=len+' / 1000';
  dom.contactCharCount.style.color=len>900?'var(--red)':'';
});
const contactFields = ['contactName','contactEmail','contactSubject','contactMessage'];
contactFields.forEach(id => $(id).addEventListener('input', () => clearErr($(id), id+'Error')));
dom.contactEmail.addEventListener('blur', () => {
  const v=dom.contactEmail.value.trim();
  if (v&&!isEmail(v)) setErr(dom.contactEmail,'contactEmailError','Enter a valid email.');
});

function validateContact() {
  let ok=true;
  const name=dom.contactName.value.trim(), email=dom.contactEmail.value.trim(),
        subj=dom.contactSubject.value.trim(), msg=dom.contactMessage.value.trim();
  if (!name||name.length<2) { setErr(dom.contactName,'contactNameError',!name?'Name is required.':'At least 2 characters.'); ok=false; } else setErr(dom.contactName,'contactNameError','');
  if (!email) { setErr(dom.contactEmail,'contactEmailError','Email is required.'); ok=false; }
  else if (!isEmail(email)) { setErr(dom.contactEmail,'contactEmailError','Enter a valid email.'); ok=false; }
  else setErr(dom.contactEmail,'contactEmailError','');
  if (!subj) { setErr(dom.contactSubject,'contactSubjectError','Subject is required.'); ok=false; } else setErr(dom.contactSubject,'contactSubjectError','');
  if (!msg||msg.length<10) { setErr(dom.contactMessage,'contactMessageError',!msg?'Message is required.':'At least 10 characters.'); ok=false; } else setErr(dom.contactMessage,'contactMessageError','');
  return ok;
}

dom.contactForm.addEventListener('submit', e => {
  e.preventDefault();
  if (!validateContact()) { dom.contactForm.querySelector('.is-invalid')?.focus(); return; }
  const btn=dom.contactSubmitBtn;
  btn.disabled=true; btn.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
  setTimeout(() => {
    dom.contactForm.reset(); dom.contactCharCount.textContent='0 / 1000';
    contactFields.forEach(id => clearErr($(id), id+'Error'));
    dom.successBanner.style.display='flex';
    dom.successBanner.scrollIntoView({behavior:'smooth',block:'nearest'});
    btn.disabled=false; btn.innerHTML='<i class="fa-solid fa-paper-plane"></i> Send Message';
    setTimeout(() => dom.successBanner.style.display='none', 6000);
  }, 1200);
});

// init
dom.footerYear.textContent = new Date().getFullYear();
dom.successBanner.style.display = 'none';
render(); updateStats();

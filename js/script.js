// ===== KREDENSIAL =====
const USERS = {
  admin: 'admin123',
  user:  'user123'
};

// ===== LOGIN =====
function handleLogin() {
  const username = document.getElementById('username').value.trim();
  const password  = document.getElementById('password').value;
  const errorMsg  = document.getElementById('errorMsg');
  const btn       = document.getElementById('loginBtn');

  errorMsg.style.display = 'none';

  if (!USERS[username] || USERS[username] !== password) {
    errorMsg.style.display = 'block';
    document.getElementById('password').value = '';
    document.getElementById('password').focus();
    return;
  }

  btn.textContent = 'Memuat...';
  btn.classList.add('loading');

  // Simpan sesi & redirect ke dashboard
  sessionStorage.setItem('loggedUser', username);
  setTimeout(() => {
    window.location.href = 'dashboard.html';
  }, 800);
}

// ===== ENTER KEY =====
document.addEventListener('keydown', e => {
  if (e.key === 'Enter') handleLogin();
});
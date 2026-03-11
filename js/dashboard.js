// ===== CEK SESI =====
const loggedUser = sessionStorage.getItem('loggedUser');

if (!loggedUser) {
  // Belum login, redirect ke halaman login
  window.location.href = 'login.html';
}

// ===== ISI NAMA USER =====
document.addEventListener('DOMContentLoaded', () => {
  const userBadge  = document.getElementById('userBadge');
  const welcomeMsg = document.getElementById('welcomeMsg');

  if (userBadge)  userBadge.textContent  = '👤 ' + loggedUser;
  if (welcomeMsg) welcomeMsg.textContent = 'Halo, ' + loggedUser + '! 👋';
});

// ===== LOGOUT =====
function handleLogout() {
  sessionStorage.removeItem('loggedUser');
  window.location.href = 'login.html';
}
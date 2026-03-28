const loginBtn = document.getElementById('loginBtn');
const userInfoDiv = document.getElementById('userInfo');
const usernameEl = document.getElementById('username');
const avatarEl = document.getElementById('avatar');

// Your TikTok App credentials
const CLIENT_KEY = 'YOUR_TIKTOK_CLIENT_KEY';
const REDIRECT_URI = 'https://yourdomain.com/callback.html'; // must match TikTok app

loginBtn.addEventListener('click', () => {
  const authURL = `https://www.tiktok.com/auth/authorize/?client_key=${CLIENT_KEY}&scope=user.info.basic&response_type=code&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&state=demo`;
  window.location.href = authURL;
});

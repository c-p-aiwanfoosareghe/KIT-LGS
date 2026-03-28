const loginBtn = document.getElementById('loginBtn');
const userInfoDiv = document.getElementById('userInfo');
const usernameEl = document.getElementById('username');
const avatarEl = document.getElementById('avatar');

// Your TikTok App credentials
const CLIENT_KEY = 'sbawh4szh02u1o82ta';
const REDIRECT_URI = 'https://c-p-aiwanfoosareghe.github.io/KIT-LGS/callback.html/'; // must match TikTok app

loginBtn.addEventListener('click', () => {
  const authURL = `https://www.tiktok.com/auth/authorize/?client_key=${CLIENT_KEY}&scope=user.info.basic&response_type=code&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&state=demo`;
  window.location.href = authURL;
});

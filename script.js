// Menü aktifliği ve içerik değiştirme fonksiyonu
function activateTab(tabId) {
  const tabs = document.querySelectorAll('nav.bottom-nav button');
  const content = document.getElementById('content');

  const tabContents = {
    'tab-home': `<h1>Anasayfa</h1><p>Buraya tarama içeriği gelecek.</p>`,
    'tab-withdraw': `<h1>Para Çek</h1><p>Para çekme formu ve bilgileri buraya.</p>`,
    'tab-profile': `<h1>Profilim</h1><p>Kullanıcı bilgileri ve ayarlar burada.</p>`,
    'tab-invite': `<h1>Davet Et & Kazan</h1><p>Davet linklerin ve kazanma detayları.</p>`
  };

  tabs.forEach(btn => {
    btn.classList.toggle('active', btn.id === tabId);
    btn.setAttribute('tabindex', btn.id === tabId ? '0' : '-1');
  });

  if (content) {
    content.innerHTML = tabContents[tabId] || '';
  }
}

// Menü butonlarına event ekleme
function setupMenuEvents() {
  const tabs = document.querySelectorAll('nav.bottom-nav button');
  tabs.forEach(btn => {
    btn.addEventListener('click', () => activateTab(btn.id));
  });
}

// Sayfa yüklendiğinde çalışacak
document.addEventListener('DOMContentLoaded', () => {
  // Menü yüklendikten sonra eventleri kur
  setupMenuEvents();
});

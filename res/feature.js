$lang = navigator.language || navigator.userLanguage;
$loading = document.querySelector('.loading--container')
function load(){
$qz1 = 'fix blocked accounts?'
$qz2 = 'reset my password?'
$qz3 = 'change email address?'
$qz4 = 'update profile picture?'
$qz5 = 'recover deleted messages?'
$qz6 = 'privacy settings options?'
$qz7 = 'contact customer support?'
$qz8 = 'delete my account?'
$qz9 = 'change notification settings?'
$qz10 = 'link social media accounts?'
$qz11 = 'enable two-factor authentication?'
$qz12 = 'subscription plan details?'
$qz13 = 'track my order?'
$qz14 = 'request a refund?'
$qz15 = 'view terms and conditions?'
$qz16 = 'report a bug?'
$qz17 = 'clear app cache?'
$qz18 = 'change language settings?'
$qz19 = 'manage app permissions?'
$qz20 = 'log out from account?'

if($lang == 'id-ID'){
$qz1 = 'memperbaiki akun terblokir?'
$qz2 = 'reset kata sandi saya?'
$qz3 = 'ubah alamat email?'
$qz4 = 'perbarui foto profil?'
$qz5 = 'pulihkan pesan yang dihapus?'
$qz6 = 'opsi pengaturan privasi?'
$qz7 = 'hubungi dukungan pelanggan?'
$qz8 = 'hapus akun saya?'
$qz9 = 'ubah pengaturan notifikasi?'
$qz10 = 'hubungkan akun media sosial?'
$qz11 = 'aktifkan autentikasi dua faktor?'
$qz12 = 'detail paket langganan?'
$qz13 = 'lacak pesanan saya?'
$qz14 = 'minta pengembalian dana?'
$qz15 = 'lihat syarat dan ketentuan?'
$qz16 = 'laporkan bug?'
$qz17 = 'hapus cache aplikasi?'
$qz18 = 'ubah pengaturan bahasa?'
$qz19 = 'kelola izin aplikasi?'
$qz20 = 'keluar dari akun?'
}

const suggestions = [
  { text: $qz1, icon: 'person' },
  { text: $qz2, icon: 'lock' },
  { text: $qz3, icon: 'mail' },
  { text: $qz4, icon: 'photo_camera' },
  { text: $qz5, icon: 'message' },
  { text: $qz6, icon: 'security' },
  { text: $qz7, icon: 'support' },
  { text: $qz8, icon: 'delete' },
  { text: $qz9, icon: 'notifications' },
  { text: $qz10, icon: 'share' },
  { text: $qz11, icon: 'lock_outline' },
  { text: $qz12, icon: 'payments' },
  { text: $qz13, icon: 'local_shipping' },
  { text: $qz14, icon: 'payments' },
  { text: $qz15, icon: 'gavel' },
  { text: $qz16, icon: 'bug_report' },
  { text: $qz17, icon: 'storage' },
  { text: $qz18, icon: 'language' },
  { text: $qz19, icon: 'settings' },
  { text: $qz20, icon: 'exit_to_app' }
];

  // Fungsi untuk mengacak urutan array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Acak urutan array suggestions
  shuffleArray(suggestions);

  // Ambil semua elemen 'suggestion'
  const suggestionElements = document.querySelectorAll('.suggestion');

  // Iterasi setiap elemen dan tambahkan teks serta ikon yang sesuai
  suggestionElements.forEach((element, index) => {
    const textElement = element.querySelector('.text');
    const iconElement = element.querySelector('.icon');

    // Set teks dan ikon berdasarkan data acak
    textElement.textContent = suggestions[index].text;
    iconElement.textContent = suggestions[index].icon;
  });
document.getElementById('about_developer').addEventListener('click',function(){
  window.scrollTo(0,0)
  document.body.style.overflow = 'hidden'
  document.querySelector('.loading--container').style.display = 'flex'
  setTimeout(function(){
    document.body.style.overflow = 'auto';
      document.querySelector('.loading--container').style.display = 'none';
    window.location = './pages/developer_contact.html'
  }, 5000)
})
}
load()

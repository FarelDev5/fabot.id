function translate(){
$lang = navigator.language || navigator.userLanguage;

console.log("Bahasa yang digunakan pada perangkat: " + $lang);
if($lang == 'id-ID'){
  document.querySelector('.subtitle').innerText = 'Apa yang bisa saya bantu hari ini?'
  document.getElementById('ai-tool').innerText = 'Alat AI oleh Boxapp.Studio'
  document.getElementById('app-des').innerText ='Boxapp.Studio, dipimpin oleh Farel Developer, memperkenalkan alat AI revolusioner yang didukung oleh teknologi Gemini API Google. Alat ini dirancang untuk menyederhanakan integrasi kecerdasan buatan (AI) ke dalam berbagai aplikasi baik untuk pengembang maupun pengguna umum. Memanfaatkan kekuatan API Gemini Google, alat ini memungkinkan pemrosesan bahasa alami tingkat lanjut, analisis data yang lebih akurat, dan pengambilan keputusan cepat berbasis AI.'
  document.getElementById('title-feature').innerText = 'Alat Boxapp.Studio AI menawarkan:'
  document.getElementById('f1').innerText = 'Integrasi yang mudah melalui antarmuka API sederhana dan dokumentasi yang komprehensif.'
  document.getElementById('f2').innerText = 'Analisis data real-time, mendukung berbagai aplikasi bisnis, mulai dari analitik hingga otomatisasi.'
  document.getElementById('f3').innerText = 'Pemrosesan bahasa alami yang cerdas, meningkatkan komunikasi antara manusia dan mesin.'
  document.getElementById('f4').innerText = 'Optimalisasi kinerja melalui AI yang terhubung langsung dengan ekosistem Google.'
  document.getElementById('f5').innerText = 'Dibuat dengan mempertimbangkan skalabilitas dan fleksibilitas, alat ini ideal untuk bisnis dengan segala ukuran, mulai dari startup hingga perusahaan besar.'
  document.getElementById('about_developer').innerText = 'Tentang Pengembang'
  document.querySelector('.disclaimer-text').innerText = 'alat bantuan AI yang dikembangkan oleh boxapp.studio dari farel developer'
  document.getElementById('textbox').placeholder = 'Masukkan pesan di sini'
}

}
translate()
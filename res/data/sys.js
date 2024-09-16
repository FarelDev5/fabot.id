function loadAllPages() {
  let $totalBot; // Deklarasikan variabel $totalBot

  if (localStorage.getItem("$totalBot")) {
    // Ambil nilai dari localStorage jika ada
    $totalBot = localStorage.getItem("$totalBot");
  } else {
    // Jika tidak ada nilai, set default ke 50 dan simpan ke localStorage
    $totalBot = 50;
    localStorage.setItem("$totalBot", $totalBot);
  }

  // Tampilkan nilai $totalBot di elemen dengan id "total"
  document.getElementById("total").innerText = $totalBot;
}

loadAllPages();

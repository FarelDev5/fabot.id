function translate() {
  // Mendapatkan elemen sidebar
  const sidebar = document.querySelector(".sidebar");
  const creditContainer = document.querySelector(".credit--container");
  const loadingContainer = document.querySelector(".loading--container");
  const lockGround = document.querySelector(".lock--ground");
  const xMark = document.querySelector(".x-mark");

  // Cek apakah elemen sidebar dan elemen lainnya ada di halaman
  if (
    !sidebar ||
    !creditContainer ||
    !loadingContainer ||
    !lockGround ||
    !xMark
  ) {
    console.error("Elemen yang diperlukan tidak ditemukan di halaman.");
    return;
  }

  var lang = navigator.language || navigator.userLanguage;

  // Default teks tombol
  var b1 = "Credit";
  var b2 = "Share";
  var b3 = "Add Stars";
  var b4 = "Follow Me";
  var b5 = "Support";

  // Jika bahasa Indonesia, ganti teks tombol
  if (lang == "id-ID") {
    b1 = "Kredit";
    b2 = "Bagikan";
    b3 = "Tambah Bintang";
    b4 = "Ikuti Saya";
    b5 = "Dukungan";
  }

  // Daftar UI tombol
  var ui = [
    { getButton: b1 },
    { getButton: b2 },
    { getButton: b3 },
    { getButton: b4 },
    { getButton: b5 },
  ];

  // Loop untuk membuat tombol dan menambahkan event listener
  ui.forEach((data, index) => {
    var button = document.createElement("button");
    button.textContent = data.getButton;
    sidebar.append(button);

    // Event listener untuk masing-masing tombol
    button.addEventListener("click", function () {
      switch (index) {
        case 0:
          setTimeout(function () {
            document.body.style.overflow = "hidden";
            creditContainer.style.display = "flex";
            sidebar.classList.remove("show");
          }, 100);
          break;
        case 1:
          window.scrollTo(0, 0);
          setTimeout(function () {
            document.querySelector(".share-container").style.bottom = "0";
            sidebar.classList.remove("show");
            lockGround.classList.remove("add");
            document.body.style.overflow = "hidden";
          }, 100);
          break;
        case 2:
          window.scrollTo(0, 0);
          document.body.style.overflow = "hidden";
          setTimeout(function () {
            var paymentContainer = document.querySelector(".pay--container");
            paymentContainer.style.left = "0%";
            document.body.classList.toggle("lock");
            document.body.style.overflow = "hidden";
            sidebar.classList.remove("show");
            lockGround.classList.remove("add");
            lockGround.style.display = 'none'
            document.body.classList.remove("lock");
            document.body.style.overflow = "hidden";
          }, 100);
          break;
        case 3:
          window.scrollTo(0, 0);
          document.body.style.overflow = "hidden";
          loadingContainer.style.display = "flex";
          setTimeout(function () {
            document.body.style.overflow = "auto";
            document.querySelector(".loading--container").style.display =
              "none";
            window.location.href = "./pages/me_md.html";
            sidebar.classList.remove("show");
            lockGround.classList.remove("add");
            document.body.classList.remove("lock");
            document.body.style.overflow = "auto";
          }, 4000);
          break;
        case 4:
          window.scrollTo(0, 0);
          document.body.style.overflow = "hidden";
          loadingContainer.style.display = "flex";
          setTimeout(function () {
            document.body.style.overflow = "auto";
            document.querySelector(".loading--container").style.display =
              "none";
            window.location.href = "https://saweria.co/FarelAlfareza";
            sidebar.classList.remove("show");
            lockGround.classList.remove("add");
            document.body.classList.remove("lock");
            document.body.style.overflow = "auto";
          }, 4000);
          break;
        // Tambahkan case untuk tombol lainnya jika diperlukan
        default:
          console.log("Button " + index + " clicked");
      }
    });
  });

  // Event untuk menutup sidebar
  xMark.addEventListener("click", function () {
    sidebar.classList.toggle("show");
    lockGround.classList.toggle("add");
    document.body.classList.toggle("lock");
    document.body.style.overflow = sidebar.classList.contains("show")
      ? "hidden"
      : "auto";
  });

  // Event untuk menutup overlay (area di luar sidebar)
  lockGround.addEventListener("click", function () {
    sidebar.classList.remove("show");
    lockGround.classList.remove("add");
    document.body.classList.remove("lock");
    document.body.style.overflow = "auto";
  });

  // Event untuk menutup credit container
  creditContainer.addEventListener("click", function () {
    creditContainer.style.display = "none";
    lockGround.classList.remove("add");
    document.body.classList.remove("lock");
    document.body.style.overflow = "auto";
  });

  document.querySelector(".cancel").addEventListener("click", function () {
    document.querySelector(".pay--container").style.left = "-100%";
    document.body.style.overflow = "auto";
  });
}

// Panggil fungsi translate setelah seluruh elemen halaman termuat
document.addEventListener("DOMContentLoaded", translate);

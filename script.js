function loadSearchResults() {
  const params = new URLSearchParams(window.location.search);
  const keyword = params.get("keyword") || "";
  document.getElementById("searchKeyword").innerText = keyword;

  // Simulasi data (bisa diganti ambil dari database atau API)
  const allData = [
    {
            idToko: 110,
            namaToko: "Rozi Service Elektronik",
            alamat: "Gg. Bulusari II No.18, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
            noTelp: "0895622170277",
            jamOperasional: "08.00 - 22.00",
            layanan: ["servis setrika", "servis kipas angin", "servis TV"],
            keyword: "setrika, kipas angin, TV",
            lat: -7.0562735,
            long: 110.4347712,
            image: "rozi.jpg"
        },
        {
            idToko: 111,
            namaToko: "Baari Electronics Service (BEST ELECTRONICS CLINIC)",
            alamat: "Jl. Gondang Timur 1 No.47, Bulusan, Kec. Tembalang, Kota Semarang, Jawa Tengah 50277",
            noTelp: "085641070063",
            jamOperasional: "09.00 - 17.00",
            layanan: ["servis setrika", "servis kipas angin", "servis TV", "servis kulkas", "servis mesin cuci", "servis rice cooker"],
            lat: -7.0618468,
            long: 110.4355362,
            image: "baari.jpg"
        },
        {
            idToko: 112,
            namaToko: "Stasiun computer",
            alamat: "Jl. KH. Sirojudin No.14, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
            noTelp: "082133000690",
            jamOperasional: "10.00 - 21.00",
            layanan: ["servis laptop", "servis komputer", "servis printer"],
            lat: -7.0565923,
            long: 110.4333444,
            image: "stasiun.jpg"
        },
        {
            idToko: 113, 
            namaToko: "Yudi Servis",
            alamat: "Jl. Gondang Timur 1 No.8C, Bulusan, Kec. Tembalang, Kota Semarang, Jawa Tengah 50277",
            noTelp: "081215730557",
            jamOperasional: "08.00 - 20.00",
            layanan: ["servis setrika", "servis mesin cuci", "servis kipas angin", "servis TV", "servis kulkas"],
            lat: -7.0616478,
            long: 110.4425616,
            image: "yudi.jpg"
        },
        {
            idToko: 114,
            namaToko: "KangService.id",
            alamat: "Jl. Galang Sewu Raya NO.29A RT.1/RW.7, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
            noTelp: "089639052080",
            jamOperasional: "09.00 - 21.00",
            layanan: ["servis laptop", "servis cctv", "servis hp", "servis tablet"],
            lat: -7.0529430,
            long: 110.4358870,
            image: "kangservice.jpg"
        },
        {
            idToko: 115,
            namaToko: "Putra Jaya Teknik",
            alamat: "Jl. Mulawarman Raya No. Pertigaan,Kramas, Kec. Banyumanik, Kota Semarang, Jawa Tengah 50278",
            noTelp: "085876575475",
            jamOperasional: "07.00 - 21.00",
            layanan: ["servis mesin cuci", "servis kulkas", "servis AC", "servis rice cooker"],
            lat: -7.0687200,
            long: 110.4370500,
            image: "putra.jpg"
        },
        {
            idToko: 116,
            namaToko: "Risen Computer",
            alamat: "Jl. Banjarsari Raya Tembalang No.30, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
            noTelp: "08562714600",
            jamOperasional: "07.00 - 21.30",
            layanan: ["servis laptop", "servis komputer", "servis printer"],
            lat: -7.0573853,
            long: 110.4345477,
            image: "risen.jpg"
        },
        {
            idToko: 117,
            namaToko: "Dinasti Komputer",
            alamat: "Jl. KH. Sirojudin No.23, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
            noTelp: "0247471450",
            jamOperasional: "08.30 - 21.00",
            layanan: ["servis laptop"],
            lat: -7.0572995,
            long: 110.4327978,
            image: "dinasti.jpg"
        },
        {
            idToko: 118,
            namaToko: "Pahlawan Laptop",
            alamat: "Jl. Prof. Soedarto No.31, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
            noTelp: "081328957945",
            jamOperasional: "10.00 - 20.00",
            layanan: ["servis laptop"],
            lat: -7.0552154,
            long: 110.4327887,
            image: "pahlawan.jpg"
        },
        {
            idToko: 119,
            namaToko: "Servis Mesin Cuci Tembalang",
            alamat: "Jl. Mulawarman Sel. Dalam I, RT.2/RW.1, Kramas, Kec. Tembalang, Kota Semarang, Jawa Tengah 50278",
            noTelp: "085649066287",
            jamOperasional: "08.00 - 21.00",
            layanan: ["servis mesin cuci"],
            lat: -7.0551670,
            long: 110.4147632,
            image: "servismc.jpg"
        },
  ];

  const filtered = allData.filter(item =>
    item.layanan.some(layanan => 
      layanan.toLowerCase().includes(keyword.toLowerCase())
    ) || item.namaToko.toLowerCase().includes(keyword.toLowerCase())
  );

  const container = document.getElementById("resultsContainer");
  container.innerHTML = ""; // Kosongkan container dulu

  if (filtered.length === 0) {
    container.innerHTML = "<p>Tidak ada hasil ditemukan.</p>";
    return;
  }

  // Generate card sesuai jumlah hasil
  filtered.forEach(item => {
    const card = document.createElement("div");
    card.style.width = "200px";
    card.style.border = "1px solid #ccc";
    card.style.borderRadius = "12px";
    card.style.padding = "10px";
    card.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.namaToko}" style="width: 100%; height: 120px; object-fit: cover; border-radius: 8px;">
      <h3>${item.namaToko}</h3>
      <p>${item.jamOperasional}</p>
      <p>${item.layanan.join(', ')}</p>
      <button onclick="showStoreDetail(${item.idToko})" style="margin-top: 10px; background-color: #444; color: white; border: none; padding: 8px 12px; border-radius: 6px;">Find Now</button>
    `;
    container.appendChild(card);
  });
}

function showStoreDetail(idToko) {
  // Redirect ke Page3 dengan parameter ID toko
  window.location.href = `Page3.html?id=${idToko}`;
}

// Function untuk mendapatkan data toko berdasarkan ID
function getStoreById(id) {
  const allData = [
    {
            idToko: 110,
            namaToko: "Rozi Service Elektronik",
            alamat: "Gg. Bulusari II No.18, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
            noTelp: "0895622170277",
            jamOperasional: "08.00 - 22.00",
            layanan: ["servis setrika", "servis kipas angin", "servis TV"],
            keyword: "setrika, kipas angin, TV",
            lat: -7.0562735,
            long: 110.4347712,
            image: "rozi.jpg",
            kisaranBiaya: "15.000 - 50.000",
            sosialMedia: "@roziservice (ig)"
        },
        {
            idToko: 111,
            namaToko: "Baari Electronics Service (BEST ELECTRONICS CLINIC)",
            alamat: "Jl. Gondang Timur 1 No.47, Bulusan, Kec. Tembalang, Kota Semarang, Jawa Tengah 50277",
            noTelp: "085641070063",
            jamOperasional: "09.00 - 17.00",
            layanan: ["servis setrika", "servis kipas angin", "servis TV", "servis kulkas", "servis mesin cuci", "servis rice cooker"],
            lat: -7.0618468,
            long: 110.4355362,
            image: "baari.jpg",
            kisaranBiaya: "20.000 - 80.000",
            sosialMedia: "@baarielectronics (ig)"
        },
        {
            idToko: 112,
            namaToko: "Stasiun computer",
            alamat: "Jl. KH. Sirojudin No.14, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
            noTelp: "082133000690",
            jamOperasional: "10.00 - 21.00",
            layanan: ["servis laptop", "servis komputer", "servis printer"],
            lat: -7.0565923,
            long: 110.4333444,
            image: "stasiun.jpg",
            kisaranBiaya: "50.000 - 200.000",
            sosialMedia: "@stasiuncomputer (ig)"
        },
        {
            idToko: 113, 
            namaToko: "Yudi Servis",
            alamat: "Jl. Gondang Timur 1 No.8C, Bulusan, Kec. Tembalang, Kota Semarang, Jawa Tengah 50277",
            noTelp: "081215730557",
            jamOperasional: "08.00 - 20.00",
            layanan: ["servis setrika", "servis mesin cuci", "servis kipas angin", "servis TV", "servis kulkas"],
            lat: -7.0616478,
            long: 110.4425616,
            image: "yudi.jpg",
            kisaranBiaya: "20.000 - 100.000",
            sosialMedia: "@yudiservis (ig)"
        },
        {
            idToko: 114,
            namaToko: "KangService.id",
            alamat: "Jl. Galang Sewu Raya NO.29A RT.1/RW.7, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
            noTelp: "089639052080",
            jamOperasional: "09.00 - 21.00",
            layanan: ["servis laptop", "servis cctv", "servis hp", "servis tablet"],
            lat: -7.0529430,
            long: 110.4358870,
            image: "kangservice.jpg",
            kisaranBiaya: "30.000 - 150.000",
            sosialMedia: "@kangservice.id (ig)"
        },
        {
            idToko: 115,
            namaToko: "Putra Jaya Teknik",
            alamat: "Jl. Mulawarman Raya No. Pertigaan,Kramas, Kec. Banyumanik, Kota Semarang, Jawa Tengah 50278",
            noTelp: "085876575475",
            jamOperasional: "07.00 - 21.00",
            layanan: ["servis mesin cuci", "servis kulkas", "servis AC", "servis rice cooker"],
            lat: -7.0687200,
            long: 110.4370500,
            image: "putra.jpg",
            kisaranBiaya: "40.000 - 200.000",
            sosialMedia: "@putrajayateknik (ig)"
        },
        {
            idToko: 116,
            namaToko: "Risen Computer",
            alamat: "Jl. Banjarsari Raya Tembalang No.30, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
            noTelp: "08562714600",
            jamOperasional: "07.00 - 21.30",
            layanan: ["servis laptop", "servis komputer", "servis printer"],
            lat: -7.0573853,
            long: 110.4345477,
            image: "risen.jpg",
            kisaranBiaya: "40.000 - 180.000",
            sosialMedia: "@risencomputer (ig)"
        },
        {
            idToko: 117,
            namaToko: "Dinasti Komputer",
            alamat: "Jl. KH. Sirojudin No.23, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
            noTelp: "0247471450",
            jamOperasional: "08.30 - 21.00",
            layanan: ["servis laptop"],
            lat: -7.0572995,
            long: 110.4327978,
            image: "dinasti.jpg",
            kisaranBiaya: "35.000 - 120.000",
            sosialMedia: "@dinastikomputer (ig)"
        },
        {
            idToko: 118,
            namaToko: "Pahlawan Laptop",
            alamat: "Jl. Prof. Soedarto No.31, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
            noTelp: "081328957945",
            jamOperasional: "10.00 - 20.00",
            layanan: ["servis laptop"],
            lat: -7.0552154,
            long: 110.4327887,
            image: "pahlawan.jpg",
            kisaranBiaya: "25.000 - 100.000",
            sosialMedia: "@pahlawanlaptop (ig)"
        },
        {
            idToko: 119,
            namaToko: "Servis Mesin Cuci Tembalang",
            alamat: "Jl. Mulawarman Sel. Dalam I, RT.2/RW.1, Kramas, Kec. Tembalang, Kota Semarang, Jawa Tengah 50278",
            noTelp: "085649066287",
            jamOperasional: "08.00 - 21.00",
            layanan: ["servis mesin cuci"],
            lat: -7.0551670,
            long: 110.4147632,
            image: "servismc.jpg",
            kisaranBiaya: "30.000 - 80.000",
            sosialMedia: "@servismctembalang (ig)"
        },
  ];
  
  return allData.find(item => item.idToko === parseInt(id));
}
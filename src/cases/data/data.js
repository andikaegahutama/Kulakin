function dataNama() {
  let nama = [
    "Dika",
    "Dani",
    "Dina",
    "Diki",
    "Doni",
    "Dini",
    "Dita",
    "Dara",
    "Desi",
    "Dewi",
  ];
  let namaRandom = Math.floor(Math.random() * nama.length) + 1;
  return nama[namaRandom];
}

function dataWhatsapp() {
  const whatsapp = "085179512101";
  return whatsapp;
}

function dataPin() {
  const pin = "888888";
  return pin;
}

function dataProvinsi() {
  const pin = "888888";
  return pin;
}
function dataKabupaten() {
  const pin = "888888";
  return pin;
}
function dataKecamatan() {
  const pin = "888888";
  return pin;
}
function dataKelurahan() {
  let dataKelurahanDesa = [
    "Gunungtelu",
    "Pamulihan",
    "Bengbulang",
    "Cidadap",
    "Babakan",
    "Ciporos",
    "Ciruyung",
    "Surusunda",
    "Karangpucung",
    "Sindangbarang",
    "Sidamulya",
    "Pangawaren",
  ]; // Karangpucung (Cilacap)
  let dataKelurahanRandom = Math.floor(
    Math.random() * dataKelurahanDesa.length
  );
  return dataKelurahanDesa[dataKelurahanRandom];
}
function datart() {
  let rt = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  let randomrt = Math.floor(Math.random() * rt.length);
  return rt[randomrt];
}
function datarw() {
  let rw = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  let randomrw = Math.floor(Math.random() * rw.length);
  return rw[randomrw];
}
function datafullAddress() {
  const fullAddress = `Jalan karangpucung no 8`;
  return fullAddress;
}
function dataKodeUnik() {
  const KodeUnik =
    "xpath//html/body/div/div[7]/div/div/div/div[2]/div[1]/div[1]/div/div[1]/div/div";
  return KodeUnik;
}
function dataCOD() {
  const COD =
    "xpath//html/body/div/div[7]/div/div/div/div[2]/div[1]/div[1]/div/div[2]/div/div";
  return COD;
}
function dataVA() {
  const VA =
    "xpath//html/body/div/div[7]/div/div/div/div[2]/div[1]/div[1]/div/div[3]/div/div";
  return VA;
}
module.exports = {
  dataNama,
  dataWhatsapp,
  dataPin,
  dataKelurahan,
  datart,
  datarw,
  datafullAddress,
  dataKodeUnik,
  dataCOD,
  dataVA,
};

// userData: {
//   name: ["Dika", "Hari", "Sasa", "Yanti", "Yaya", "Siahaan", "Nabil", "Yoga"],
//   phone: "6285179512101",
//   pin: "888888",
//   kabupaten: "Cilacap",
//   kecamatan: "Karangpucung",
//   kelurahan: "Karangpucung",
//   rt: 1,
//   rw: 4,
//   fullAddress: "Karangpucung",
// },

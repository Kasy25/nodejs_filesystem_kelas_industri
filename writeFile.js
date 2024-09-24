const fs = require("node:fs");

fs.writeFile(
  "biodata.txt",
  "Hello, Perkenalkan Nama Saya Mohammad Alfadhil Kasyah, Saya Sekolah DiSMKN 15 KOta Bekasi, Saya tinggal di Dukuh Zamrud Blok S 13 no 32 RT 006/RW 011, Umur saya 16 tahun",
  function (error) {
    if (error) {
      console.error("Terjadi error karena : ", error);
    } else {
      console.log("File berhasil dibuat");
    }
  }
);

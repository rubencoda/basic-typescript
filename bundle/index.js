"use strict";
// Basic Variable
let namaSaya = "Ruben Coda";
let userName = 123456;
let isDead = false;
// Initialisasi Any (Tidak memiliki tipe variable khusus)
// contoh : let Umur;
// Initialisasi Variable memiliki 2 tipe menggunakan or dengan symbol |
// contoh : let Umur:string|number;
// Variable Array
let BuahFav;
BuahFav = ['Apel', 'Jeruk'];
// Tuple Array
let DataMahasiswa;
DataMahasiswa = [19082010013, 'Ruben Coda'];
let teman;
teman = {
    nama: 'Sukirman',
    alive: true,
};
// Standart Function
function create() {
    console.log('Hello ' + 2);
}
// Arrow Fuction
const create2 = () => 2;
// Studi Kasus Tambah Bilangan
function add(a, b) {
    const c = a + b;
    return `Hasilnya adalah ${c}`;
}
let saya;
saya = true;
function createIntel(processor) {
    console.log(`
        Berhasil membuat processor dengan spesifikasi :
        1. Nama Brand  : ${processor.brand}
        2. Base Model  : ${processor.baseModel}
        3. Model Name  : ${processor.modelName}
        4. Clock Speed : ${processor.clockSpeed}
        5. Turbo Boost : ${processor.turboBoost}
        6. Core Total  : ${processor.coreTotal} 
    `);
}
function createAMD(processor) {
    console.log(`
        Berhasil membuat processor dengan spesifikasi :
        1. Nama Brand  : ${processor.brand}
        2. Base Model  : ${processor.baseModel}
        3. Model Name  : ${processor.modelName}
        4. Clock Speed : ${processor.clockSpeed}
        5. Precision Boost : ${processor.precisionBoost ? processor.precisionBoost : 'Tidak Ada'}
        6. Core Total  : ${processor.coreTotal} 
    `);
}
const i5 = {
    brand: 'Intel',
    baseModel: 'Intel i5',
    modelName: 'i5-1234F',
    clockSpeed: 4,
    coreTotal: "HexaCore",
    turboBoost: true
};
const amd3 = {
    brand: 'AMD',
    baseModel: 'Ryzen 3',
    modelName: '3000 Series',
    clockSpeed: 4,
    coreTotal: 8,
    precisionBoost: true
};
const amd1 = {
    brand: 'AMD',
    baseModel: 'Ryzen 1',
    modelName: '1000 Series',
    clockSpeed: 4,
    coreTotal: "DualCore",
};
createIntel(i5);
createAMD(amd3);
createAMD(amd1);
// Hasil
// const result = {saya};
// console.log(result);

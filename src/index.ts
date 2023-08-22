// Basic Variable
let namaSaya:string= "Ruben Coda";
let userName:number = 123456;
let isDead:boolean = false;

// Initialisasi Any (Tidak memiliki tipe variable khusus)
// contoh : let Umur;

// Initialisasi Variable memiliki 2 tipe menggunakan or dengan symbol |
// contoh : let Umur:string|number;

// Variable Array
let BuahFav: string[];
BuahFav = ['Apel', 'Jeruk'];

// Tuple Array
let DataMahasiswa: [number, string];
DataMahasiswa = [19082010013, 'Ruben Coda'];

// (Custom Type) Tanda ? sebelum : berartikan tidak wajib di define
type TemanType = {
    nama: string;
    alive: boolean;
    hutang?: number;
}

let teman: TemanType;

teman = {
    nama: 'Sukirman',
    alive: true,
}


// Standart Function
function create(): void {
    console.log('Hello ' + 2);
}

// Arrow Fuction
const create2 = (): number => 2;

// Studi Kasus Tambah Bilangan
function add(a :number, b: number): string {
    const c: number = a+b;
    return `Hasilnya adalah ${c}`;
}

// Union Type
type Wanita = string;
type Pria = boolean;

type Gender = Wanita|Pria;

let saya: Gender;

saya = true;

// Contoh Interface
type CoreCount = 2 | 4 | 6 | 8;
type CoreName = "DualCore" | "TripleCore" | "HexaCore";

interface InterProcessor {
    brand: string;
    baseModel: string;
    modelName: string;
    coreTotal: CoreCount | CoreName;
    clockSpeed: number;
}

interface INTEL extends InterProcessor {
    turboBoost: boolean;
}

interface AMD extends InterProcessor {
    precisionBoost ?: boolean;
}

function createIntel(processor: INTEL) : void {
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

function createAMD(processor: AMD) : void {
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

const i5 : INTEL = {
    brand: 'Intel',
    baseModel: 'Intel i5',
    modelName: 'i5-1234F',
    clockSpeed: 4,
    coreTotal: "HexaCore",
    turboBoost: true
}

const amd3 : AMD = {
    brand: 'AMD',
    baseModel: 'Ryzen 3',
    modelName: '3000 Series',
    clockSpeed: 4,
    coreTotal: 8,
    precisionBoost: true
}

const amd1 : AMD = {
    brand: 'AMD',
    baseModel: 'Ryzen 1',
    modelName: '1000 Series',
    clockSpeed: 4,
    coreTotal: "DualCore",
}

createIntel(i5);
createAMD(amd3);
createAMD(amd1);
// Hasil
// const result = {saya};

// console.log(result);

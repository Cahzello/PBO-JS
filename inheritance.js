class Siswa {
    constructor(nama, nis) {
        this.nama = nama;
        this.nis = nis;
    }
}

class osis extends Siswa {
    constructor(nama, nis, jabatan) {
        super(nama, nis);
        this.jabtan = jabatan;
    }

    // constructor(jabatan) {
    //     this.jabatan = jabatan;
    // }
}

const orang = new osis('Rizky', '177013', 'Osis');

console.log(orang.nama);
console.log(orang.nis);
console.log(orang.jabtan);

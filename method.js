class MyClass {
    nis = '177013';

    nama() {
        console.log('Rizky Rasya Maheswara');
    }

    get getnis() {
        return this.nis;
    }

    set setNama(value) {
        this.nis = value;
    }
}

// di bawah ini object
const myClass = new MyClass();

// print nama
myClass.nama();

// data sebelum di ubah
console.log(myClass.getnis);

// data setelah di ubah
myClass.setNama = '548488448';
console.log(myClass.getnis);
class MyClass {
    hobi = 'berenang';

    get gethobi() {
        return this.hobi;
    }

    set sethobi(value) {
        this.hobi = value;
    }
}

const objek = new MyClass();

console.log(objek.gethobi);
objek.sethobi = 'memasak';

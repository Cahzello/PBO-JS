class MyClass {
    static buku = 'naruto';
    static mobil;

    static {
        MyClass.mobil = 'ini mobil';
    }

    static motor() {
        return 'ini adalah motor';
    }
}

console.log(MyClass.buku);
console.log(MyClass.mobil);
console.log(MyClass.motor());
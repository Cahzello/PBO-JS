class Nama {
    constructor(param1 = 'Rizky', param2 = 'Rasya'){
        this.hasil1 = param1;
        this.hasil2 = param2;
    }
}

const myClass = new Nama();
console.log(myClass.hasil1);
console.log(myClass.hasil2);
class Field {
    firstField = 'first field';
    secondField = 'second field';

    #privateFirstField = 'Private first field';
    #privateSecondField = 'Private Second field';

    get getPrivateFirstField() {
        return this.#privateFirstField;
    }
}

const myClass = new Field();

console.log(myClass.firstField);
console.log(myClass.secondField);
console.log(myClass.getPrivateFirstField);
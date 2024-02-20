class A {
    constructor() {}

    gdc(a, b) {
        var c;
        if(a < b){
            c = a;
            a = b;
            b = c;
        }


        if (a%b === 0) {
            return b;
        } else {
            return this.gdc(b, a % b);
        }
    }
}

const gdc = new A();

const numbers = gdc.gdc(20,40);
console.log(numbers);
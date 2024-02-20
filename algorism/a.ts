class A1{
    
    gdc(a : number, b : number) : number{
        var c :number;
        if(a<b){
            c = a;
            a = b;
            b = c;
        }

        if(a%b === 0){
            return a;
        } else{
            return this.gdc(a, a%b);
        }
    }
}

let s12 = new A1();
console.log(s12.gdc(40,50));

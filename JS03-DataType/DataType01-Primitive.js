function PrimitiveDatatype(){
    //7 Primitive Data Types in JavaScript
    // Number, String, Boolean, Undefined, Null, Symbol, BigInt
    // 1.Number Datatype
    let a =11;
    let b= 3.3;
    let c = -34;
    console.log("Number Datatypes are : " +a+" , "+b+ " ," +c);

    // 2.String Datatype
    let str1 = "Hello";
    let str2 = 'Azmat';
    let str3 = `Khan`;
    console.log("String Datatypes are : " +str1+" , "+str2+ " ," +str3);

    // 3.Boolean Datatype
    let bool1 = true;
    let bool2 = false;
    console.log("Boolean Datatypes are : " +bool1+" , "+bool2);

    // 4.Undefined Datatype
    let undef;
    console.log("Undefined Datatype is : " +undef);

    // 5.Null Datatype
    let nul = null;
    console.log("Null Datatype is : " +nul);

    // 6.Symbol Datatype
    // Note: Symbols are unique and immutable, used for object property keys.
    let sym1 = Symbol('id');
    let sym2 = Symbol('name');
    console.log("Symbol Datatypes are : " +sym1.toString()+" , "+sym2.toString());
    // 7.BigInt Datatype
    let bigInt1 = BigInt(1234567890123456789012345678901234567890n);
    let bigInt2 = BigInt("1234567890123456789012345678901234567890");
    console.log("BigInt Datatypes are : " +bigInt1+" , "+bigInt2);
    
}

PrimitiveDatatype();
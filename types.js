var namee = "maritza";
//namee = 3;
//funcion saludo
/*function greet (a:string, b:number){
     console.log('“hello '+ a+ ' your age is '+ b+ '”')
}
greet("Josie", 25);*/
//funcion con el  tipo never
/*function fail (): never{
    throw Error('message');
}
fail()*/
//funcion greet util con el tipo never
/*function greet (a:string, b:number): never{
    throw Error('“hello '+ a+ ' your age is '+ b+ '”');
}
greet("Josie", 25);*/
//función como parametro
/*function greet (a:string, b:number): never{
    throw Error('“hello '+ a+ ' your age is '+ b+ '”');
}
function example(c:string, d:number, fun:(a:string, b:number)=>never) {
    return fun(c, d);
}
example("Josie", 25,greet);*/
//año de nacimiento como cadena o número
function greet(a, b) {
    throw Error('“hello ' + a + ' your age is ' + b + '”');
}
function example(c, d, fun) {
    return fun(c, d);
}
example("Josie", "1995", greet);

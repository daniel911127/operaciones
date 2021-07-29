const readline = require('readline');

const rl = readline.createInterface({ 
    input: process.stdin, output: process.stdout 
});

rl.question('digite un numero: ', (numero1)=>{ 
    rl.question('digite otro numero: ',(numero2)=>{
        rl.question('que operacion desea hacer: ',(operacion)=>{
               if(operacion==='sumar'){
                   sumar(Number(numero1),Number(numero2));
                   return rl.close()
               } 
               if(operacion==='restar'){
                restar(Number(numero1),Number(numero2));
                return rl.close()
                } 
                if(operacion==='multiplicar'){
                multiplicar(Number(numero1),Number(numero2));
                return rl.close()
                 } 
                 if(operacion==='dividir'){
                dividir(Number(numero1),Number(numero2));
                return rl.close()
                 } 
        })
             
     })
})
function sumar(numero1,numero2) {
    var suma=numero1+numero2;
    console.log(suma); 
} 
function restar(numero1,numero2) {
    var resta=numero1-numero2;
    console.log(resta); 
}    
function multiplicar(numero1,numero2) {
    var multiplica=numero1*numero2;
    console.log(multiplica); 
}    
function dividir(numero1,numero2) {
    var dividir=numero1/numero2;
    console.log(dividir); 
}       


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('digite un numero ', (numero1) => {
    
    rl.question('digite otro numero ', (numero2) => {

        rl.question('que operación desea hacer?:  ', (operacion)=>{
            if (operacion==='suma'){
                let suma=Number(numero1)+Number(numero2);
                console.log(suma);
                return rl.close();
            } 
            if(operacion==='resta'){
                let resta=Number(numero1)-Number(numero2);
                console.log(resta);
                 return rl.close();
            }
            if(operacion==='multiplicacion'){
                let multiplicacion=Number(numero1)*Number(numero2);
                console.log(multiplicacion);
                 return rl.close();
            }
            if(operacion==='division'){
                let division=Number(numero1)/Number(numero2);
                console.log(division);
                 return rl.close();
            }

        })
        
      
      });
      
  
  });
  

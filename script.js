const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const output= document.getElementById("output");


//función para convertir los números a romano
const convertToRoman=(num)=>{
  const resultado = [];

    while(num>=1000){
      resultado.push("M");
      num-=1000;
    }
    while(num>=900){
      resultado.push("CM");
      num-=900;
    }
    while(num>=500){
      resultado.push("D");
      num-=500;
    }
    while(num>=400){
      resultado.push("CD");
      num-=400;
    }
    while(num>=100){
      resultado.push("C");
      num-=100;
    }
    while(num>=90){
      resultado.push("XC");
      num-=90;
    }
    while(num>=50){
      resultado.push("L");
      num-=50;
    }
    while(num>=40){
      resultado.push("XL");
      num-=40;
    }
    while(num>=10){
      resultado.push("X");
      num-=10;
    }
    while(num>=9){
      resultado.push("IX");
      num-=9;
    }
    while(num>=5){
      resultado.push("V");
      num-=5;
    }
    while(num>=4){
      resultado.push("IV");
      num-=4;
    }
    while(num>=1){
      resultado.push("I");
      num-=1;
    }

  //de esta función se obtendrá el resultado del valor que querramos darle
return resultado.join('');
}

//ejecutar la función para mostrar el resultado al paretar el botón
convertBtn.addEventListener('click', () => {

  if(!numberInput.value || numberInput.value.match(/[e.]/g)){
output.textContent="Please enter a valid number";
    console.log("vacio")
    }else if(numberInput.value>=4000){
    output.textContent="Please enter a number less than or equal to 3999";
    console.log("es mayor a 4000")
  }
  else if(numberInput.value<=0){
output.textContent="Please enter a number greater than or equal to 1";
    console.log("es negativo")
  }else{
  mostrarResultado();
  }
  
  
});

//función para mostrar el resultado
const mostrarResultado = () => {
  const input = numberInput.value;
  const numeroEntero = parseInt(input, 10);
    output.innerText = convertToRoman(numeroEntero) ;
};

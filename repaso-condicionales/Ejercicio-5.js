let num1 = prompt("Ingrese el primer número")
let num2 = prompt("Ingrese el segundo número")
let num3 = prompt("Ingrese el tercer número")

if (num1 === num2 && num1 === num3) {
     document.write("TODOS LOS NUMEROS SON IGUALES")
  }else if(num1 > num2){ 
    if(num1 > num3){
       document.write("El  primer número ", num1, " es el mayor")
    } else if(num3 > num1){
       document.write("El tercer número ", num3, " es el mayor")
    } else{
       document.write("El primer número y el  tercer número son iguales ", num1," y ", num3)
    }
  } else if(num2 > num1){ 
    if(num3 > num3){
       document.write("El segundo número ", num2, " es el mayor")
    } else if(num3 > num2){
       document.write("El  tercer número ",num3," es el mayor")
    }else {
       document.write("El segundo número y el tercer número son iguales ", num2," y ", num3)
    }
  } else { 
     document.write("El segundo número y el primer número son iguales ", num1," y ", num2)
  }
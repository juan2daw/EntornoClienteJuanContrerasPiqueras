alert("Bienvenido a la calculadora");
let rep=false;
let opar=[];
let opar2 =[];
let op1;
let op2;
do{
  let op=prompt("Selecciona un simbolo: + - * /");
  op=op.trim();
  if(op==='+' || op==='-' || op==='*' || op==='/'){
  }else{
    alert("Lo ha hecho mal");
    continue;
  }
alert("Lo hizo bien");
  let operadores=prompt("Introduzca los operadores separados por espacios");
  operadores=operadores.trim();
  opar=operadores.split(' ');
  opar2=opar.filter(Number);
  op1=opar2[0];
  op1=Number(op1);
  op2=opar2[1];
  op2=Number(op2);

  if(isNaN(op1) || isNaN(op2)){
    continue;
  }

switch(op){
  case '+':
    alert(op1+op2);
    break;
  case '-':
    alert(op1-op2);
    break;
  case '*':
    alert(op1*op2);
    break;
  case '/':
    alert(op1/op2);
    break;
  default:
    break;
}

rep=confirm("Quieres realizar otra operacion?");


}while(rep);

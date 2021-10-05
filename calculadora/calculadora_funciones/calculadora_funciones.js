alert("Bienvenido a la calculadora");
let rep=false;
let ope='';
let o1;
let o2;

//FUNCIONES FLECHA
let sumar=(a,b)=>{return(a+b)};
let restar=(a,b)=>{return(a-b)};
let mult=(a,b)=>{return(a*b)};
let div=(a,b)=>{return(a/b)};

do{
  ope=operador();
  let operadores=prompt("Introduzca los operadores separados por espacios");
  o1=num1(operadores);
  o2=num2(operadores);

switch(ope){
  case '+':
    alert(sumar(o1,o2));
    break;
  case '-':
    alert(restar(o1,o2));
    break;
  case '*':
    alert(mult(o1,o2));
    break;
  case '/':
    alert(div(o1,o2));
    break;
  default:1
    break;
}

rep=confirm("Quieres realizar otra operacion?");


}while(rep);


//FUNCION SIMBOLO
function operador(){
  let sal=true;
  let op='';
  do{
    op=prompt("Selecciona un simbolo: + - * /");
    op=op.trim();
    if(op==='+' || op==='-' || op==='*' || op==='/'){
      sal=true;
      //alert(op);
    }else{
      alert("Lo ha hecho mal");
      sal=false;
  }
}while(!sal);
return op;
}

//FUNCION num1
function num1(operadores){
  let opar=[];
  let opar2=[];
  let op1;
  let op2;
  let rep=true;
  do{
    rep=true;
    operadores=operadores.trim();
    opar=operadores.split(' ');
    opar2=opar.filter(Number);
    op1=opar2[0];
    op1=Number(op1);
    op2=opar2[1];
    op2=Number(op2);

    if(isNaN(op1) || isNaN(op2)){
      rep=false;
    }
  }while(!rep);
  return op1;
}

//FUNCION num2
function num2(operadores){
  let opar=[];
  let opar2=[];
  let op1;
  let op2;
  let rep=true;
  do{
    rep=true;
    operadores=operadores.trim();
    opar=operadores.split(' ');
    opar2=opar.filter(Number);
    op1=opar2[0];
    op1=Number(op1);
    op2=opar2[1];
    op2=Number(op2);

    if(isNaN(op1) || isNaN(op2)){
      rep=false;
    }
  }while(!rep);
  return op2;
}

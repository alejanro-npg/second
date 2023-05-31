import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  const button0 = document.getElementById('Zero');
  const button1 = document.getElementById('One');
  const button2 = document.getElementById('Two');
  const button3 = document.getElementById('Three');
  const button4 = document.getElementById('Fourth');
  const button5 = document.getElementById('Five');
  const button6 = document.getElementById('Six');
  const button7 = document.getElementById('Seven');
  const button8 = document.getElementById('Eight');
  const button9 = document.getElementById('Nine');
  
  const buttonSum = document.getElementById('Sum');
  const buttonRest = document.getElementById('Rest');
  const buttonMult = document.getElementById('Mult');
  const buttonDiv = document.getElementById('Div');
  
  const buttonDEL = document.getElementById('DEL');
  const buttonAC = document.getElementById('AC');
  const buttonAns = document.getElementById('Ans');
  
  const buttonSin = document.getElementById('Sin');
  const buttonCos = document.getElementById('Cos');
  const buttonTan = document.getElementById('Tan');
  
  const buttonIgual = document.getElementById('Igual');
  const buttonPotencia = document.getElementById('Potencia');
  const buttonRaiz = document.getElementById('Raiz');
  const buttonLog = document.getElementById('Log');
  const buttonExp = document.getElementById('Exp');

  const buttonPunto = document.getElementById('Point');
  const buttonPi = document.getElementById('Pi');
  const buttonEuler = document.getElementById('Euler');
  const buttonAbre = document.getElementById('Abre');
  const buttonCierra = document.getElementById('Cierra');
  
  let actual
  let actual2
  const arr = ["undefined","undefined","undefined"];
  const arr2 = ["undefined","undefined","undefined"];
  
  
  
  button1?.addEventListener('click', function handleClick(event) {
  
    actual = (<HTMLElement><unknown>document.getElementById('tabla')?.innerHTML)
    actual2 = actual.toString()
    actual = actual2 + "1"
    let myContainer = <HTMLElement>document.getElementById('tabla');
    myContainer.innerHTML = actual;
    
  });
  button2?.addEventListener('click', function handleClick(event) {
  
    actual = (<HTMLElement><unknown>document.getElementById('tabla')?.innerHTML)
    actual2 = actual.toString()
    actual = actual2 + "2"
    let myContainer = <HTMLElement>document.getElementById('tabla');
    myContainer.innerHTML = actual;
    
  });
  button3?.addEventListener('click', function handleClick(event) {
  
    actual = (<HTMLElement><unknown>document.getElementById('tabla')?.innerHTML)
    actual2 = actual.toString()
    actual = actual2 + "3"
    let myContainer = <HTMLElement>document.getElementById('tabla');
    myContainer.innerHTML = actual;
    
  });
  button4?.addEventListener('click', function handleClick(event) {
  
    actual = (<HTMLElement><unknown>document.getElementById('tabla')?.innerHTML)
    actual2 = actual.toString()
    actual = actual2 + "4"
    let myContainer = <HTMLElement>document.getElementById('tabla');
    myContainer.innerHTML = actual;
    
  });
  button5?.addEventListener('click', function handleClick(event) {
  
    actual = (<HTMLElement><unknown>document.getElementById('tabla')?.innerHTML)
    actual2 = actual.toString()
    actual = actual2 + "5"
    let myContainer = <HTMLElement>document.getElementById('tabla');
    myContainer.innerHTML = actual;
    
  });
  button6?.addEventListener('click', function handleClick(event) {
  
    actual = (<HTMLElement><unknown>document.getElementById('tabla')?.innerHTML)
    actual2 = actual.toString()
    actual = actual2 + "6"
    let myContainer = <HTMLElement>document.getElementById('tabla');
    myContainer.innerHTML = actual;
    
  });
  button7?.addEventListener('click', function handleClick(event) {
  
    actual = (<HTMLElement><unknown>document.getElementById('tabla')?.innerHTML)
    actual2 = actual.toString()
    actual = actual2 + "7"
    let myContainer = <HTMLElement>document.getElementById('tabla');
    myContainer.innerHTML = actual;
    
  });
  button8?.addEventListener('click', function handleClick(event) {
  
    actual = (<HTMLElement><unknown>document.getElementById('tabla')?.innerHTML)
    actual2 = actual.toString()
    actual = actual2 + "8"
    let myContainer = <HTMLElement>document.getElementById('tabla');
    myContainer.innerHTML = actual;
    
  });
  button9?.addEventListener('click', function handleClick(event) {
  
    actual = (<HTMLElement><unknown>document.getElementById('tabla')?.innerHTML)
    actual2 = actual.toString()
    actual = actual2 + "9"
    let myContainer = <HTMLElement>document.getElementById('tabla');
    myContainer.innerHTML = actual;
    
  });
  button0?.addEventListener('click', function handleClick(event) {
  
    actual = (<HTMLElement><unknown>document.getElementById('tabla')?.innerHTML)
    actual2 = actual.toString()
    actual = actual2 + "0"
    let myContainer = <HTMLElement>document.getElementById('tabla');
    myContainer.innerHTML = actual;
    
  });

    buttonPunto?.addEventListener('click', function handleClick(event) {
    actual = (<HTMLElement><unknown>document.getElementById('tabla')?.innerHTML)
    actual2 = actual.toString()
    actual = actual2 + " . "
    let myContainer = <HTMLElement>document.getElementById('tabla');
    myContainer.innerHTML = actual;
  
  });

  buttonAbre?.addEventListener('click', function handleClick(event) {
    actual = (<HTMLElement><unknown>document.getElementById('tabla')?.innerHTML)
    actual2 = actual.toString()
    actual = actual2 + " ("
    let myContainer = <HTMLElement>document.getElementById('tabla');
    myContainer.innerHTML = actual;
  
  });

  buttonCierra?.addEventListener('click', function handleClick(event) {
    actual = (<HTMLElement><unknown>document.getElementById('tabla')?.innerHTML)
    actual2 = actual.toString()
    actual = actual2 + ") "
    let myContainer = <HTMLElement>document.getElementById('tabla');
    myContainer.innerHTML = actual;
  
  });

  buttonPi?.addEventListener('click', function handleClick(event) {
    actual = (<HTMLElement><unknown>document.getElementById('tabla')?.innerHTML)
    actual2 = actual.toString()
    actual = actual2 + " π "
    let myContainer = <HTMLElement>document.getElementById('tabla');
    myContainer.innerHTML = actual;
  
  });

  buttonEuler?.addEventListener('click', function handleClick(event) {
    actual = (<HTMLElement><unknown>document.getElementById('tabla')?.innerHTML)
    actual2 = actual.toString()
    actual = actual2 + " e"
    let myContainer = <HTMLElement>document.getElementById('tabla');
    myContainer.innerHTML = actual;
  
  });

  buttonSum?.addEventListener('click', function handleClick(event) {
  
    actual = (<HTMLElement><unknown>document.getElementById('tabla')?.innerHTML)
    actual2 = actual.toString()
    actual = actual2 + "+"
    let myContainer = <HTMLElement>document.getElementById('tabla');
    myContainer.innerHTML = actual;
    
  });

  buttonRest?.addEventListener('click', function handleClick(event) {
  
    actual = (<HTMLElement><unknown>document.getElementById('tabla')?.innerHTML)
    actual2 = actual.toString()
    actual = actual2 + " - "
    let myContainer = <HTMLElement>document.getElementById('tabla');
    myContainer.innerHTML = actual;
    
  });

  buttonMult?.addEventListener('click', function handleClick(event) {
  
    actual = (<HTMLElement><unknown>document.getElementById('tabla')?.innerHTML)
    actual2 = actual.toString()
    actual = actual2 + " x "
    let myContainer = <HTMLElement>document.getElementById('tabla');
    myContainer.innerHTML = actual;
    
  });

  buttonDiv?.addEventListener('click', function handleClick(event) {
  
    actual = (<HTMLElement><unknown>document.getElementById('tabla')?.innerHTML)
    actual2 = actual.toString()
    actual = actual2 + " ÷ "
    let myContainer = <HTMLElement>document.getElementById('tabla');
    myContainer.innerHTML = actual;
    
  });

  buttonPotencia?.addEventListener('click', function handleClick(event) {
  
    actual = (<HTMLElement><unknown>document.getElementById('tabla')?.innerHTML)
    actual2 = actual.toString()
    actual = actual2 + " ^ "
    let myContainer = <HTMLElement>document.getElementById('tabla');
    myContainer.innerHTML = actual;
    
  });

  buttonRaiz?.addEventListener('click', function handleClick(event) {
  
    actual = (<HTMLElement><unknown>document.getElementById('tabla')?.innerHTML)
    actual2 = actual.toString()
    actual = actual2 + " √("
    let myContainer = <HTMLElement>document.getElementById('tabla');
    myContainer.innerHTML = actual;
    
  });

  buttonLog?.addEventListener('click', function handleClick(event) {
  
    actual = (<HTMLElement><unknown>document.getElementById('tabla')?.innerHTML)
    actual2 = actual.toString()
    actual = actual2 + " ln("
    let myContainer = <HTMLElement>document.getElementById('tabla');
    myContainer.innerHTML = actual;
    
  });

  buttonExp?.addEventListener('click', function handleClick(event) {
  
    actual = (<HTMLElement><unknown>document.getElementById('tabla')?.innerHTML)
    actual2 = actual.toString()
    actual = actual2 + "E"
    let myContainer = <HTMLElement>document.getElementById('tabla');
    myContainer.innerHTML = actual;
    
  });

  buttonSin?.addEventListener('click', function handleClick(event) {
  
    actual = (<HTMLElement><unknown>document.getElementById('tabla')?.innerHTML)
    actual2 = actual.toString()
    actual = actual2 + " Sin("
    let myContainer = <HTMLElement>document.getElementById('tabla');
    myContainer.innerHTML = actual;
    
  });

  buttonCos?.addEventListener('click', function handleClick(event) {
  
    actual = (<HTMLElement><unknown>document.getElementById('tabla')?.innerHTML)
    actual2 = actual.toString()
    actual = actual2 + " Cos("
    let myContainer = <HTMLElement>document.getElementById('tabla');
    myContainer.innerHTML = actual;
    
  });

  buttonTan?.addEventListener('click', function handleClick(event) {
  
    actual = (<HTMLElement><unknown>document.getElementById('tabla')?.innerHTML)
    actual2 = actual.toString()
    actual = actual2 + " Tan("
    let myContainer = <HTMLElement>document.getElementById('tabla');
    myContainer.innerHTML = actual;
    
  });
  
  buttonIgual?.addEventListener('click', function handleClick(event) {
    let operacion
    let operacion2
  
    operacion = (<HTMLElement><unknown>document.getElementById('tabla')?.innerHTML)
    operacion2 = operacion.toString()
    arr.unshift(operacion2)

    operacion2=operacion2.replaceAll(' x ', ' * ')
    operacion2=operacion2.replaceAll(' ÷ ', ' / ')
    operacion2=operacion2.replaceAll(' ^ ', ' ** ')
    operacion2=operacion2.replaceAll('π', 'Math.PI')
    operacion2=operacion2.replaceAll('e', ' Math.exp(1)** ')
    operacion2=operacion2.replaceAll(' ln(', ' Math.log(')
    operacion2=operacion2.replaceAll(' Sin(', ' Math.sin(')
    operacion2=operacion2.replaceAll(' Cos(', ' Math.cos(')
    operacion2=operacion2.replaceAll(' Tan(', ' Math.tan(')
    operacion2=operacion2.replaceAll('E', ' *10**')
    operacion2=operacion2.replaceAll(' √(', 'Math.sqrt(')
    operacion2=operacion2.replaceAll(' Ans ', arr2[0])
    operacion = eval(operacion2)
    operacion2 = operacion.toString()
    operacion2=operacion2.replaceAll('NaN', 'Math ERROR')
    arr2.unshift(operacion2)
    let myContainer = <HTMLElement>document.getElementById('tabla');
    myContainer.innerHTML = "";
    let myContainer3 = <HTMLElement>document.getElementById('first');
    myContainer3.innerHTML = arr[2]+" = "+arr2[2];
    let myContainer2 = <HTMLElement>document.getElementById('second');
    myContainer2.innerHTML = arr[1]+" = "+arr2[1]; 
    let myContainer1 = <HTMLElement>document.getElementById('third');
    myContainer1.innerHTML = arr[0]+" = "+arr2[0];
    
  });

  buttonDEL?.addEventListener('click', function handleClick(event) {
    
    actual = (<HTMLElement><unknown>document.getElementById('tabla')?.innerHTML)
    actual2 = actual.toString()
    actual = actual2.slice(0,-1)
    let myContainer = <HTMLElement>document.getElementById('tabla');
    myContainer.innerHTML = actual;
  
  });

  buttonAns?.addEventListener('click', function handleClick(event) {
  
    actual = (<HTMLElement><unknown>document.getElementById('tabla')?.innerHTML)
    actual2 = actual.toString()
    actual = actual2 + " Ans "
    let myContainer = <HTMLElement>document.getElementById('tabla');
    myContainer.innerHTML = actual;
    
  });

  buttonAC?.addEventListener('click', function handleClick(event) {
    
    actual = (<HTMLElement><unknown>document.getElementById('tabla')?.innerHTML)
    actual = ""
    let myContainer = <HTMLElement>document.getElementById('tabla');
    myContainer.innerHTML = actual;
  
  });
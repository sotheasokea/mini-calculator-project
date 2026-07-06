const buttons = document.querySelectorAll('.buttons');

const buttonValue = [
  'clear', '%','-/+','delete',
  7, 8, 9, '+',
  4, 5, 6, '-',
  1, 2, 3, '/',
  '.', 0, '=', 'x'
];


let html = '';

buttons.forEach((buttonClcik, index)=>{
  buttonClcik.addEventListener('click', ()=>{
    console.log('click the button', buttonValue[index]);
    if(buttonValue[index] === 'clear'){
      firstOperand = '';
      secondOperand= '';
      currentOperation = null;
      html = '';
      document.querySelector('.js-screen')
        .innerHTML = '0';
    }else if(buttonValue[index] === 'delete'){
      deleteOne();
    }else{
      checkInput(buttonValue[index]);
      document.querySelector('.js-screen')
        .innerHTML = html;
    }
  });
});




let firstOperand  = '';
let secondOperand = '';
let currentOperation = null; 
let isCalculated = false;

function checkInput(value){
  if(!isNaN(value) || value === '.'){
    appendNumber(value);
  }else if(value === '-/+'){
    if(currentOperation === '-'){
    setOperation('+');
    }else{
      setOperation('-');
      if(firstOperand == ''){
        appendNumber('-');
      }
    }
  }else if(['-', '+', 'x', '/', '%'].includes(value)){
    setOperation(value);
  }else if(value === '='){
    calculate();
  }
}

function appendNumber(number){
  if(firstOperand === '' && number === '.'){
    firstOperand = '0.';
    html += firstOperand;
  }else if(currentOperation === null){
    if(number === '.'&& firstOperand.includes('.')){
      return;
    }
    if(isCalculated){
      // document.querySelector('.js-screen')
      //   .innerHTML = number.toString();
      firstOperand += number;
      html += number;
      isCalculated = false;
    }else{
      firstOperand += number;
      html += number;
    }
    
  }else{
    if(number === '.'&& secondOperand.includes('.')){
      return;
    }
    if(secondOperand === '' && number === '.'){
      secondOperand = '0.';
      html += secondOperand;
    }else{
      secondOperand += number;
      html += number;
    }
    
    
  }
}

function setOperation(operation){
  if(firstOperand === '') return;
  if(secondOperand !== ''){
    html += operation;
    calculate();
  }
  currentOperation = operation;
  if(firstOperand[firstOperand.length-1] === '.'){
    firstOperand += '0';
  }
  if(currentOperation === 'x'){
    html = firstOperand + `&times`;
  }else{
    html = firstOperand + currentOperation;
  }
  
}

function calculate(){
  if(currentOperation === null || secondOperand === ''){
    return;
  }
  let result = 0;
  const num1 = parseFloat(firstOperand);
  const num2 = parseFloat(secondOperand);
  
  switch(currentOperation){
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    case 'x':
      result = num1 * num2;
      break;
    case '%':
      result = num1%num2;
      break;
  }
  document.querySelector('.js-screen')
      .innerHTML = result;
  html = result.toString();
  firstOperand = result.toString();
  currentOperation = null;
  secondOperand = '';
  isCalculated = true;
}

function deleteOne(){
  if(isCalculated && secondOperand === '' && currentOperation === null){
    firstOperand = '';
    isCalculated = false;
    html  = '';
  }else if(secondOperand !== ''){
    secondOperand = secondOperand.slice(0, secondOperand.length-1);
    html = `${firstOperand}${currentOperation}${secondOperand}`;
  }else if(currentOperation !== null){
    currentOperation = null;
    html  = `${firstOperand}`;;
  }else if(firstOperand !== ''){
    firstOperand = firstOperand.slice(0, firstOperand.length-1);
    html  = `${firstOperand}`;
  }

  document.querySelector('.js-screen')
     .innerHTML = html;
  
}


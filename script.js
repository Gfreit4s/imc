
var peso;

var altura;
var resultado;
var imc;
function calcular (event){
    event.preventDefault();

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    imc = peso/ (altura * altura);
    resultado = document.getElementById('resultado');

    if(imc < 17){
        resultado.innerHTML='<br> seu resultado é '+ imc.toFixed(2) +'<br/> Você está com pouco peso';
    }else if( imc > 17 && imc <= 18.49){
        resultado.innerHTML='<br> seu resultado é '+ imc.toFixed(2) +'<br/> Você está abaixo do peso';
    }else if( imc > 18.5 && imc <= 24.99){
        resultado.innerHTML='<br> seu resultado é '+ imc.toFixed(2) +'<br/> Peso ideal';
    }else if( imc > 25 && imc <= 29.99){
        resultado.innerHTML='<br> seu resultado é '+ imc.toFixed(2) +'<br/> Você está acima do peso!';
    }else if( imc >= 30){
        resultado.innerHTML='<br> seu resultado é '+ imc.toFixed(2) +'<br/> Obesidade!';
    }
    document.getElementById('peso').value ='';
    document.getElementById('altura').value ='';

} 
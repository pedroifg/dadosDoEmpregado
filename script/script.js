function validarPercentual() {
    let codigo = document.getElementById('codigo').value ; 
    let cargo = document.getElementById('cargo').value;
    let salario = parseFloat(document.getElementById('salario').value);

    if (codigo == 1) {
        let acrescimo = salario + (salario/2);
        document.getElementById('resultado').innerHTML = 'Seu cargo é de ' + cargo + ' salário sem acrescimo é: R$ ' + salario + ' seu salário final passa a ser: ' + acrescimo; 
    } else if (codigo == 2) {
        let acrescimo = salario + (salario * 0.35);
        document.getElementById('resultado').innerHTML = 'Seu cargo é de ' + cargo + ' salário sem acrescimo é: R$ ' + salario + ' seu salário final passa a ser: ' + acrescimo;
    } else if (codigo == 3) { 
        let acrescimo = salario + (salario * 0.20);
        document.getElementById('resultado').innerHTML = 'Seu cargo é de ' + cargo + ' salário sem acrescimo é: R$ ' + salario + ' seu salário final passa a ser: ' + acrescimo;
    } else if (codigo == 4) {
        let acrescimo = salario + (salario * 0.10);
        document.getElementById('resultado').innerHTML = 'Seu cargo é de ' + cargo + ' salário sem acrescimo é: R$ ' + salario + ' seu salário final passa a ser: ' + acrescimo;
    } else if (codigo == 5) {
        
        document.getElementById('resultado').innerHTML = 'Seu cargo é de ' + cargo + ' e você não tem aumento salarial';
    }
}
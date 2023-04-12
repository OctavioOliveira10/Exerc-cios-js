
/*Ex1*/
function mostrarMaior(num1,num2) {
    if(num1 > num2) {
        console.log(num1)
    } else {
        console.log(num2)
    }
}


/*Ex2*/
    mostrarMaior(10,20)

    function numeroPn(num1) {
        if(num1 >=0) {
            console.log("Este número é positivo ")
        } else {
            console.log("Este número é negativo")
        }
    }

    numeroPn(-10)


/*Ex3*/
    function vogalOuConsoante(letra) {
        switch(letra) {
            case 'A':
                console.log("Vogal");
            break;

            case 'E':
                console.log("Vogal");
            break;

            case 'I':
                console.log("Vogal");
            break;

            case 'O':
                console.log("Vogal");
            break;

            case 'U':
                console.log("Vogal");
            break;

            default:
                console.log("Consoante")
        }
    }

    vogalOuConsoante("U") 

  
 /*Ex4*/  
    function media(nota1,nota2,nota3,nota4) {
        let soma = (nota1 + nota2 + nota3 + nota4)  / 4
        if(soma >=7 && soma < 10) {
            console.log("Aprovado")
        } else if(soma == 10) { 
            console.log("Aprovado com distinção")
        } else {
            console.log("Reprovado")
        }
    }

    media(2,2,5,4)


/*Ex5*/
    function mostrarMaior3(num1,num2,num3) {
        if(num1 > num2 && num1 > num3) {
            console.log(num1)
        } else if(num2 > num1 && num2 > num3 ) {
            console.log(num2)
        } else {
            console.log(num3)
        }
    }

    mostrarMaior3(10,40,30)


/*Ex6*/
    function mostrarBarato(batata,maca,pera) {
        if(batata < maca && batata < pera) {
            console.log( "Batata é mais barato, que custa: " + batata)
        } else if(maca < batata && maca < pera ) {
            console.log( "Maçã é mais barato, que custa: " + maca)
        } else {
            console.log("Pera é mais barato, que custa: " + pera)
        }
    }

    mostrarBarato(2,1,30)
 
    
/*Ex7*/
    function periodoEstudo(periodo) {

        switch(periodo) {
            case 'M':
                console.log("Bom dia");
            break;

            case 'V':
                console.log("Boa tarde");
            break;

            case 'N':
                console.log("Boa noite");
            break;

            default:
                console.log("Valor inválido")
        }
        
    }

        periodoEstudo("N")

        /*
        Tentei usar Switch case porém não deu certo

        function notasCaracter(nota) {

            switch(nota) {
                case nota > 90:
                    console.log("A");
                break;
    
                case nota >= 80:
                    console.log("B");
                break;
    
                case nota >= 70:
                    console.log("C");
                break;

                case nota >= 60:
                    console.log("D");
                break;
    
                default:
                    console.log("F")
            }
            
        }

        notasCaracter(95)*/


    /*Ex8*/
        function notasCaracter(nota) {
        if(nota >= 90) {
            console.log( "A")
        } else if(nota >= 80 ) {
            console.log( "B")
        } else if(nota >= 70) {
            console.log("C")
        } else if(nota >= 60) {
            console.log("D")
        } else {
            console.log("F")
        }
    }

    notasCaracter(20)

    /*
    
    Também tentei usar o Switch case, mas sem sucesso

    function diaSemana(dia) {

            switch(dia) {
                case dia == 1:
                    console.log("Domingo");
                break;
    
                case dia == 2:
                    console.log("Segunda-Feira");
                break;
    
                case dia == 3:
                    console.log("Terça-Feira");
                break;

                case dia == 4:
                    console.log("Quarta-Feira");
                break;

                case dia == 5:
                    console.log("Quinta-Feira");
                break;

                case dia == 6:
                    console.log("Sexta-Feira");
                break;

                case dia == 7:
                    console.log("Sábado");
                break;
    
                default:
                    console.log("Valor inválido")
            }
            
        }

            diaSemana(1)*/


        /*Ex9*/
            function diaSemana(dia) {
                if(dia == 1) {
                    console.log( "Domingo")
                } else if(dia == 2 ) {
                    console.log( "Segunda-Feira")
                } else if(dia == 3) {
                    console.log("Terça-Feira")
                } else if(dia == 4) {
                    console.log("Quarta-Feira")
                } else if (dia == 5) {
                    console.log("Quinta-Feira")
                } else if(dia == 6) {
                    console.log("Sexta-Feira")
                } else if(dia == 7) {
                    console.log("Sábado")
                } else { 
                    console.log("Valor inválido")
                }
            }
        
            diaSemana(10)

class CalcController {
    
    constructor(){
    
        this._currentDate;
         this.initialize();
         this._operation = [];
       
        
         

         this._locale = 'pt-BR'
            
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        
        // CLICANDO NO DISPLAY
         let display = document.querySelector('#display')
         display.addEventListener('click', e=> {
             console.log('clicou no display')
         })

         //FUNÇÃO PARA ACEITAR EVENTO DE CLICK  OU ARASTAR 
         function addEventListenerAll(element, events, fn) {
            events.split(' ').forEach(event =>{
                element.addEventListener(event, fn, false)
            })
         }

         function clearAll() {
            this._operation = [];
        }


        
        function setError(){
            this.displayCalcEl = "ERROR"
        }

        // CLICANDO NOS BOTÕES
        let buttons = document.querySelectorAll('button')
        console.log(buttons)
        buttons.forEach((btn, index) => {
            addEventListenerAll(btn, "click drag", e=> {
                
              // console.log(btn.innerHTML)

                
                
                switch (btn.innerHTML){
                    case '0':
                    case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                        this._operation.push(parseInt(btn.innerHTML))
                        break
                        
                    case '+':
                        this._operation.push(btn.innerHTML)
                     //   console.log(this._operation)
                        break
                    case '-':
                        this._operation.push(btn.innerHTML)
                   //     console.log(this._operation)
                        break
                    case '*':
                        this._operation.push(btn.innerHTML)
                      //  console.log(this._operation)
                        break
                    case '/':
                        this._operation.push(btn.innerHTML)
                   //     console.log(this._operation)
                        break
                    case '%':
                        this._operation.push(btn.innerHTML)
                    //    console.log(this._operation)
                        break
                        
                        case 'AC':
                            this._operation = [0]
                            this._displayCalcEl = this._operation.innerHTML
                            break
                            
                            case 'CE':
                                this._operation.pop()
                             //   console.log(this._operation)
                                break
                                
                                case '.':
                                    this._operation.push(btn.innerHTML)
                                    this.displayCalcEl = "."
                                  //  console.log(this._operation)
                                    break
                                    
                                    case '=':
                                    console.log(this._operation)
                                   // this._operation.push(btn.innerHTML)
                                   var res =  this._operation.join('')
                                   console.log( res)
                                   var result = eval(res)
                                    console.log(res)

                                     this.displayCalcEl = result
                                     
                                     break
                                     
                                    }
                                    
                                    btn.style.cursor = "pointer" 
                                    console.log(this._operation)
                                    
                                    var res =  this._operation.join('')
                                    console.log( res)
                                    this.displayCalcEl = res

               

            })   
        })    

        function clearEntry(){
            this._operation.pop();
        };
       

        function addOperation(value){
            this._operation.push(value)
        }

        function execBtn(value) {

            switch (value){
                case 'AC':
                    this.clearAll();
                    break;

                case 'CE' :
                    this.clearEntry();
                    break;
                case '+' :
                    
                    break;
                case '-' :
                    this.clearEntry();
                    break;
                case '*' :
                    
                    break;
                case '/' :
                    this.clearEntry();
                    break;
                case '¨%' :
                    
                    break;
                case '=' :
                    this.clearEntry();
                    break;

                case '.' :
                    break;

                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                    this._addOperation(value);
                break;

                default:
                   this.setError();
                    break;


            } 
        
        }


    }
    
    

    
    initialize(){
        
          
       var interval = setInterval(() => {
            this._dateEl.innerHTML = new Date().toLocaleDateString(this._locale)
            this._timeEl.innerHTML = new Date().toLocaleTimeString(this._locale)
 
        }, 1000)

      /*  setTimeout(()=> '{''''''''

            clearInterval(interval)
            this._displayCalcEl.innerHTML = 'error'
        }, 10000)
        */
        var container = document.createElement("div")
        container.setAttribute('id', "container")
        container.textContent = "CALCULADORA"
        document.body.appendChild(container)
       
        var datahora = document.createElement("div")
        container.setAttribute('id', "datahora")
        container.textContent = "CALCULADORA"
        container.appendChild(datahora)

        var data = document.createElement('div')
        data.id = 'data'
        data.innerHTML ='aqui data';
        
        datahora.appendChild(data)
        
        var hora = document.createElement('div')
        hora.id = 'hora'
        hora.innerHTML = 'aqui hora'
        datahora.appendChild(hora)
        
        var display = document.createElement('div')
        display.setAttribute('id', 'display');
        display.textContent = '';
        container.appendChild(display)
        
        var teclado = document.createElement('div')
        teclado.setAttribute('id', 'teclado')
        container.appendChild(teclado)

            // CRIANDO OS BOTÕES          
            var button = document.createElement('button')
            button.setAttribute('class', 'btnn' )
            button.textContent = 'MODEL' ;
            teclado.appendChild(button)
            
            var a = document.createElement('a')
            a.appendChild(button)
            a.setAttribute('href', 'modelo1.html' )
            
            
            var button = document.createElement('button')
            button.setAttribute('class', 'btnn' )
            button.textContent = 'MODEL' ;
            teclado.appendChild(a)
          
            var button = document.createElement('button')
            button.setAttribute('class', 'btnn' )
            button.textContent = 'CE' ;
            teclado.appendChild(button)

        var button = document.createElement('button')
        button.setAttribute('class', 'btnn' )
        button.textContent = 'AC' ;
        teclado.appendChild(button)
        
        /*  CRIANDO OS BOTÕES  */
          for(var i = 9; i >= 0; i--) {

              var button = document.createElement('button')
              button.setAttribute('class', `button-${i}`)
              button.textContent = i ;
              teclado.appendChild(button)
            }
      
            /*  CRIANDO OS BOTÕES DE COMANDOS  */
          
              var button = document.createElement('button')
              button.setAttribute('class', 'btnn' )
              button.textContent = '%' ;
              teclado.appendChild(button)

              var button = document.createElement('button')
              button.setAttribute('class', 'btnn' )
              button.textContent = '/' ;
              teclado.appendChild(button)

              var button = document.createElement('button')
              button.setAttribute('class', 'btnn' )
              button.textContent = '*' ;
              teclado.appendChild(button)

              var button = document.createElement('button')
              button.setAttribute('class', 'btnn' )
              button.textContent = '-' ;
              teclado.appendChild(button)

              var button = document.createElement('button')
              button.setAttribute('class', 'btnn' )
              button.textContent = '+' ;
              teclado.appendChild(button)

              var button = document.createElement('button')
              button.setAttribute('class', 'btnn' )
              button.textContent = '.' ;
              teclado.appendChild(button)
           
              var button = document.createElement('button')
              button.setAttribute('class', 'btnn' )
              button.textContent = '=' ;
              teclado.appendChild(button)





           
    }
    
    
    
    get displayCalcEl() {
        return this._displayCalcEl.innerHTML;
    }
    set displayCalcEl(value) {
        return this._displayCalcEl.innerHTML = value;
    }

    get currentDate(){
        return new Date()
    }
    set currentDate(value){
        this._currentDate = value
    }
    

}
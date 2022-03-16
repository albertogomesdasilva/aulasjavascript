
class CalcController {
    
    constructor(){
    
        this._currentDate;
         this.initialize();
         
    
         this._locale = 'pt-BR'
        
    
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
    }

    initButtonsEvents(){
        let buttons = document.querySelector('button')
        buttons.addEventListener('click', e=> {
            console.log('clicou')
        })
    }
    
    

    
    initialize(){
        
          
       var interval = setInterval(() => {
            this._dateEl.innerHTML = new Date().toLocaleDateString(this._locale)
            this._timeEl.innerHTML = new Date().toLocaleTimeString(this._locale)
 
        }, 1000)

        setTimeout(()=> {

            clearInterval(interval)
            this._displayCalcEl.innerHTML = 'error'
        }, 10000)
        
      
        
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
        display.textContent = '0123456789';
        container.appendChild(display)
        
        var teclado = document.createElement('div')
        teclado.setAttribute('id', 'teclado')
        container.appendChild(teclado)
        
        /*  CRIANDO OS BOTÕES  */
          for(var i = 19; i >= 0; i--) {

              var button = document.createElement('button')
              button.setAttribute('class', `button-${i}`)
              button.textContent = i ;
              teclado.appendChild(button)
            }
         

           
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
const title =  document.querySelector(".targeta h2");
const frase = document.querySelector('.targeta p');
const bton = document.querySelector('.targeta .targeta__bton')
const url = 'https://api.adviceslip.com/advice';

const inicio = ()=>{
    fetch(url)
    .then(response =>{
        return response.json();
    })
    .then( data => {
        title.textContent = `Advice # ${data.slip.id}`;
        frase.innerHTML = `"${data.slip.advice}"`;
         
        

    })
    .catch(err =>console.error('Error:', err));
}

inicio()
bton.addEventListener('click',()=>{

    setTimeout(inicio(),2000);
   
   console.log('hola')

    
   /* fetch(url)
    .then(response =>{
        if(response.status === 200){
            return response.json();
            
                
        }else{
            throw new Error('Error: ' + response.status);
        }
    })
    .then( data => {
        title.textContent = `Advice # ${data.slip.id}`;
        frase.innerHTML = `"${data.slip.advice}"`;
         
        console.log(data)
        

    })
    .catch(err =>console.error('Error:', err)); */

});

window.onload = ()=>{
    inicio()

}

 

/*let string="";
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>
{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string =eval(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML == 'C'){
            string ="";
            document.querySelector('input').value=string;
        }
        else{
        console.log(e.target)
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string;
    }
    })
})*/




































































let input="" 
let buttons=document.querySelectorAll('.button')
Array.from(buttons).forEach((button)=>{
     button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == "=")
        {
            input=eval(input);
            document.querySelector('input').value=input;

        }
       
        
        else if(e.target.innerHTML == 'C'){
            input ="";
            document.querySelector('input').value=input;
        }
        else{
        console.log(e.target)
        input=input+e.target.innerHTML;
        document.querySelector('input').value=input;
    }
    })
})
     


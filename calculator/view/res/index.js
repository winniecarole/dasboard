const calcul=document.querySelectorAll('button');
const result=document.querySelector('#display');

calcul.forEach(function(button) {
    button.addEventListener('click',calculate);
})


function calculate(e) {
    const clickbutton=e.target.value;
    if(clickbutton === '='){
        if(result.value !== ''){
           //result.value=eval(result.value);
            axios.get("/result/"+result.value).then(function (res){
            result.value= res.data;
            console.log(res.data);
            });
        }
    }else if(clickbutton === 'C'){
        result.value='';
    }
    else{
        result.value +=clickbutton;
    }

}

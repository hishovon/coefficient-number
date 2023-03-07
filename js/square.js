function square(x) {
    return x * x;
  
  
  
}




const inputFiled = document.getElementById('btn').addEventListener('click', function () {

    const square = document.getElementById('input').value;

    const final = square(x);
    


    const result = (document.getElementById('result'));

    
    result.innerText = final;

    
})

document.getElementById("input").addEventListener("keypress", function(event){
    
    console.log(event.key);
    if (event.key=== 'Enter'){
        
    const x = document.getElementById('input').value;

    const final = square(x);
    


    const result = (document.getElementById('result'));

    
    result.innerText = final;

    }
})



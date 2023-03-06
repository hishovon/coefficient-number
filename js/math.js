function start(number)

{ let array = [];
    for (let i = 1; i <= 100; i++) {

        if (number % i == 0 ) {

           array.push(i);

        }


    }

    return array;
}




const inputFiled = document.getElementById('btn').addEventListener('click', function () {

    const inputValue = document.getElementById('input').value;

    const final = start(inputValue);
    


    const result = (document.getElementById('result'));

    
    result.innerText = final;

    
})

document.getElementById("input").addEventListener("keypress", function(event){
    
    console.log(event.key);
    if (event.key=== 'Enter'){
        
    const inputValue = document.getElementById('input').value;

    const final = start(inputValue);
    


    const result = (document.getElementById('result'));

    
    result.innerText = final;

    }
})


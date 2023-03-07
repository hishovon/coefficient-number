
  function factor(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factor(num - 1));
    }
  }


  


  const inputFiled = document.getElementById('btn').addEventListener('click', function () {

    const num = document.getElementById('input').value;

    const final = factor(num);
    


    const result = (document.getElementById('result'));

    
    result.innerText = final;

    
})

document.getElementById("input").addEventListener("keypress", function(event){
    
    console.log(event.key);
    if (event.key=== 'Enter'){
        
    const num = document.getElementById('input').value;

    const final = factor(num);
    


    const result = (document.getElementById('result'));

    
    result.innerText = final;

    }
})




  
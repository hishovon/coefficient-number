function square(x) {
    return x * x;
  }
  
  const inputField = document.getElementById('btn').addEventListener('click', function () {
    const inputValue = document.getElementById('input').value;
    const final = square(inputValue);
    const result = document.getElementById('result');
    result.innerText = final;
  });
  
  document.getElementById('input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      const x = document.getElementById('input').value;
      const final = square(x);
      const result = document.getElementById('result');
      result.innerText = final;
    }
  });
  
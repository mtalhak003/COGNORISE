function calculate() {
    var num1 = document.getElementById("num1").value;
    var operator = document.getElementById("operator").value;
    var num2 = document.getElementById("num2").value;
    var result;
    
    switch (operator) {
      case "+":
        result = parseFloat(num1) + parseFloat(num2);
        break;
      case "-":
        result = parseFloat(num1) - parseFloat(num2);
        break;
      case "*":
        result = parseFloat(num1) * parseFloat(num2);
        break;
      case "/":
        result = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        result = "Invalid operator";
    }
    
    document.getElementById("result").innerHTML ="The Calculated value is : " + result;
  }
  function clear() {
    document.getElementById("myForm").rest(); 
  }
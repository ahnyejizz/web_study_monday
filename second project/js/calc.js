function output(num) {
        var display = document.getElementById("display");
        display.value = display.value + num;

    }

    function calc() {
        var display = document.getElementById("display");
        var result = eval(display.value);
        
        var displayResult = document.getElementById("result");
        displayResult.value = result;

    }

    function del() {
        var display = document.getElementById("display");
        display.value = display.value.substring(0, display.value.length-1);
        
        var displayResult = document.getElementById("result");
        displayResult.value="";
    }

    function reset() {
        var display = document.getElementById("display");
        display.value="";

        var displayResult = document.getElementById("result");
        displayResult.value="";
    }

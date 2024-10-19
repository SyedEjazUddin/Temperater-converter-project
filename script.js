
temp()

function temp(){
    var input = document.getElementById("form").value
    var output = document.getElementById("form2").value
    var num = parseFloat(document.getElementById("first").value)
    var isnan = document.getElementById("isnan")


    if (isNaN(num)) {
        isnan.textContent = "Please enter a valid number!";
        return;  // Stop the function if no valid number is provided
    } else {
        isnan.textContent = "";  // Clear error message when a valid number is entered
    }

    let result = "";

    if(input === output){
        result = num
    }

    else if(input === "Celsius"){
        if (output === "Kelvin"){
            result = num + 273.15
        }
        else if(output === "Fahrenheit"){
            result = (num * 9 / 5) + 32;
        }
        else if(output === "Rankine"){
            result = (num + 273.15) * 9 / 5;
        }
    }

    else if(input === "Kelvin"){
        if(output === "Celsius"){
            result = num - 273.15
        }
        else if(output === "Fahrenheit"){
            result = (num - 273.15) * 9 / 5 + 32;
        }
        else if(output === "Rankine"){
            result = num * 9/5
        }
    }

    else if(input === "Fahrenheit"){
        if(output === "Celsius"){
            result = (num - 32) * 5 / 9;
        }
        else if(output === "Kelvin"){
            result = (num - 32) * 5 / 9 + 273.15;
        }
        else if(output === "Rankine"){
            result = num + 459.67
        }
    }

    else if(input === "Rankine"){
        if(output === "Celsius"){
            result = (num - 491.67) * 5 / 9;
        }
        else if(output === "Kelvin"){
            result = num * 5/9
        }
        else if(output === "Fahrenheit"){
            result = num - 459.67
        }
    }

    document.getElementById("second").value = result 
}


var num = document.getElementById("first")
let reset = document.getElementById("reset")
var second = document.getElementById("second")
var isnan = document.getElementById("isnan")


reset.addEventListener("click", function(){
    num.value = ""
    second.value = ""
    isnan.textContent = ""
})
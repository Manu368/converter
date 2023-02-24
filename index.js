let hoursInput = document.getElementById("hoursInput");
let minuteInput = document.getElementById("minutesInput");
let btn1 = document.getElementById("convertBtn");
let resultElement = document.getElementById("timein");
let result = document.createElement("p");
result.setAttribute("id", "timeInSeconds");
resultElement.appendChild(result);


let oneElement = document.createElement("p");
oneElement.setAttribute("id", "errorMsg");
resultElement.appendChild(oneElement);

function final() {


    if (hoursInput.value === "") {
        oneElement.textContent = "Please enter a valid number of hours";
        result.textContent = ""
    } else if (minuteInput.value === "") {
        oneElement.textContent = "Please enter a valid number of minutes";
        result.textContent = ""
    } else {
        result.textContent = (hoursInput.value) * 3600 + (minuteInput.value) * 60
        oneElement.textContent = ""
    }

   
}

btn1.addEventListener("click", final)
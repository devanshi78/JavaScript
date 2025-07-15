let avg = parseInt(prompt("Enter avg : "));

let result = avg >= 35
    ? avg >= 80
        ? "A grade"
        : avg >= 60
            ? "B grade"
                : avg >= 50
                ? "Pass Class"
                    : avg >= 40
                    ? "just pass"
                    : "pass"
    : "Fail";

console.log(result);

document.getElementById('grade').innerHTML += " " + result;
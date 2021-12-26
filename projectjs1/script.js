
let button = document.querySelector("button");

button.addEventListener("click", function() {
        const br = document.createElement("br");
        document.body.append(br);
        let randomNumbers = Date.now();
        // document.body.append(`${randomNumbers}`);
        document.body.append(br);

        let numbersText = randomNumbers.toString();
        let endNumbersText = numbersText.slice(11,13);
        console.log(endNumbersText);
        let number = 0;

        if( endNumbersText < 30 ) {
            number = 1;
            console.log("ini di bawah 30");
        } else if ( endNumbersText < 60) {
            number = 2;
        } else {
            number = 3;
        }

        switch (number) {
            case 1 :
                document.getElementById("demo").innerHTML = "Hebat!";
                break;
            case 2 :
                document.getElementById("demo").innerHTML = "Boleh juga!";
                break;
            case 3 : 
                document.getElementById("demo").innerHTML = "Mengerikan...";     
                break;   
        }

        // document.body.append(endNumbersText);
        // document.body.append(br);
});


















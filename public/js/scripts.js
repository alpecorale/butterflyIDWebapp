const nameVal = document.getElementById("name");
const famVal = document.getElementById("family");
const colorVal = document.getElementById("color");
const orangeCheck = document.getElementById("colorCheckOrange"),
    whiteCheck = document.getElementById("colorCheckWhite"),
    blackCheck = document.getElementById("colorCheckBlack"),
    greyCheck = document.getElementById("colorCheckGrey"),
    greenCheck = document.getElementById("colorCheckGreen"),
    blueCheck = document.getElementById("colorCheckBlue"),
    purpleCheck = document.getElementById("colorCheckPurple"),
    copperCheck = document.getElementById("colorCheckCopper"),
    redCheck = document.getElementById("colorCheckRed"),
    brownCheck = document.getElementById("colorCheckBrown");
const familyChoice = document.getElementById('familySelect');

function refreshFilter(){
    window.location.reload();
}

function applyFilter() {
    if(familyChoice.value == "Skipper"){
        document.querySelectorAll("tr:not(.Skipper)" ).forEach(a=>a.style.display = "none");
    }
    if(orangeCheck.checked){
        document.querySelectorAll("tr:not(.Orange)" ).forEach(a=>a.style.display = "none");
    }
    if(whiteCheck.checked){
        document.querySelectorAll("tr:not(.White)" ).forEach(a=>a.style.display = "none");
    }
    if(brownCheck.checked){
        document.querySelectorAll("tr:not(.Brown)" ).forEach(a=>a.style.display = "none");
    }
    if(blackCheck.checked){
        document.querySelectorAll("tr:not(.Black)" ).forEach(a=>a.style.display = "none");
    }
    if(greyCheck.checked){
        document.querySelectorAll("tr:not(.Grey)" ).forEach(a=>a.style.display = "none");
    }
    if(blueCheck.checked){
        document.querySelectorAll("tr:not(.Blue)" ).forEach(a=>a.style.display = "none");
    }
    if(greenCheck.checked){
        document.querySelectorAll("tr:not(.Green)" ).forEach(a=>a.style.display = "none");
    }
    if(purpleCheck.checked){
        document.querySelectorAll("tr:not(.Purple)" ).forEach(a=>a.style.display = "none");
    }
    if(redCheck.checked){
        document.querySelectorAll("tr:not(.Red)" ).forEach(a=>a.style.display = "none");
    }
    if(copperCheck.checked){
        document.querySelectorAll("tr:not(.Copper)" ).forEach(a=>a.style.display = "none");
    }
}



async function submitHandler() {
    const json = {name: nameVal.value,
            family: famVal.value,
            color: colorVal.value},
        body = JSON.stringify(json);

        // submit new value
        await fetch('/postButt', {
            method: 'POST',
            body,
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                return response.json();
            })
            .then(json => {
                window.location.reload();
            })
    window.location.reload();
}

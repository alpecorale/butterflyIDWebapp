const nameVal = document.getElementById("name"),
    famVal = document.getElementById("family"),
    colorVal = document.getElementById("color"),
    hwColorVal = document.getElementById("hwcolor"),
    patternVal = document.getElementById("pattern"),
    sizeVal = document.getElementById("size"),
    shapeVal = document.getElementById("shape"),
    tailsVal = document.getElementById("tails"),
    hookedVal = document.getElementById("hooked");
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
const orangeCheckhw = document.getElementById("colorCheckOrangehw"),
    whiteCheckhw = document.getElementById("colorCheckWhitehw"),
    blackCheckhw = document.getElementById("colorCheckBlackhw"),
    greyCheckhw = document.getElementById("colorCheckGreyhw"),
    greenCheckhw = document.getElementById("colorCheckGreenhw"),
    blueCheckhw = document.getElementById("colorCheckBluehw"),
    purpleCheckhw = document.getElementById("colorCheckPurplehw"),
    copperCheckhw = document.getElementById("colorCheckCopperhw"),
    redCheckhw = document.getElementById("colorCheckRedhw"),
    brownCheckhw = document.getElementById("colorCheckBrownhw");
const familyChoice = document.getElementById('familySelect');
const tailsChoice = document.getElementById('tailSelect');
const hookedChoice = document.getElementById('hookSelect');
const sizeChoice = document.getElementById('sizeSelect');
const shapeChoice = document.getElementById('shapeSelect');


function refreshFilter(){
    window.location.reload();
}

function applyFilter() {
    document.querySelectorAll(".butterfly").forEach(a=>a.style.display = "block");

    if(familyChoice.value === "Hesperiidae"){
        document.querySelectorAll("tr:not(.Hesperiidae)" ).forEach(a=>a.style.display = "none");
    }
    if(familyChoice.value === "Papilionidae"){
        document.querySelectorAll("tr:not(.Swallowtailr)" ).forEach(a=>a.style.display = "none");
    }
    if(familyChoice.value === "Pieridae"){
        document.querySelectorAll("tr:not(.Pieridae)" ).forEach(a=>a.style.display = "none");
    }
    if(familyChoice.value === "Lycaenidae"){
        document.querySelectorAll("tr:not(.Lycaenidae)" ).forEach(a=>a.style.display = "none");
    }
    if(familyChoice.value === "Nymphalidae"){
        document.querySelectorAll("tr:not(.Nymphalidae)" ).forEach(a=>a.style.display = "none");
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
    if(orangeCheckhw.checked){
        document.querySelectorAll("tr:not(.Orange-h)" ).forEach(a=>a.style.display = "none");
    }
    if(whiteCheckhw.checked){
        document.querySelectorAll("tr:not(.White-h)" ).forEach(a=>a.style.display = "none");
    }
    if(brownCheckhw.checked){
        document.querySelectorAll("tr:not(.Brown-h)" ).forEach(a=>a.style.display = "none");
    }
    if(blackCheckhw.checked){
        document.querySelectorAll("tr:not(.Black-h)" ).forEach(a=>a.style.display = "none");
    }
    if(greyCheckhw.checked){
        document.querySelectorAll("tr:not(.Grey-h)" ).forEach(a=>a.style.display = "none");
    }
    if(blueCheckhw.checked){
        document.querySelectorAll("tr:not(.Blue-h)" ).forEach(a=>a.style.display = "none");
    }
    if(greenCheckhw.checked){
        document.querySelectorAll("tr:not(.Green-h)" ).forEach(a=>a.style.display = "none");
    }
    if(purpleCheckhw.checked){
        document.querySelectorAll("tr:not(.Purple-h)" ).forEach(a=>a.style.display = "none");
    }
    if(redCheckhw.checked){
        document.querySelectorAll("tr:not(.Red-h)" ).forEach(a=>a.style.display = "none");
    }
    if(copperCheckhw.checked){
        document.querySelectorAll("tr:not(.Copper-h)" ).forEach(a=>a.style.display = "none");
    }

    if(tailsChoice.value === "Yes"){
        document.querySelectorAll("tr:not(.Yes-t)" ).forEach(a=>a.style.display = "none");
    }
    if(tailsChoice.value === "No"){
        document.querySelectorAll("tr:not(.No-t)" ).forEach(a=>a.style.display = "none");
    }

    if(hookedChoice.value === "Yes"){
        document.querySelectorAll("tr:not(.Yes-h)" ).forEach(a=>a.style.display = "none");
    }
    if(hookedChoice.value === "No"){
        document.querySelectorAll("tr:not(.No-h)" ).forEach(a=>a.style.display = "none");
    }

    if(sizeChoice.value === "Small"){
        document.querySelectorAll("tr:not(.Small)" ).forEach(a=>a.style.display = "none");
    }
    if(sizeChoice.value === "Medium"){
        document.querySelectorAll("tr:not(.Medium)" ).forEach(a=>a.style.display = "none");
    }
    if(sizeChoice.value === "Large"){
        document.querySelectorAll("tr:not(.Large)" ).forEach(a=>a.style.display = "none");
    }

    if(shapeChoice.value === "Common"){
        document.querySelectorAll("tr:not(.Common)" ).forEach(a=>a.style.display = "none");
    }
    if(shapeChoice.value === "Skipper"){
        document.querySelectorAll("tr:not(.Skipper)" ).forEach(a=>a.style.display = "none");
    }
    if(shapeChoice.value === "Hairstreak"){
        document.querySelectorAll("tr:not(.Hairstreak)" ).forEach(a=>a.style.display = "none");
    }
    if(shapeChoice.value === "Unique"){
        document.querySelectorAll("tr:not(.Unique)" ).forEach(a=>a.style.display = "none");
    }
    if(shapeChoice.value === "Longtail"){
        document.querySelectorAll("tr:not(.Longtail)" ).forEach(a=>a.style.display = "none");
    }
}



async function submitHandler() {
    let colorList = colorVal.value.split(", ");
    let patternList = patternVal.value.split(", ");
    let hwColorList = hwColorVal.value.split(", ") + "-h";
    let newHWColorString = '';
    for (let i = 0; i < hwColorList.length; i++){
        newHWColorString += hwColorList[i]
        let j = i + 1
        if (j >= hwColorList.length){
            newHWColorString += '-h';
        } else {
            newHWColorString += '-h, '
        }
    }


    const json = {name: nameVal.value,
            family: famVal.value,
            color: colorVal.value,
            hwColor: newHWColorString,
            size: sizeVal.value,
            pattern: patternVal.value,
            hooked: hookedVal.value,
            tails: tailsVal.value,
            shape: shapeVal.value
        },
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

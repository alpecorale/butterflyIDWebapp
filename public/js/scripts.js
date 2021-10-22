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
        document.querySelectorAll(".butterfly:not(.Hesperiidae)" ).forEach(a=>a.style.display = "none");
    }
    if(familyChoice.value === "Papilionidae"){
        document.querySelectorAll(".butterfly:not(.Papilionidae)" ).forEach(a=>a.style.display = "none");
    }
    if(familyChoice.value === "Pieridae"){
        document.querySelectorAll(".butterfly:not(.Pieridae)" ).forEach(a=>a.style.display = "none");
    }
    if(familyChoice.value === "Lycaenidae"){
        document.querySelectorAll(".butterfly:not(.Lycaenidae)" ).forEach(a=>a.style.display = "none");
    }
    if(familyChoice.value === "Nymphalidae"){
        document.querySelectorAll(".butterfly:not(.Nymphalidae)" ).forEach(a=>a.style.display = "none");
    }

    if(orangeCheck.checked){
        document.querySelectorAll(".butterfly:not(.Orange)" ).forEach(a=>a.style.display = "none");
    }
    if(whiteCheck.checked){
        document.querySelectorAll(".butterfly:not(.White)" ).forEach(a=>a.style.display = "none");
    }
    if(brownCheck.checked){
        document.querySelectorAll(".butterfly:not(.Brown)" ).forEach(a=>a.style.display = "none");
    }
    if(blackCheck.checked){
        document.querySelectorAll(".butterfly:not(.Black)" ).forEach(a=>a.style.display = "none");
    }
    if(greyCheck.checked){
        document.querySelectorAll(".butterfly:not(.Grey)" ).forEach(a=>a.style.display = "none");
    }
    if(blueCheck.checked){
        document.querySelectorAll(".butterfly:not(.Blue)" ).forEach(a=>a.style.display = "none");
    }
    if(greenCheck.checked){
        document.querySelectorAll(".butterfly:not(.Green)" ).forEach(a=>a.style.display = "none");
    }
    if(purpleCheck.checked){
        document.querySelectorAll(".butterfly:not(.Purple)" ).forEach(a=>a.style.display = "none");
    }
    if(redCheck.checked){
        document.querySelectorAll(".butterfly:not(.Red)" ).forEach(a=>a.style.display = "none");
    }
    if(copperCheck.checked){
        document.querySelectorAll(".butterfly:not(.Copper)" ).forEach(a=>a.style.display = "none");
    }
    if(orangeCheckhw.checked){
        document.querySelectorAll(".butterfly:not(.Orange-h)" ).forEach(a=>a.style.display = "none");
    }
    if(whiteCheckhw.checked){
        document.querySelectorAll(".butterfly:not(.White-h)" ).forEach(a=>a.style.display = "none");
    }
    if(brownCheckhw.checked){
        document.querySelectorAll(".butterfly:not(.Brown-h)" ).forEach(a=>a.style.display = "none");
    }
    if(blackCheckhw.checked){
        document.querySelectorAll(".butterfly:not(.Black-h)" ).forEach(a=>a.style.display = "none");
    }
    if(greyCheckhw.checked){
        document.querySelectorAll(".butterfly:not(.Grey-h)" ).forEach(a=>a.style.display = "none");
    }
    if(blueCheckhw.checked){
        document.querySelectorAll(".butterfly:not(.Blue-h)" ).forEach(a=>a.style.display = "none");
    }
    if(greenCheckhw.checked){
        document.querySelectorAll(".butterfly:not(.Green-h)" ).forEach(a=>a.style.display = "none");
    }
    if(purpleCheckhw.checked){
        document.querySelectorAll(".butterfly:not(.Purple-h)" ).forEach(a=>a.style.display = "none");
    }
    if(redCheckhw.checked){
        document.querySelectorAll(".butterfly:not(.Red-h)" ).forEach(a=>a.style.display = "none");
    }
    if(copperCheckhw.checked){
        document.querySelectorAll(".butterfly:not(.Copper-h)" ).forEach(a=>a.style.display = "none");
    }

    if(tailsChoice.value === "Yes"){
        document.querySelectorAll(".butterfly:not(.Yes-t)" ).forEach(a=>a.style.display = "none");
    }
    if(tailsChoice.value === "No"){
        document.querySelectorAll(".butterfly:not(.No-t)" ).forEach(a=>a.style.display = "none");
    }

    if(hookedChoice.value === "Yes"){
        document.querySelectorAll(".butterfly:not(.Yes-h)" ).forEach(a=>a.style.display = "none");
    }
    if(hookedChoice.value === "No"){
        document.querySelectorAll(".butterfly:not(.No-h)" ).forEach(a=>a.style.display = "none");
    }

    if(sizeChoice.value === "Small"){
        document.querySelectorAll(".butterfly:not(.Small)" ).forEach(a=>a.style.display = "none");
    }
    if(sizeChoice.value === "Medium"){
        document.querySelectorAll(".butterfly:not(.Medium)" ).forEach(a=>a.style.display = "none");
    }
    if(sizeChoice.value === "Large"){
        document.querySelectorAll(".butterfly:not(.Large)" ).forEach(a=>a.style.display = "none");
    }

    if(shapeChoice.value === "Common"){
        document.querySelectorAll(".butterfly:not(.Common)" ).forEach(a=>a.style.display = "none");
    }
    if(shapeChoice.value === "Skipper"){
        document.querySelectorAll(".butterfly:not(.Skipper)" ).forEach(a=>a.style.display = "none");
    }
    if(shapeChoice.value === "Hairstreak"){
        document.querySelectorAll(".butterfly:not(.Hairstreak)" ).forEach(a=>a.style.display = "none");
    }
    if(shapeChoice.value === "Unique"){
        document.querySelectorAll(".butterfly:not(.Unique)" ).forEach(a=>a.style.display = "none");
    }
    if(shapeChoice.value === "Longtail"){
        document.querySelectorAll(".butterfly:not(.Longtail)" ).forEach(a=>a.style.display = "none");
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

var yhteensa = 5;
var pisteet = 0;
var huom = 0

var k1, k2, k3, k4, k5, tulokset
function aaaah(){
    k1 = document.forms["kyselylomake"]["k1"].value
    k2 = document.forms["kyselylomake"]["k2"].value
    k3 = document.forms["kyselylomake"]["k3"].value
    k4 = document.forms["kyselylomake"]["k4"].value
    k5 = document.forms["kyselylomake"]["k5"].value

    for (i = 1; i <= yhteensa; i++){
        if (eval("k" + i) == null || eval("k"+i) == ""){
            alert(`Et vastannut kysymykseen numero: ${i}`)
            huom = 1
        }
        if (huom == 1){
            return false
        }
    }
    var vastaukset = ["b", "a", "d", "b", "d"]
    for (i = 1; i <= yhteensa; i++){
        if (eval("k"+i) == vastaukset[i-1]){
            pisteet++
        }
    }
    tulokset = document.getElementById("tulokset")
    alert(`Sait ${pisteet} pistettä, kun maksimi pistemäärä oli ${yhteensa}`)
    tulokset.innerHTML = `<h3>Sait <span> ${pisteet} </span> pistettä, kun maksimi pistemäärä oli <span> ${yhteensa} </span></h3>`
    pisteet = 0
    return false
}

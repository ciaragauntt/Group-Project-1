var searchInput = document.getElementById('newMed')
searchInput.onkeydown = function() {
    var searchData = document.getElementById('newMed').value
    if(searchData.length >= 3 ) {
        fetch('https://clinicaltables.nlm.nih.gov/api/rxterms/v3/search?terms=' + searchData)
        .then(response => response.json())
        .then(data => {console.log(JSON.stringify(data[1]))})
    }
}

//modal stuff
/*var modal = document.getElementById("MedModal");
var btn = document.getElementById("MedBtn")
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}

var btn = document.getElementById("SaveBtn");
btn.onclick = function () {
    var medication = document.getElementById('newMed').value;
    console.log(medication)
}
*/
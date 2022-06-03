var searchInput = document.getElementById('newMed')
searchInput.onkeyup = function () {
    var searchData = searchInput.value
    console.log(searchData)
    if (searchData.length >= 3) {
        $('#newMed').autocomplete({
            source: function(request, response) {
                $.getJSON(
                    'https://clinicaltables.nlm.nih.gov/api/rxterms/v3/search?terms=' + searchData,
                    request,
                    function( data, status, xhr ) {
                      console.log(data)
                      response( data[1] );
                    }
                )
            }
        })       
    }
}

    


const month = new Date();
month.getMonth();

console.log(month);

// modal stuff
var modal = document.getElementById("MedModal");
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

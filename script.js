var searchInput = document.getElementById('newMed')
searchInput.onkeyup = function () {
    var searchData = searchInput.value
    console.log(searchData)
    if (searchData.length >= 3) {
        $('#newMed').autocomplete({
            source: function (request, response) {
                $.getJSON(
                    'https://clinicaltables.nlm.nih.gov/api/rxterms/v3/search?terms=' + searchData,
                    request,
                    function (data, status, xhr) {
                        console.log(data)
                        response(data[1]);
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
};

const storageInput = document.querySelector('#newMed');
const text = document.querySelector('.text');
const savebutton = document.querySelector('#saveBtn');
const storedInput = localStorage.getItem('MyMedList');

if(storageInput){
    text.textContent = storedInput
}

storageInput.addEventListener('input', drug => {
    text.textContent = drug.target.value
})
const saveToLocalStorage = () => {
    localStorage.setItem('MyMedList', JSON.stringify(input))
}
savebutton.addEventListener('click', saveToLocalStorage)

var addedList = document.getElementById('addedList');

console.log(localStorage);


//getting medication to save to local storage
//let medication = [];

//const addMed = (ev) => {
    //ev.preventDefault(); //stop the form submitting
    //let med = {
       // newMed: document.getElementById('newMed').value
    //}
    //medication.push(med);
    //document.forms[0].reset(); //to clear the form for the next entry

    //localStorage.setItem('MyMedList', JSON.stringify(medication));
    //var list = localStorage.getItem('MyMedList');
    //list = JSON.parse(list);
    //$(document).ready(function(){
    //$("#saveBtn").click(function(){
        //$("#addedList").append(medication);
    //});
//});
//document.addEventListener('DOMContentLoaded', () => {
    //document.getElementById('saveBtn').addEventListener('click', addMed);
//})};

console.log(localStorage);

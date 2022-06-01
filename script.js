fetch('https://clinicaltables.nlm.nih.gov/api/rxterms/v3/search?terms=arava&ef=STRENGTHS_AND_FORMS')
    .then(response => response.json())
    .then(data => console.log(JSON.stringify(data[1])))

$(function () {
    $('.calendar-container').calendar();
})

    // var calendar = $("calendar").calendarGC({
    //     dayBegin: 0,
    //     dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    //     monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Dcember'],
    //     nextIcon: '&gt;',
    //     prevIcon: '&lt;',
    // });
    .then(response => response.json())
    .then(data => console.log(JSON.stringify(data[1])))

//modal stuff
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

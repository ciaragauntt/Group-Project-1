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


const today = new Date();
const day = today.getDate();
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const currentMonth = months[today.getMonth()];

console.log(today);
console.log(day);
console.log(currentMonth);

function getCalendar() {

    document.getElementById('monthName').innerText = currentMonth
};

console.log(getCalendar);

getCalendar();


function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}
const date = new Date();
const currentYear = date.getFullYear();
const newMonth = date.getMonth() + 1;
const daysInCurrentMonth = getDaysInMonth(currentYear, newMonth);

let i = 0;
while (i <= daysInCurrentMonth) {
    i++;
}


getDaysInMonth();

console.log(daysInCurrentMonth);







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
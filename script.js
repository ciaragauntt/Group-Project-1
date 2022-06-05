//Autocomplete the medication when you type it in the text box
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

function generateCalendar() {
    const startOfMonth = moment().startOf('month').format('ddd');
    console.log(startOfMonth)
    if(startOfMonth === 'Sun'){
       
        
        }
    }

    

generateCalendar()
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
//Calendar Modal Function
function calendarModal(){
    const calendarModal = document.getElementById('calendarModal')
    const calendar1 = document.getElementById('dayBlockOne')
    const calendar2 = document.getElementById('dayBlockTwo')
    const calendar3 = document.getElementById('dayBlockThree')
    const calendar4 = document.getElementById('dayBlockFour')
    const calendar5 = document.getElementById('dayBlockFive')
    const calendar6 = document.getElementById('dayBlockSix')
    const calendar7 = document.getElementById('dayBlockSeven')
    const calendar8 = document.getElementById('dayBlockEight')
    const calendar9 = document.getElementById('dayBlockNine')
    const calendar10 = document.getElementById('dayBlockTen')
    const calendar11 = document.getElementById('dayBlockEleven')
    const calendar12 = document.getElementById('dayBlockTwelve')
    const calendar13 = document.getElementById('dayBlockThirteen')
    const calendar14 = document.getElementById('dayBlockFourteen')
    const calendar15 = document.getElementById('dayBlockFifteen')
    const calendar16 = document.getElementById('dayBlockSixteen')
    const calendar17 = document.getElementById('dayBlockSeventeen')
    const calendar18 = document.getElementById('dayBlockEighteen')
    const calendar19 = document.getElementById('dayBlockNineteen')
    const calendar20 = document.getElementById('dayBlockTwenty')
    const calendar21 = document.getElementById('dayBlockTwentyOne')
    const calendar22 = document.getElementById('dayBlockTwentyTwo')
    const calendar23 = document.getElementById('dayBlockTwentyThree')
    const calendar24 = document.getElementById('dayBlockTwentyFour')
    const calendar25 = document.getElementById('dayBlockTwentyFive')
    const calendar26 = document.getElementById('dayBlockTwentySix')
    const calendar27 = document.getElementById('dayBlockTwentySeven')
    const calendar28 = document.getElementById('dayBlockTwentyEight')
    const calendar29 = document.getElementById('dayBlockTwentyNine')
    const calendar30 = document.getElementById('dayBlockThirty')
    const calendar31 = document.getElementById('dayBlockThirtyOne')
    const calendar32 = document.getElementById('dayBlockThirtyTwo')
    const calendar33 = document.getElementById('dayBlockThirtyThree')
    const calendar34 = document.getElementById('dayBlockThirtyFour')
    const calendar35 = document.getElementById('dayBlockThirtyFive')
    var span = document.getElementById('close')
    calendar1.onclick = function() {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 1
        console.log(calendarDayClicked)
    }
    calendar2.onclick = function() {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 2
        console.log(calendarDayClicked)
    }
    calendar3.onclick = function() {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 3
        console.log(calendarDayClicked)
    }
    calendar4.onclick = function() {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 4
        console.log(calendarDayClicked)
    }
    calendar5.onclick = function() {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 5
        console.log(calendarDayClicked)
    }
    calendar6.onclick = function() {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 6
        console.log(calendarDayClicked)
    }
    calendar7.onclick = function() {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 7
        console.log(calendarDayClicked)
    }
    calendar8.onclick = function() {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 8
        console.log(calendarDayClicked)
    }
    calendar9.onclick = function() {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 9
        console.log(calendarDayClicked)
    }
    calendar10.onclick = function() {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 10
        console.log(calendarDayClicked)
    }
    calendar11.onclick = function() {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 11
        console.log(calendarDayClicked)
    }
    calendar12.onclick = function() {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 12
        console.log(calendarDayClicked)
    }
    calendar13.onclick = function() {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 13
        console.log(calendarDayClicked)
    }
    calendar14.onclick = function() {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 14
        console.log(calendarDayClicked)
    }
    calendar15.onclick = function() {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 15
        console.log(calendarDayClicked)
    }
    calendar16.onclick = function() {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 16
        console.log(calendarDayClicked)
    }
    calendar17.onclick = function() {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 17
        console.log(calendarDayClicked)
    }
    calendar18.onclick = function() {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 18
        console.log(calendarDayClicked)
    }
    calendar19.onclick = function() {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 19
        console.log(calendarDayClicked)
    }
    calendar20.onclick = function() {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 20
        console.log(calendarDayClicked)
    }
    calendar21.onclick = function() {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 21
        console.log(calendarDayClicked)
    }
    calendar22.onclick = function() {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 22
        console.log(calendarDayClicked)
    }
    calendar23.onclick = function() {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 23
        console.log(calendarDayClicked)
    }
    calendar24.onclick = function() {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 24
        console.log(calendarDayClicked)
    }
    calendar25.onclick = function() {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 25
        console.log(calendarDayClicked)
    }
    calendar26.onclick = function() {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 26
        console.log(calendarDayClicked)
    }
    calendar27.onclick = function() {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 27
        console.log(calendarDayClicked)
    }
    calendar28.onclick = function() {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 28
        console.log(calendarDayClicked)
    }
    calendar29.onclick = function() {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 29
        console.log(calendarDayClicked)
    }
    calendar30.onclick = function() {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 30
        console.log(calendarDayClicked)
    }
    calendar31.onclick = function() {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 31
        console.log(calendarDayClicked)
    }
    calendar32.onclick = function() {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 32
        console.log(calendarDayClicked)
    }
    calendar33.onclick = function() {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 33
        console.log(calendarDayClicked)
    }
    calendar34.onclick = function() {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 34
        console.log(calendarDayClicked)
    }
    calendar35.onclick = function() {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 35
        console.log(calendarDayClicked)
    }

    span.onclick = function() {
        calendarModal.style.display = 'none'
    }
    window.onclick = function (event) {
        if(event.target == calendarModal) {
            calendarModal.style.display = 'none'
        }
    }
  } 
calendarModal()


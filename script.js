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

let nav = 0;

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',];

function loadCalendar() {
    const dt = new Date();
    console.log(dt);

    if (nav !== 0) {
        dt.setMonth(new Date().getMonth() + nav);
    }

    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    });


    const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);

    console.log(dateString);
    console.log(paddingDays);

    document.getElementById('monthDisplay').innerText = `${dt.toLocaleDateString('en-us', { month: 'long' })} ${year}`;
}

// for (let i = 1; i <= paddingDays + daysInMonth; i++) {
//     const dayNumber = document.createElement('textnode');
//     dayNumber.classList.add('dayBlock');

//     const dayString = `${month + 1}/${i - paddingDays}/${year}`;

//     if (i > padingDays) {
//         dayNumber.innerText = i - paddingDays;
//     }
// }

function initButtons() {
    document.getElementById('nextButton').addEventListener('click', () => {
        nav++;
        loadCalendar();
    });

    document.getElementById('prevButton').addEventListener('click', () => {
        nav--;
        loadCalendar();
    });
}

console.log(loadCalendar);
console.log();

initButtons();
loadCalendar();





// modal stuff
var modal = document.getElementById("MedModal");
var btn = document.getElementById("MedBtn")
var span = document.getElementsByClassName("close")[0];

btn.onclick=function() {
    modal.style.display = "block";
}
span.onclick = function(){
    modal.style.display = "none";
}

window.onclick = function (event) {
    event.preventDefault()
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

//Calendar Modal Function
function calendarModal() {
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
    calendar1.onclick = function () {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 1
        console.log(calendarDayClicked)
        calendarDay1()
    }
    calendar2.onclick = function () {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 2
        console.log(calendarDayClicked)
        calendarDay2()
    }
    calendar3.onclick = function () {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 3
        console.log(calendarDayClicked)
        calendarDay3()
    }
    calendar4.onclick = function () {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 4
        console.log(calendarDayClicked)
        calendarDay4()
    }
    calendar5.onclick = function () {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 5
        console.log(calendarDayClicked)
        calendarDay5()
    }
    calendar6.onclick = function () {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 6
        console.log(calendarDayClicked)
        calendarDay6()
    }
    calendar7.onclick = function () {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 7
        console.log(calendarDayClicked)
        calendarDay7()
    }
    calendar8.onclick = function () {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 8
        console.log(calendarDayClicked)
        calendarDay8()
    }
    calendar9.onclick = function () {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 9
        console.log(calendarDayClicked)
        calendarDay9()
    }
    calendar10.onclick = function () {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 10
        console.log(calendarDayClicked)
        calendarDay10()
    }
    calendar11.onclick = function () {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 11
        console.log(calendarDayClicked)
        calendarDay11()
    }
    calendar12.onclick = function () {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 12
        console.log(calendarDayClicked)
        calendarDay12()
    }
    calendar13.onclick = function () {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 13
        console.log(calendarDayClicked)
        calendarDay13()
    }
    calendar14.onclick = function () {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 14
        console.log(calendarDayClicked)
        calendarDay14()
    }
    calendar15.onclick = function () {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 15
        console.log(calendarDayClicked)
        calendarDay15()
    }
    calendar16.onclick = function () {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 16
        console.log(calendarDayClicked)
        calendarDay16()
    }
    calendar17.onclick = function () {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 17
        console.log(calendarDayClicked)
        calendarDay17()
    }
    calendar18.onclick = function () {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 18
        console.log(calendarDayClicked)
        calendarDay18()
    }
    calendar19.onclick = function () {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 19
        console.log(calendarDayClicked)
        calendarDay19()
    }
    calendar20.onclick = function () {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 20
        console.log(calendarDayClicked)
        calendarDay20()
    }
    calendar21.onclick = function () {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 21
        console.log(calendarDayClicked)
        calendarDay21()
    }
    calendar22.onclick = function () {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 22
        console.log(calendarDayClicked)
        calendarDay22()
    }
    calendar23.onclick = function () {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 23
        console.log(calendarDayClicked)
        calendarDay23()
    }
    calendar24.onclick = function () {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 24
        console.log(calendarDayClicked)
        calendarDay24()
    }
    calendar25.onclick = function () {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 25
        console.log(calendarDayClicked)
        calendarDay25()
    }
    calendar26.onclick = function () {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 26
        console.log(calendarDayClicked)
        calendarDay26()
    }
    calendar27.onclick = function () {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 27
        console.log(calendarDayClicked)
        calendarDay27()
    }
    calendar28.onclick = function () {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 28
        console.log(calendarDayClicked)
        calendarDay28()
    }
    calendar29.onclick = function () {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 29
        console.log(calendarDayClicked)
        calendarDay29()
    }
    calendar30.onclick = function () {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 30
        console.log(calendarDayClicked)
        calendarDay30()
    }
    calendar31.onclick = function () {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 31
        console.log(calendarDayClicked)
        calendarDay31()
    }
    calendar32.onclick = function () {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 32
        console.log(calendarDayClicked)
        calendarDay32()
    }
    calendar33.onclick = function () {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 33
        console.log(calendarDayClicked)
        calendarDay33()
    }
    calendar34.onclick = function () {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 34
        console.log(calendarDayClicked)
        calendarDay34()
    }
    calendar35.onclick = function () {
        calendarModal.style.display = 'block'
        let calendarDayClicked = 35
        console.log(calendarDayClicked)
        calendarDay35()
    }

    span.onclick = function () {
        calendarModal.style.display = 'none'
    }

    window.onclick = function (event) {
        if (event.target == calendarModal) {
            calendarModal.style.display = 'none'
        }
        window.onclick = function (event) {
            if (event.target == calendarModal) {
                calendarModal.style.display = 'none'
            }
        }
    }

  } 
calendarModal()

function save(){
    var new_data = ' ' + document.getElementById('newMed').value;

    if (localStorage.getItem('data')==null){
        localStorage.setItem('data', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('data'))
    old_data.push(new_data);

    localStorage.setItem('data', JSON.stringify(old_data));
}
calendarModal();

var addedList = document.getElementById('addedList')


function addToList(){
    var listItem = document.createElement('li')
    let med = JSON.parse(localStorage.getItem('data'))
    let medPrint = document.getElementsByClassName('text')[0];
    li = listItem.length;
    //listItem.classList.add('text')
    //listItem.innerText = JSON.parse(localStorage.getItem([] + 'data'));
    addedList.appendChild(listItem)

    let a = 0;
    for (var i = 0; i < med.length; i++ ) {
        a++
        medPrint.innerHTML += "<br>" + med[i];
        
    }
}
addToList();

function addToSelectMenu(){
    var selectMenu = document.getElementById('medicationList')
    let med = JSON.parse(localStorage.getItem('data'))
    let a = 0;
    for (var i = 0; i < med.length; i++) {
        a++
        var option = document.createElement('option')
        option.setAttribute('id', 'selectOption' + a)
        selectMenu.appendChild(option)
        var selectOption = document.getElementById('selectOption' + a)
        selectOption.innerHTML = med[i]
        
    }
    
}
addToSelectMenu()

function calendarDay1() {
    const calendarModal = document.getElementById('calendarModal')
    var btn = document.getElementById('calendarSaveBtn')
    btn.onclick = function (){
        var medSelect = document.getElementById('medicationList')
        var medOption = medSelect.options[medSelect.selectedIndex]

        var timeInput = document.getElementById('time-input').value

        var colorSelect = document.getElementById('colorList')
        var colorOption = colorSelect.options[colorSelect.selectedIndex].value
        console.log(colorOption)

        const calendar1 = document.getElementById('dayBlockOne')
        var medElement = document.createElement('p')
        var timeElement = document.createElement('p')
        calendar1.appendChild(medElement)
        calendar1.appendChild(timeElement)
        medElement.appendChild(medOption)
        timeElement.append(timeInput)
        localStorage.setItem('medElement', medElement)
        localStorage.setItem('timeElement', timeElement)
        localStorage.setItem('colorOption', colorOption)

        if (colorOption === 'red') {
            medElement.style = 'background-color:var(--red); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
            timeElement.style = 'background-color:var(--red); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
        } else if (colorOption === 'orange') {
            medElement.style = 'background-color:var(--orange); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
            timeElement.style = 'background-color:var(--orange); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
        } else if (colorOption === 'yellow') {
            medElement.style = 'background-color:var(--yellow); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
            timeElement.style = 'background-color:var(--yellow); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
        } else if (colorOption === 'green') {
            medElement.style = 'background-color:var(--green); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
            timeElement.style = 'background-color:var(--green); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
        } else if (colorOption === 'blue') {
            medElement.style = 'background-color:var(--blue); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
            timeElement.style = 'background-color:var(--blue); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
        } else if (colorOption === 'purple') {
            medElement.style = 'background-color:var(--purple); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
            timeElement.style = 'background-color:var(--purple); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
        }
        
        calendarModal.style.display = 'none'
    }
}
function saveCalMed1() {
    const calendar1 = document.getElementById('dayBlockOne')
    var medElement = localStorage.getItem('medElement')
    var timeElement = localStorage.getItem('timeElement')
    var colorOption = localStorage.getItem('colorOption')
    calendar1.append(medElement)
    calendar1.append(timeElement)
    if (colorOption === 'red') {
        medElement.style = 'background-color:var(--red); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--red); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption === 'orange') {
        medElement.style = 'background-color:var(--orange); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--orange); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption === 'yellow') {
        medElement.style = 'background-color:var(--yellow); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--yellow); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption === 'green') {
        medElement.style = 'background-color:var(--green); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--green); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption === 'blue') {
        medElement.style = 'background-color:var(--blue); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--blue); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption === 'purple') {
        medElement.style = 'background-color:var(--purple); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--purple); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    }


}
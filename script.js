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

    for (var i = 0; i < med.length; i++ ) {
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
//Save functionality for the elements in the calendar days
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
        let medNewData = medOption.value
        if (localStorage.getItem('medData1')==null){
            localStorage.setItem('medData1', '[]')
        }
        var medOldData = JSON.parse(localStorage.getItem('medData1'))
        medOldData.push(medNewData)
        localStorage.setItem('medData1', JSON.stringify(medOldData))
        let timeNewData = timeInput
        if (localStorage.getItem('timeData1')==null){
            localStorage.setItem('timeData1', '[]')
        }
        var timeOldData = JSON.parse(localStorage.getItem('timeData1'))
        timeOldData.push(timeNewData)
        localStorage.setItem('timeData1', JSON.stringify(timeOldData))
        localStorage.setItem('colorData1', JSON.stringify(colorOption))
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
function calendarDay2() {
    const calendarModal = document.getElementById('calendarModal')
    var btn = document.getElementById('calendarSaveBtn')
    btn.onclick = function (){
        var medSelect = document.getElementById('medicationList')
        var medOption = medSelect.options[medSelect.selectedIndex]

        var timeInput = document.getElementById('time-input').value

        var colorSelect = document.getElementById('colorList')
        var colorOption = colorSelect.options[colorSelect.selectedIndex].value
        console.log(colorOption)

        const calendar1 = document.getElementById('dayBlockTwo')
        var medElement = document.createElement('p')
        var timeElement = document.createElement('p')
        calendar1.appendChild(medElement)
        calendar1.appendChild(timeElement)
        medElement.appendChild(medOption)
        timeElement.append(timeInput)
        let medNewData = medOption.value
        if (localStorage.getItem('medData2')==null){
            localStorage.setItem('medData2', '[]')
        }
        var medOldData = JSON.parse(localStorage.getItem('medData2'))
        medOldData.push(medNewData)
        localStorage.setItem('medData2', JSON.stringify(medOldData))
        let timeNewData = timeInput
        if (localStorage.getItem('timeData2')==null){
            localStorage.setItem('timeData2', '[]')
        }
        var timeOldData = JSON.parse(localStorage.getItem('timeData2'))
        timeOldData.push(timeNewData)
        localStorage.setItem('timeData2', JSON.stringify(timeOldData))
        localStorage.setItem('colorData2', JSON.stringify(colorOption))
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
function calendarDay3(){
    const calendarModal = document.getElementById('calendarModal')
    var btn = document.getElementById('calendarSaveBtn')
    btn.onclick = function (){
        var medSelect = document.getElementById('medicationList')
        var medOption = medSelect.options[medSelect.selectedIndex]

        var timeInput = document.getElementById('time-input').value

        var colorSelect = document.getElementById('colorList')
        var colorOption = colorSelect.options[colorSelect.selectedIndex].value
        console.log(colorOption)

        const calendar1 = document.getElementById('dayBlockThree')
        var medElement = document.createElement('p')
        var timeElement = document.createElement('p')
        calendar1.appendChild(medElement)
        calendar1.appendChild(timeElement)
        medElement.appendChild(medOption)
        timeElement.append(timeInput)
        let medNewData = medOption.value
        if (localStorage.getItem('medData3')==null){
            localStorage.setItem('medData3', '[]')
        }
        var medOldData = JSON.parse(localStorage.getItem('medData3'))
        medOldData.push(medNewData)
        localStorage.setItem('medData3', JSON.stringify(medOldData))
        let timeNewData = timeInput
        if (localStorage.getItem('timeData3')==null){
            localStorage.setItem('timeData3', '[]')
        }
        var timeOldData = JSON.parse(localStorage.getItem('timeData3'))
        timeOldData.push(timeNewData)
        localStorage.setItem('timeData3', JSON.stringify(timeOldData))
        localStorage.setItem('colorData3', JSON.stringify(colorOption))
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
function calendarDay4() {
    const calendarModal = document.getElementById('calendarModal')
    var btn = document.getElementById('calendarSaveBtn')
    btn.onclick = function (){
        var medSelect = document.getElementById('medicationList')
        var medOption = medSelect.options[medSelect.selectedIndex]

        var timeInput = document.getElementById('time-input').value

        var colorSelect = document.getElementById('colorList')
        var colorOption = colorSelect.options[colorSelect.selectedIndex].value
        console.log(colorOption)

        const calendar1 = document.getElementById('dayBlockFour')
        var medElement = document.createElement('p')
        var timeElement = document.createElement('p')
        calendar1.appendChild(medElement)
        calendar1.appendChild(timeElement)
        medElement.appendChild(medOption)
        timeElement.append(timeInput)
        let medNewData = medOption.value
        if (localStorage.getItem('medData4')==null){
            localStorage.setItem('medData4', '[]')
        }
        var medOldData = JSON.parse(localStorage.getItem('medData4'))
        medOldData.push(medNewData)
        localStorage.setItem('medData4', JSON.stringify(medOldData))
        let timeNewData = timeInput
        if (localStorage.getItem('timeData4')==null){
            localStorage.setItem('timeData4', '[]')
        }
        var timeOldData = JSON.parse(localStorage.getItem('timeData4'))
        timeOldData.push(timeNewData)
        localStorage.setItem('timeData4', JSON.stringify(timeOldData))
        localStorage.setItem('colorData4', JSON.stringify(colorOption))
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
function calendarDay5() {
    const calendarModal = document.getElementById('calendarModal')
    var btn = document.getElementById('calendarSaveBtn')
    btn.onclick = function (){
        var medSelect = document.getElementById('medicationList')
        var medOption = medSelect.options[medSelect.selectedIndex]

        var timeInput = document.getElementById('time-input').value

        var colorSelect = document.getElementById('colorList')
        var colorOption = colorSelect.options[colorSelect.selectedIndex].value
        console.log(colorOption)

        const calendar1 = document.getElementById('dayBlockFive')
        var medElement = document.createElement('p')
        var timeElement = document.createElement('p')
        calendar1.appendChild(medElement)
        calendar1.appendChild(timeElement)
        medElement.appendChild(medOption)
        timeElement.append(timeInput)
        let medNewData = medOption.value
        if (localStorage.getItem('medData5')==null){
            localStorage.setItem('medData5', '[]')
        }
        var medOldData = JSON.parse(localStorage.getItem('medData5'))
        medOldData.push(medNewData)
        localStorage.setItem('medData5', JSON.stringify(medOldData))
        let timeNewData = timeInput
        if (localStorage.getItem('timeData5')==null){
            localStorage.setItem('timeData5', '[]')
        }
        var timeOldData = JSON.parse(localStorage.getItem('timeData5'))
        timeOldData.push(timeNewData)
        localStorage.setItem('timeData5', JSON.stringify(timeOldData))
        localStorage.setItem('colorData5', JSON.stringify(colorOption))
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
function calendarDay6() {
    const calendarModal = document.getElementById('calendarModal')
    var btn = document.getElementById('calendarSaveBtn')
    btn.onclick = function (){
        var medSelect = document.getElementById('medicationList')
        var medOption = medSelect.options[medSelect.selectedIndex]

        var timeInput = document.getElementById('time-input').value

        var colorSelect = document.getElementById('colorList')
        var colorOption = colorSelect.options[colorSelect.selectedIndex].value
        console.log(colorOption)

        const calendar1 = document.getElementById('dayBlockSix')
        var medElement = document.createElement('p')
        var timeElement = document.createElement('p')
        calendar1.appendChild(medElement)
        calendar1.appendChild(timeElement)
        medElement.appendChild(medOption)
        timeElement.append(timeInput)
        let medNewData = medOption.value
        if (localStorage.getItem('medData6')==null){
            localStorage.setItem('medData6', '[]')
        }
        var medOldData = JSON.parse(localStorage.getItem('medData6'))
        medOldData.push(medNewData)
        localStorage.setItem('medData6', JSON.stringify(medOldData))
        let timeNewData = timeInput
        if (localStorage.getItem('timeData6')==null){
            localStorage.setItem('timeData6', '[]')
        }
        var timeOldData = JSON.parse(localStorage.getItem('timeData6'))
        timeOldData.push(timeNewData)
        localStorage.setItem('timeData6', JSON.stringify(timeOldData))
        localStorage.setItem('colorData6', JSON.stringify(colorOption))
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
function calendarDay7() {
    const calendarModal = document.getElementById('calendarModal')
    var btn = document.getElementById('calendarSaveBtn')
    btn.onclick = function (){
        var medSelect = document.getElementById('medicationList')
        var medOption = medSelect.options[medSelect.selectedIndex]

        var timeInput = document.getElementById('time-input').value

        var colorSelect = document.getElementById('colorList')
        var colorOption = colorSelect.options[colorSelect.selectedIndex].value
        console.log(colorOption)

        const calendar1 = document.getElementById('dayBlockSeven')
        var medElement = document.createElement('p')
        var timeElement = document.createElement('p')
        calendar1.appendChild(medElement)
        calendar1.appendChild(timeElement)
        medElement.appendChild(medOption)
        timeElement.append(timeInput)
        let medNewData = medOption.value
        if (localStorage.getItem('medData7')==null){
            localStorage.setItem('medData7', '[]')
        }
        var medOldData = JSON.parse(localStorage.getItem('medData7'))
        medOldData.push(medNewData)
        localStorage.setItem('medData7', JSON.stringify(medOldData))
        let timeNewData = timeInput
        if (localStorage.getItem('timeData7')==null){
            localStorage.setItem('timeData7', '[]')
        }
        var timeOldData = JSON.parse(localStorage.getItem('timeData7'))
        timeOldData.push(timeNewData)
        localStorage.setItem('timeData7', JSON.stringify(timeOldData))
        localStorage.setItem('colorData7', JSON.stringify(colorOption))
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
function calendarDay8() {
    const calendarModal = document.getElementById('calendarModal')
    var btn = document.getElementById('calendarSaveBtn')
    btn.onclick = function (){
        var medSelect = document.getElementById('medicationList')
        var medOption = medSelect.options[medSelect.selectedIndex]

        var timeInput = document.getElementById('time-input').value

        var colorSelect = document.getElementById('colorList')
        var colorOption = colorSelect.options[colorSelect.selectedIndex].value
        console.log(colorOption)

        const calendar1 = document.getElementById('dayBlockEight')
        var medElement = document.createElement('p')
        var timeElement = document.createElement('p')
        calendar1.appendChild(medElement)
        calendar1.appendChild(timeElement)
        medElement.appendChild(medOption)
        timeElement.append(timeInput)
        let medNewData = medOption.value
        if (localStorage.getItem('medData8')==null){
            localStorage.setItem('medData8', '[]')
        }
        var medOldData = JSON.parse(localStorage.getItem('medData8'))
        medOldData.push(medNewData)
        localStorage.setItem('medData8', JSON.stringify(medOldData))
        let timeNewData = timeInput
        if (localStorage.getItem('timeData8')==null){
            localStorage.setItem('timeData8', '[]')
        }
        var timeOldData = JSON.parse(localStorage.getItem('timeData8'))
        timeOldData.push(timeNewData)
        localStorage.setItem('timeData8', JSON.stringify(timeOldData))
        localStorage.setItem('colorData8', JSON.stringify(colorOption))
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
function calendarDay9() {
    const calendarModal = document.getElementById('calendarModal')
    var btn = document.getElementById('calendarSaveBtn')
    btn.onclick = function (){
        var medSelect = document.getElementById('medicationList')
        var medOption = medSelect.options[medSelect.selectedIndex]

        var timeInput = document.getElementById('time-input').value

        var colorSelect = document.getElementById('colorList')
        var colorOption = colorSelect.options[colorSelect.selectedIndex].value
        console.log(colorOption)

        const calendar1 = document.getElementById('dayBlockNine')
        var medElement = document.createElement('p')
        var timeElement = document.createElement('p')
        calendar1.appendChild(medElement)
        calendar1.appendChild(timeElement)
        medElement.appendChild(medOption)
        timeElement.append(timeInput)
        let medNewData = medOption.value
        if (localStorage.getItem('medData9')==null){
            localStorage.setItem('medData9', '[]')
        }
        var medOldData = JSON.parse(localStorage.getItem('medData9'))
        medOldData.push(medNewData)
        localStorage.setItem('medData9', JSON.stringify(medOldData))
        let timeNewData = timeInput
        if (localStorage.getItem('timeData9')==null){
            localStorage.setItem('timeData9', '[]')
        }
        var timeOldData = JSON.parse(localStorage.getItem('timeData9'))
        timeOldData.push(timeNewData)
        localStorage.setItem('timeData9', JSON.stringify(timeOldData))
        localStorage.setItem('colorData9', JSON.stringify(colorOption))
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
function calendarDay10() {
    const calendarModal = document.getElementById('calendarModal')
    var btn = document.getElementById('calendarSaveBtn')
    btn.onclick = function (){
        var medSelect = document.getElementById('medicationList')
        var medOption = medSelect.options[medSelect.selectedIndex]

        var timeInput = document.getElementById('time-input').value

        var colorSelect = document.getElementById('colorList')
        var colorOption = colorSelect.options[colorSelect.selectedIndex].value
        console.log(colorOption)

        const calendar1 = document.getElementById('dayBlockTen')
        var medElement = document.createElement('p')
        var timeElement = document.createElement('p')
        calendar1.appendChild(medElement)
        calendar1.appendChild(timeElement)
        medElement.appendChild(medOption)
        timeElement.append(timeInput)
        let medNewData = medOption.value
        if (localStorage.getItem('medData10')==null){
            localStorage.setItem('medData10', '[]')
        }
        var medOldData = JSON.parse(localStorage.getItem('medData10'))
        medOldData.push(medNewData)
        localStorage.setItem('medData10', JSON.stringify(medOldData))
        let timeNewData = timeInput
        if (localStorage.getItem('timeData10')==null){
            localStorage.setItem('timeData10', '[]')
        }
        var timeOldData = JSON.parse(localStorage.getItem('timeData10'))
        timeOldData.push(timeNewData)
        localStorage.setItem('timeData10', JSON.stringify(timeOldData))
        localStorage.setItem('colorData10', JSON.stringify(colorOption))
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
function calendarDay11() {
    const calendarModal = document.getElementById('calendarModal')
    var btn = document.getElementById('calendarSaveBtn')
    btn.onclick = function (){
        var medSelect = document.getElementById('medicationList')
        var medOption = medSelect.options[medSelect.selectedIndex]

        var timeInput = document.getElementById('time-input').value

        var colorSelect = document.getElementById('colorList')
        var colorOption = colorSelect.options[colorSelect.selectedIndex].value
        console.log(colorOption)

        const calendar1 = document.getElementById('dayBlockEleven')
        var medElement = document.createElement('p')
        var timeElement = document.createElement('p')
        calendar1.appendChild(medElement)
        calendar1.appendChild(timeElement)
        medElement.appendChild(medOption)
        timeElement.append(timeInput)
        let medNewData = medOption.value
        if (localStorage.getItem('medData11')==null){
            localStorage.setItem('medData11', '[]')
        }
        var medOldData = JSON.parse(localStorage.getItem('medData11'))
        medOldData.push(medNewData)
        localStorage.setItem('medData11', JSON.stringify(medOldData))
        let timeNewData = timeInput
        if (localStorage.getItem('timeData11')==null){
            localStorage.setItem('timeData11', '[]')
        }
        var timeOldData = JSON.parse(localStorage.getItem('timeData11'))
        timeOldData.push(timeNewData)
        localStorage.setItem('timeData11', JSON.stringify(timeOldData))
        localStorage.setItem('colorData11', JSON.stringify(colorOption))
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
function calendarDay12() {
    const calendarModal = document.getElementById('calendarModal')
    var btn = document.getElementById('calendarSaveBtn')
    btn.onclick = function (){
        var medSelect = document.getElementById('medicationList')
        var medOption = medSelect.options[medSelect.selectedIndex]

        var timeInput = document.getElementById('time-input').value

        var colorSelect = document.getElementById('colorList')
        var colorOption = colorSelect.options[colorSelect.selectedIndex].value
        console.log(colorOption)

        const calendar1 = document.getElementById('dayBlockTwelve')
        var medElement = document.createElement('p')
        var timeElement = document.createElement('p')
        calendar1.appendChild(medElement)
        calendar1.appendChild(timeElement)
        medElement.appendChild(medOption)
        timeElement.append(timeInput)
        let medNewData = medOption.value
        if (localStorage.getItem('medData12')==null){
            localStorage.setItem('medData12', '[]')
        }
        var medOldData = JSON.parse(localStorage.getItem('medData12'))
        medOldData.push(medNewData)
        localStorage.setItem('medData12', JSON.stringify(medOldData))
        let timeNewData = timeInput
        if (localStorage.getItem('timeData12')==null){
            localStorage.setItem('timeData12', '[]')
        }
        var timeOldData = JSON.parse(localStorage.getItem('timeData12'))
        timeOldData.push(timeNewData)
        localStorage.setItem('timeData12', JSON.stringify(timeOldData))
        localStorage.setItem('colorData12', JSON.stringify(colorOption))
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
function calendarDay13() {
    const calendarModal = document.getElementById('calendarModal')
    var btn = document.getElementById('calendarSaveBtn')
    btn.onclick = function (){
        var medSelect = document.getElementById('medicationList')
        var medOption = medSelect.options[medSelect.selectedIndex]

        var timeInput = document.getElementById('time-input').value

        var colorSelect = document.getElementById('colorList')
        var colorOption = colorSelect.options[colorSelect.selectedIndex].value
        console.log(colorOption)

        const calendar1 = document.getElementById('dayBlockThirteen')
        var medElement = document.createElement('p')
        var timeElement = document.createElement('p')
        calendar1.appendChild(medElement)
        calendar1.appendChild(timeElement)
        medElement.appendChild(medOption)
        timeElement.append(timeInput)
        let medNewData = medOption.value
        if (localStorage.getItem('medData13')==null){
            localStorage.setItem('medData13', '[]')
        }
        var medOldData = JSON.parse(localStorage.getItem('medData13'))
        medOldData.push(medNewData)
        localStorage.setItem('medData13', JSON.stringify(medOldData))
        let timeNewData = timeInput
        if (localStorage.getItem('timeData13')==null){
            localStorage.setItem('timeData13', '[]')
        }
        var timeOldData = JSON.parse(localStorage.getItem('timeData13'))
        timeOldData.push(timeNewData)
        localStorage.setItem('timeData13', JSON.stringify(timeOldData))
        localStorage.setItem('colorData13', JSON.stringify(colorOption))
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
function calendarDay14() {
    const calendarModal = document.getElementById('calendarModal')
    var btn = document.getElementById('calendarSaveBtn')
    btn.onclick = function (){
        var medSelect = document.getElementById('medicationList')
        var medOption = medSelect.options[medSelect.selectedIndex]

        var timeInput = document.getElementById('time-input').value

        var colorSelect = document.getElementById('colorList')
        var colorOption = colorSelect.options[colorSelect.selectedIndex].value
        console.log(colorOption)

        const calendar1 = document.getElementById('dayBlockFourteen')
        var medElement = document.createElement('p')
        var timeElement = document.createElement('p')
        calendar1.appendChild(medElement)
        calendar1.appendChild(timeElement)
        medElement.appendChild(medOption)
        timeElement.append(timeInput)
        let medNewData = medOption.value
        if (localStorage.getItem('medData14')==null){
            localStorage.setItem('medData14', '[]')
        }
        var medOldData = JSON.parse(localStorage.getItem('medData14'))
        medOldData.push(medNewData)
        localStorage.setItem('medData14', JSON.stringify(medOldData))
        let timeNewData = timeInput
        if (localStorage.getItem('timeData14')==null){
            localStorage.setItem('timeData14', '[]')
        }
        var timeOldData = JSON.parse(localStorage.getItem('timeData14'))
        timeOldData.push(timeNewData)
        localStorage.setItem('timeData14', JSON.stringify(timeOldData))
        localStorage.setItem('colorData14', JSON.stringify(colorOption))
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
function calendarDay15() {
    const calendarModal = document.getElementById('calendarModal')
    var btn = document.getElementById('calendarSaveBtn')
    btn.onclick = function (){
        var medSelect = document.getElementById('medicationList')
        var medOption = medSelect.options[medSelect.selectedIndex]

        var timeInput = document.getElementById('time-input').value

        var colorSelect = document.getElementById('colorList')
        var colorOption = colorSelect.options[colorSelect.selectedIndex].value
        console.log(colorOption)

        const calendar1 = document.getElementById('dayBlockFifteen')
        var medElement = document.createElement('p')
        var timeElement = document.createElement('p')
        calendar1.appendChild(medElement)
        calendar1.appendChild(timeElement)
        medElement.appendChild(medOption)
        timeElement.append(timeInput)
        let medNewData = medOption.value
        if (localStorage.getItem('medData15')==null){
            localStorage.setItem('medData15', '[]')
        }
        var medOldData = JSON.parse(localStorage.getItem('medData15'))
        medOldData.push(medNewData)
        localStorage.setItem('medData15', JSON.stringify(medOldData))
        let timeNewData = timeInput
        if (localStorage.getItem('timeData15')==null){
            localStorage.setItem('timeData15', '[]')
        }
        var timeOldData = JSON.parse(localStorage.getItem('timeData15'))
        timeOldData.push(timeNewData)
        localStorage.setItem('timeData15', JSON.stringify(timeOldData))
        localStorage.setItem('colorData15', JSON.stringify(colorOption))
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
function calendarDay16() {
    const calendarModal = document.getElementById('calendarModal')
    var btn = document.getElementById('calendarSaveBtn')
    btn.onclick = function (){
        var medSelect = document.getElementById('medicationList')
        var medOption = medSelect.options[medSelect.selectedIndex]

        var timeInput = document.getElementById('time-input').value

        var colorSelect = document.getElementById('colorList')
        var colorOption = colorSelect.options[colorSelect.selectedIndex].value
        console.log(colorOption)

        const calendar1 = document.getElementById('dayBlockSixteen')
        var medElement = document.createElement('p')
        var timeElement = document.createElement('p')
        calendar1.appendChild(medElement)
        calendar1.appendChild(timeElement)
        medElement.appendChild(medOption)
        timeElement.append(timeInput)
        let medNewData = medOption.value
        if (localStorage.getItem('medData16')==null){
            localStorage.setItem('medData16', '[]')
        }
        var medOldData = JSON.parse(localStorage.getItem('medData16'))
        medOldData.push(medNewData)
        localStorage.setItem('medData16', JSON.stringify(medOldData))
        let timeNewData = timeInput
        if (localStorage.getItem('timeData16')==null){
            localStorage.setItem('timeData16', '[]')
        }
        var timeOldData = JSON.parse(localStorage.getItem('timeData16'))
        timeOldData.push(timeNewData)
        localStorage.setItem('timeData16', JSON.stringify(timeOldData))
        localStorage.setItem('colorData16', JSON.stringify(colorOption))
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
function calendarDay17() {
    const calendarModal = document.getElementById('calendarModal')
    var btn = document.getElementById('calendarSaveBtn')
    btn.onclick = function (){
        var medSelect = document.getElementById('medicationList')
        var medOption = medSelect.options[medSelect.selectedIndex]

        var timeInput = document.getElementById('time-input').value

        var colorSelect = document.getElementById('colorList')
        var colorOption = colorSelect.options[colorSelect.selectedIndex].value
        console.log(colorOption)

        const calendar1 = document.getElementById('dayBlockSeventeen')
        var medElement = document.createElement('p')
        var timeElement = document.createElement('p')
        calendar1.appendChild(medElement)
        calendar1.appendChild(timeElement)
        medElement.appendChild(medOption)
        timeElement.append(timeInput)
        let medNewData = medOption.value
        if (localStorage.getItem('medData17')==null){
            localStorage.setItem('medData17', '[]')
        }
        var medOldData = JSON.parse(localStorage.getItem('medData17'))
        medOldData.push(medNewData)
        localStorage.setItem('medData17', JSON.stringify(medOldData))
        let timeNewData = timeInput
        if (localStorage.getItem('timeData17')==null){
            localStorage.setItem('timeData17', '[]')
        }
        var timeOldData = JSON.parse(localStorage.getItem('timeData17'))
        timeOldData.push(timeNewData)
        localStorage.setItem('timeData17', JSON.stringify(timeOldData))
        localStorage.setItem('colorData17', JSON.stringify(colorOption))
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
function calendarDay18() {
    const calendarModal = document.getElementById('calendarModal')
    var btn = document.getElementById('calendarSaveBtn')
    btn.onclick = function (){
        var medSelect = document.getElementById('medicationList')
        var medOption = medSelect.options[medSelect.selectedIndex]

        var timeInput = document.getElementById('time-input').value

        var colorSelect = document.getElementById('colorList')
        var colorOption = colorSelect.options[colorSelect.selectedIndex].value
        console.log(colorOption)

        const calendar1 = document.getElementById('dayBlockEighteen')
        var medElement = document.createElement('p')
        var timeElement = document.createElement('p')
        calendar1.appendChild(medElement)
        calendar1.appendChild(timeElement)
        medElement.appendChild(medOption)
        timeElement.append(timeInput)
        let medNewData = medOption.value
        if (localStorage.getItem('medData18')==null){
            localStorage.setItem('medData18', '[]')
        }
        var medOldData = JSON.parse(localStorage.getItem('medData18'))
        medOldData.push(medNewData)
        localStorage.setItem('medData18', JSON.stringify(medOldData))
        let timeNewData = timeInput
        if (localStorage.getItem('timeData18')==null){
            localStorage.setItem('timeData18', '[]')
        }
        var timeOldData = JSON.parse(localStorage.getItem('timeData18'))
        timeOldData.push(timeNewData)
        localStorage.setItem('timeData18', JSON.stringify(timeOldData))
        localStorage.setItem('colorData18', JSON.stringify(colorOption))
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
function calendarDay19() {
    const calendarModal = document.getElementById('calendarModal')
    var btn = document.getElementById('calendarSaveBtn')
    btn.onclick = function (){
        var medSelect = document.getElementById('medicationList')
        var medOption = medSelect.options[medSelect.selectedIndex]

        var timeInput = document.getElementById('time-input').value

        var colorSelect = document.getElementById('colorList')
        var colorOption = colorSelect.options[colorSelect.selectedIndex].value
        console.log(colorOption)

        const calendar1 = document.getElementById('dayBlockNineteen')
        var medElement = document.createElement('p')
        var timeElement = document.createElement('p')
        calendar1.appendChild(medElement)
        calendar1.appendChild(timeElement)
        medElement.appendChild(medOption)
        timeElement.append(timeInput)
        let medNewData = medOption.value
        if (localStorage.getItem('medData19')==null){
            localStorage.setItem('medData19', '[]')
        }
        var medOldData = JSON.parse(localStorage.getItem('medData19'))
        medOldData.push(medNewData)
        localStorage.setItem('medData19', JSON.stringify(medOldData))
        let timeNewData = timeInput
        if (localStorage.getItem('timeData19')==null){
            localStorage.setItem('timeData19', '[]')
        }
        var timeOldData = JSON.parse(localStorage.getItem('timeData19'))
        timeOldData.push(timeNewData)
        localStorage.setItem('timeData19', JSON.stringify(timeOldData))
        localStorage.setItem('colorData19', JSON.stringify(colorOption))
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
function calendarDay20() {
    const calendarModal = document.getElementById('calendarModal')
    var btn = document.getElementById('calendarSaveBtn')
    btn.onclick = function (){
        var medSelect = document.getElementById('medicationList')
        var medOption = medSelect.options[medSelect.selectedIndex]

        var timeInput = document.getElementById('time-input').value

        var colorSelect = document.getElementById('colorList')
        var colorOption = colorSelect.options[colorSelect.selectedIndex].value
        console.log(colorOption)

        const calendar1 = document.getElementById('dayBlockTwenty')
        var medElement = document.createElement('p')
        var timeElement = document.createElement('p')
        calendar1.appendChild(medElement)
        calendar1.appendChild(timeElement)
        medElement.appendChild(medOption)
        timeElement.append(timeInput)
        let medNewData = medOption.value
        if (localStorage.getItem('medData20')==null){
            localStorage.setItem('medData20', '[]')
        }
        var medOldData = JSON.parse(localStorage.getItem('medData20'))
        medOldData.push(medNewData)
        localStorage.setItem('medData20', JSON.stringify(medOldData))
        let timeNewData = timeInput
        if (localStorage.getItem('timeData20')==null){
            localStorage.setItem('timeData20', '[]')
        }
        var timeOldData = JSON.parse(localStorage.getItem('timeData20'))
        timeOldData.push(timeNewData)
        localStorage.setItem('timeData20', JSON.stringify(timeOldData))
        localStorage.setItem('colorData20', JSON.stringify(colorOption))
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
function calendarDay21() {
    const calendarModal = document.getElementById('calendarModal')
    var btn = document.getElementById('calendarSaveBtn')
    btn.onclick = function (){
        var medSelect = document.getElementById('medicationList')
        var medOption = medSelect.options[medSelect.selectedIndex]

        var timeInput = document.getElementById('time-input').value

        var colorSelect = document.getElementById('colorList')
        var colorOption = colorSelect.options[colorSelect.selectedIndex].value
        console.log(colorOption)

        const calendar1 = document.getElementById('dayBlockTwentyOne')
        var medElement = document.createElement('p')
        var timeElement = document.createElement('p')
        calendar1.appendChild(medElement)
        calendar1.appendChild(timeElement)
        medElement.appendChild(medOption)
        timeElement.append(timeInput)
        let medNewData = medOption.value
        if (localStorage.getItem('medData21')==null){
            localStorage.setItem('medData21', '[]')
        }
        var medOldData = JSON.parse(localStorage.getItem('medData21'))
        medOldData.push(medNewData)
        localStorage.setItem('medData21', JSON.stringify(medOldData))
        let timeNewData = timeInput
        if (localStorage.getItem('timeData21')==null){
            localStorage.setItem('timeData21', '[]')
        }
        var timeOldData = JSON.parse(localStorage.getItem('timeData21'))
        timeOldData.push(timeNewData)
        localStorage.setItem('timeData21', JSON.stringify(timeOldData))
        localStorage.setItem('colorData21', JSON.stringify(colorOption))
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
function calendarDay22() {
    const calendarModal = document.getElementById('calendarModal')
    var btn = document.getElementById('calendarSaveBtn')
    btn.onclick = function (){
        var medSelect = document.getElementById('medicationList')
        var medOption = medSelect.options[medSelect.selectedIndex]

        var timeInput = document.getElementById('time-input').value

        var colorSelect = document.getElementById('colorList')
        var colorOption = colorSelect.options[colorSelect.selectedIndex].value
        console.log(colorOption)

        const calendar1 = document.getElementById('dayBlockTwentyTwo')
        var medElement = document.createElement('p')
        var timeElement = document.createElement('p')
        calendar1.appendChild(medElement)
        calendar1.appendChild(timeElement)
        medElement.appendChild(medOption)
        timeElement.append(timeInput)
        let medNewData = medOption.value
        if (localStorage.getItem('medData22')==null){
            localStorage.setItem('medData22', '[]')
        }
        var medOldData = JSON.parse(localStorage.getItem('medData22'))
        medOldData.push(medNewData)
        localStorage.setItem('medData22', JSON.stringify(medOldData))
        let timeNewData = timeInput
        if (localStorage.getItem('timeData22')==null){
            localStorage.setItem('timeData22', '[]')
        }
        var timeOldData = JSON.parse(localStorage.getItem('timeData22'))
        timeOldData.push(timeNewData)
        localStorage.setItem('timeData22', JSON.stringify(timeOldData))
        localStorage.setItem('colorData22', JSON.stringify(colorOption))
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
function calendarDay23() {
    const calendarModal = document.getElementById('calendarModal')
    var btn = document.getElementById('calendarSaveBtn')
    btn.onclick = function (){
        var medSelect = document.getElementById('medicationList')
        var medOption = medSelect.options[medSelect.selectedIndex]

        var timeInput = document.getElementById('time-input').value

        var colorSelect = document.getElementById('colorList')
        var colorOption = colorSelect.options[colorSelect.selectedIndex].value
        console.log(colorOption)

        const calendar1 = document.getElementById('dayBlockTwentyThree')
        var medElement = document.createElement('p')
        var timeElement = document.createElement('p')
        calendar1.appendChild(medElement)
        calendar1.appendChild(timeElement)
        medElement.appendChild(medOption)
        timeElement.append(timeInput)
        let medNewData = medOption.value
        if (localStorage.getItem('medData23')==null){
            localStorage.setItem('medData23', '[]')
        }
        var medOldData = JSON.parse(localStorage.getItem('medData23'))
        medOldData.push(medNewData)
        localStorage.setItem('medData23', JSON.stringify(medOldData))
        let timeNewData = timeInput
        if (localStorage.getItem('timeData23')==null){
            localStorage.setItem('timeData23', '[]')
        }
        var timeOldData = JSON.parse(localStorage.getItem('timeData23'))
        timeOldData.push(timeNewData)
        localStorage.setItem('timeData23', JSON.stringify(timeOldData))
        localStorage.setItem('colorData23', JSON.stringify(colorOption))
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
function calendarDay24() {
    const calendarModal = document.getElementById('calendarModal')
    var btn = document.getElementById('calendarSaveBtn')
    btn.onclick = function (){
        var medSelect = document.getElementById('medicationList')
        var medOption = medSelect.options[medSelect.selectedIndex]

        var timeInput = document.getElementById('time-input').value

        var colorSelect = document.getElementById('colorList')
        var colorOption = colorSelect.options[colorSelect.selectedIndex].value
        console.log(colorOption)

        const calendar1 = document.getElementById('dayBlockTwentyFour')
        var medElement = document.createElement('p')
        var timeElement = document.createElement('p')
        calendar1.appendChild(medElement)
        calendar1.appendChild(timeElement)
        medElement.appendChild(medOption)
        timeElement.append(timeInput)
        let medNewData = medOption.value
        if (localStorage.getItem('medData24')==null){
            localStorage.setItem('medData24', '[]')
        }
        var medOldData = JSON.parse(localStorage.getItem('medData24'))
        medOldData.push(medNewData)
        localStorage.setItem('medData24', JSON.stringify(medOldData))
        let timeNewData = timeInput
        if (localStorage.getItem('timeData24')==null){
            localStorage.setItem('timeData24', '[]')
        }
        var timeOldData = JSON.parse(localStorage.getItem('timeData24'))
        timeOldData.push(timeNewData)
        localStorage.setItem('timeData24', JSON.stringify(timeOldData))
        localStorage.setItem('colorData24', JSON.stringify(colorOption))
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
function calendarDay25() {
    const calendarModal = document.getElementById('calendarModal')
    var btn = document.getElementById('calendarSaveBtn')
    btn.onclick = function (){
        var medSelect = document.getElementById('medicationList')
        var medOption = medSelect.options[medSelect.selectedIndex]

        var timeInput = document.getElementById('time-input').value

        var colorSelect = document.getElementById('colorList')
        var colorOption = colorSelect.options[colorSelect.selectedIndex].value
        console.log(colorOption)

        const calendar1 = document.getElementById('dayBlockTwentyFive')
        var medElement = document.createElement('p')
        var timeElement = document.createElement('p')
        calendar1.appendChild(medElement)
        calendar1.appendChild(timeElement)
        medElement.appendChild(medOption)
        timeElement.append(timeInput)
        let medNewData = medOption.value
        if (localStorage.getItem('medData25')==null){
            localStorage.setItem('medData25', '[]')
        }
        var medOldData = JSON.parse(localStorage.getItem('medData25'))
        medOldData.push(medNewData)
        localStorage.setItem('medData25', JSON.stringify(medOldData))
        let timeNewData = timeInput
        if (localStorage.getItem('timeData25')==null){
            localStorage.setItem('timeData25', '[]')
        }
        var timeOldData = JSON.parse(localStorage.getItem('timeData25'))
        timeOldData.push(timeNewData)
        localStorage.setItem('timeData25', JSON.stringify(timeOldData))
        localStorage.setItem('colorData25', JSON.stringify(colorOption))
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
function calendarDay26() {
    const calendarModal = document.getElementById('calendarModal')
    var btn = document.getElementById('calendarSaveBtn')
    btn.onclick = function (){
        var medSelect = document.getElementById('medicationList')
        var medOption = medSelect.options[medSelect.selectedIndex]

        var timeInput = document.getElementById('time-input').value

        var colorSelect = document.getElementById('colorList')
        var colorOption = colorSelect.options[colorSelect.selectedIndex].value
        console.log(colorOption)

        const calendar1 = document.getElementById('dayBlockTwentySix')
        var medElement = document.createElement('p')
        var timeElement = document.createElement('p')
        calendar1.appendChild(medElement)
        calendar1.appendChild(timeElement)
        medElement.appendChild(medOption)
        timeElement.append(timeInput)
        let medNewData = medOption.value
        if (localStorage.getItem('medData26')==null){
            localStorage.setItem('medData26', '[]')
        }
        var medOldData = JSON.parse(localStorage.getItem('medData26'))
        medOldData.push(medNewData)
        localStorage.setItem('medData26', JSON.stringify(medOldData))
        let timeNewData = timeInput
        if (localStorage.getItem('timeData26')==null){
            localStorage.setItem('timeData26', '[]')
        }
        var timeOldData = JSON.parse(localStorage.getItem('timeData26'))
        timeOldData.push(timeNewData)
        localStorage.setItem('timeData26', JSON.stringify(timeOldData))
        localStorage.setItem('colorData26', JSON.stringify(colorOption))
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
function calendarDay27() {
    const calendarModal = document.getElementById('calendarModal')
    var btn = document.getElementById('calendarSaveBtn')
    btn.onclick = function (){
        var medSelect = document.getElementById('medicationList')
        var medOption = medSelect.options[medSelect.selectedIndex]

        var timeInput = document.getElementById('time-input').value

        var colorSelect = document.getElementById('colorList')
        var colorOption = colorSelect.options[colorSelect.selectedIndex].value
        console.log(colorOption)

        const calendar1 = document.getElementById('dayBlockTwentySeven')
        var medElement = document.createElement('p')
        var timeElement = document.createElement('p')
        calendar1.appendChild(medElement)
        calendar1.appendChild(timeElement)
        medElement.appendChild(medOption)
        timeElement.append(timeInput)
        let medNewData = medOption.value
        if (localStorage.getItem('medData27')==null){
            localStorage.setItem('medData27', '[]')
        }
        var medOldData = JSON.parse(localStorage.getItem('medData27'))
        medOldData.push(medNewData)
        localStorage.setItem('medData27', JSON.stringify(medOldData))
        let timeNewData = timeInput
        if (localStorage.getItem('timeData27')==null){
            localStorage.setItem('timeData27', '[]')
        }
        var timeOldData = JSON.parse(localStorage.getItem('timeData27'))
        timeOldData.push(timeNewData)
        localStorage.setItem('timeData27', JSON.stringify(timeOldData))
        localStorage.setItem('colorData27', JSON.stringify(colorOption))
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
function calendarDay28() {
    const calendarModal = document.getElementById('calendarModal')
    var btn = document.getElementById('calendarSaveBtn')
    btn.onclick = function (){
        var medSelect = document.getElementById('medicationList')
        var medOption = medSelect.options[medSelect.selectedIndex]

        var timeInput = document.getElementById('time-input').value

        var colorSelect = document.getElementById('colorList')
        var colorOption = colorSelect.options[colorSelect.selectedIndex].value
        console.log(colorOption)

        const calendar1 = document.getElementById('dayBlockTwentyEight')
        var medElement = document.createElement('p')
        var timeElement = document.createElement('p')
        calendar1.appendChild(medElement)
        calendar1.appendChild(timeElement)
        medElement.appendChild(medOption)
        timeElement.append(timeInput)
        let medNewData = medOption.value
        if (localStorage.getItem('medData28')==null){
            localStorage.setItem('medData28', '[]')
        }
        var medOldData = JSON.parse(localStorage.getItem('medData28'))
        medOldData.push(medNewData)
        localStorage.setItem('medData28', JSON.stringify(medOldData))
        let timeNewData = timeInput
        if (localStorage.getItem('timeData28')==null){
            localStorage.setItem('timeData28', '[]')
        }
        var timeOldData = JSON.parse(localStorage.getItem('timeData28'))
        timeOldData.push(timeNewData)
        localStorage.setItem('timeData28', JSON.stringify(timeOldData))
        localStorage.setItem('colorData28', JSON.stringify(colorOption))
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
function calendarDay29() {
    const calendarModal = document.getElementById('calendarModal')
    var btn = document.getElementById('calendarSaveBtn')
    btn.onclick = function (){
        var medSelect = document.getElementById('medicationList')
        var medOption = medSelect.options[medSelect.selectedIndex]

        var timeInput = document.getElementById('time-input').value

        var colorSelect = document.getElementById('colorList')
        var colorOption = colorSelect.options[colorSelect.selectedIndex].value
        console.log(colorOption)

        const calendar1 = document.getElementById('dayBlockTwentyNine')
        var medElement = document.createElement('p')
        var timeElement = document.createElement('p')
        calendar1.appendChild(medElement)
        calendar1.appendChild(timeElement)
        medElement.appendChild(medOption)
        timeElement.append(timeInput)
        let medNewData = medOption.value
        if (localStorage.getItem('medData29')==null){
            localStorage.setItem('medData29', '[]')
        }
        var medOldData = JSON.parse(localStorage.getItem('medData29'))
        medOldData.push(medNewData)
        localStorage.setItem('medData29', JSON.stringify(medOldData))
        let timeNewData = timeInput
        if (localStorage.getItem('timeData29')==null){
            localStorage.setItem('timeData29', '[]')
        }
        var timeOldData = JSON.parse(localStorage.getItem('timeData29'))
        timeOldData.push(timeNewData)
        localStorage.setItem('timeData29', JSON.stringify(timeOldData))
        localStorage.setItem('colorData29', JSON.stringify(colorOption))
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
function calendarDay30() {
    const calendarModal = document.getElementById('calendarModal')
    var btn = document.getElementById('calendarSaveBtn')
    btn.onclick = function (){
        var medSelect = document.getElementById('medicationList')
        var medOption = medSelect.options[medSelect.selectedIndex]

        var timeInput = document.getElementById('time-input').value

        var colorSelect = document.getElementById('colorList')
        var colorOption = colorSelect.options[colorSelect.selectedIndex].value
        console.log(colorOption)

        const calendar1 = document.getElementById('dayBlockThirty')
        var medElement = document.createElement('p')
        var timeElement = document.createElement('p')
        calendar1.appendChild(medElement)
        calendar1.appendChild(timeElement)
        medElement.appendChild(medOption)
        timeElement.append(timeInput)
        let medNewData = medOption.value
        if (localStorage.getItem('medData30')==null){
            localStorage.setItem('medData30', '[]')
        }
        var medOldData = JSON.parse(localStorage.getItem('medData30'))
        medOldData.push(medNewData)
        localStorage.setItem('medData30', JSON.stringify(medOldData))
        let timeNewData = timeInput
        if (localStorage.getItem('timeData30')==null){
            localStorage.setItem('timeData30', '[]')
        }
        var timeOldData = JSON.parse(localStorage.getItem('timeData30'))
        timeOldData.push(timeNewData)
        localStorage.setItem('timeData30', JSON.stringify(timeOldData))
        localStorage.setItem('colorData30', JSON.stringify(colorOption))
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
function calendarDay31() {
    const calendarModal = document.getElementById('calendarModal')
    var btn = document.getElementById('calendarSaveBtn')
    btn.onclick = function (){
        var medSelect = document.getElementById('medicationList')
        var medOption = medSelect.options[medSelect.selectedIndex]

        var timeInput = document.getElementById('time-input').value

        var colorSelect = document.getElementById('colorList')
        var colorOption = colorSelect.options[colorSelect.selectedIndex].value
        console.log(colorOption)

        const calendar1 = document.getElementById('dayBlockThirtyOne')
        var medElement = document.createElement('p')
        var timeElement = document.createElement('p')
        calendar1.appendChild(medElement)
        calendar1.appendChild(timeElement)
        medElement.appendChild(medOption)
        timeElement.append(timeInput)
        let medNewData = medOption.value
        if (localStorage.getItem('medData31')==null){
            localStorage.setItem('medData31', '[]')
        }
        var medOldData = JSON.parse(localStorage.getItem('medData31'))
        medOldData.push(medNewData)
        localStorage.setItem('medData31', JSON.stringify(medOldData))
        let timeNewData = timeInput
        if (localStorage.getItem('timeData31')==null){
            localStorage.setItem('timeData31', '[]')
        }
        var timeOldData = JSON.parse(localStorage.getItem('timeData31'))
        timeOldData.push(timeNewData)
        localStorage.setItem('timeData31', JSON.stringify(timeOldData))
        localStorage.setItem('colorData31', JSON.stringify(colorOption))
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
function calendarDay32(){
    const calendarModal = document.getElementById('calendarModal')
    var btn = document.getElementById('calendarSaveBtn')
    btn.onclick = function (){
        var medSelect = document.getElementById('medicationList')
        var medOption = medSelect.options[medSelect.selectedIndex]

        var timeInput = document.getElementById('time-input').value

        var colorSelect = document.getElementById('colorList')
        var colorOption = colorSelect.options[colorSelect.selectedIndex].value
        console.log(colorOption)

        const calendar1 = document.getElementById('dayBlockThirtyTwo')
        var medElement = document.createElement('p')
        var timeElement = document.createElement('p')
        calendar1.appendChild(medElement)
        calendar1.appendChild(timeElement)
        medElement.appendChild(medOption)
        timeElement.append(timeInput)
        let medNewData = medOption.value
        if (localStorage.getItem('medData32')==null){
            localStorage.setItem('medData32', '[]')
        }
        var medOldData = JSON.parse(localStorage.getItem('medData32'))
        medOldData.push(medNewData)
        localStorage.setItem('medData32', JSON.stringify(medOldData))
        let timeNewData = timeInput
        if (localStorage.getItem('timeData32')==null){
            localStorage.setItem('timeData32', '[]')
        }
        var timeOldData = JSON.parse(localStorage.getItem('timeData32'))
        timeOldData.push(timeNewData)
        localStorage.setItem('timeData32', JSON.stringify(timeOldData))
        localStorage.setItem('colorData32', JSON.stringify(colorOption))
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
function calendarDay33() {
    const calendarModal = document.getElementById('calendarModal')
    var btn = document.getElementById('calendarSaveBtn')
    btn.onclick = function (){
        var medSelect = document.getElementById('medicationList')
        var medOption = medSelect.options[medSelect.selectedIndex]

        var timeInput = document.getElementById('time-input').value

        var colorSelect = document.getElementById('colorList')
        var colorOption = colorSelect.options[colorSelect.selectedIndex].value
        console.log(colorOption)

        const calendar1 = document.getElementById('dayBlockThirtyThree')
        var medElement = document.createElement('p')
        var timeElement = document.createElement('p')
        calendar1.appendChild(medElement)
        calendar1.appendChild(timeElement)
        medElement.appendChild(medOption)
        timeElement.append(timeInput)
        let medNewData = medOption.value
        if (localStorage.getItem('medData33')==null){
            localStorage.setItem('medData33', '[]')
        }
        var medOldData = JSON.parse(localStorage.getItem('medData33'))
        medOldData.push(medNewData)
        localStorage.setItem('medData33', JSON.stringify(medOldData))
        let timeNewData = timeInput
        if (localStorage.getItem('timeData33')==null){
            localStorage.setItem('timeData33', '[]')
        }
        var timeOldData = JSON.parse(localStorage.getItem('timeData33'))
        timeOldData.push(timeNewData)
        localStorage.setItem('timeData33', JSON.stringify(timeOldData))
        localStorage.setItem('colorData33', JSON.stringify(colorOption))
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
function calendarDay34() {
    const calendarModal = document.getElementById('calendarModal')
    var btn = document.getElementById('calendarSaveBtn')
    btn.onclick = function (){
        var medSelect = document.getElementById('medicationList')
        var medOption = medSelect.options[medSelect.selectedIndex]

        var timeInput = document.getElementById('time-input').value

        var colorSelect = document.getElementById('colorList')
        var colorOption = colorSelect.options[colorSelect.selectedIndex].value
        console.log(colorOption)

        const calendar1 = document.getElementById('dayBlockThirtyFour')
        var medElement = document.createElement('p')
        var timeElement = document.createElement('p')
        calendar1.appendChild(medElement)
        calendar1.appendChild(timeElement)
        medElement.appendChild(medOption)
        timeElement.append(timeInput)
        let medNewData = medOption.value
        if (localStorage.getItem('medData34')==null){
            localStorage.setItem('medData34', '[]')
        }
        var medOldData = JSON.parse(localStorage.getItem('medData34'))
        medOldData.push(medNewData)
        localStorage.setItem('medData34', JSON.stringify(medOldData))
        let timeNewData = timeInput
        if (localStorage.getItem('timeData34')==null){
            localStorage.setItem('timeData34', '[]')
        }
        var timeOldData = JSON.parse(localStorage.getItem('timeData34'))
        timeOldData.push(timeNewData)
        localStorage.setItem('timeData34', JSON.stringify(timeOldData))
        localStorage.setItem('colorData34', JSON.stringify(colorOption))
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
function calendarDay35() {
    const calendarModal = document.getElementById('calendarModal')
    var btn = document.getElementById('calendarSaveBtn')
    btn.onclick = function (){
        var medSelect = document.getElementById('medicationList')
        var medOption = medSelect.options[medSelect.selectedIndex]

        var timeInput = document.getElementById('time-input').value

        var colorSelect = document.getElementById('colorList')
        var colorOption = colorSelect.options[colorSelect.selectedIndex].value
        console.log(colorOption)

        const calendar1 = document.getElementById('dayBlockThirtyFive')
        var medElement = document.createElement('p')
        var timeElement = document.createElement('p')
        calendar1.appendChild(medElement)
        calendar1.appendChild(timeElement)
        medElement.appendChild(medOption)
        timeElement.append(timeInput)
        let medNewData = medOption.value
        if (localStorage.getItem('medData35')==null){
            localStorage.setItem('medData35', '[]')
        }
        var medOldData = JSON.parse(localStorage.getItem('medData35'))
        medOldData.push(medNewData)
        localStorage.setItem('medData35', JSON.stringify(medOldData))
        let timeNewData = timeInput
        if (localStorage.getItem('timeData35')==null){
            localStorage.setItem('timeData35', '[]')
        }
        var timeOldData = JSON.parse(localStorage.getItem('timeData35'))
        timeOldData.push(timeNewData)
        localStorage.setItem('timeData35', JSON.stringify(timeOldData))
        localStorage.setItem('colorData35', JSON.stringify(colorOption))
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
    if (localStorage.getItem('medData1')==null) {
        console.log('Nothing in Local Storage')
        return
    } else {
    const calendar1 = document.getElementById('dayBlockOne')
    var medElement = document.createElement('p')
    var timeElement = document.createElement('p')
    var medElementData =  JSON.parse(localStorage.getItem('medData1'))
    var timeElementData = JSON.parse(localStorage.getItem('timeData1'))
    var colorOption = JSON.parse(localStorage.getItem('colorData1'))
    medElement.innerText = medElementData
    timeElement.innerText = timeElementData
    calendar1.append(medElement)
    calendar1.append(timeElement)
    if (colorOption == 'red') {
        medElement.style = 'background-color:var(--red); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--red); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'orange') {
        medElement.style = 'background-color:var(--orange); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--orange); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'yellow') {
        medElement.style = 'background-color:var(--yellow); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--yellow); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'green') {
        medElement.style = 'background-color:var(--green); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--green); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'blue') {
        medElement.style = 'background-color:var(--blue); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--blue); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'purple') {
        medElement.style = 'background-color:var(--purple); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--purple); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    }
    }
}
saveCalMed1()

function saveCalMed2() {
    if (localStorage.getItem('medData2')==null) {
        console.log('Nothing in Local Storage')
        return
    } else {
    const calendar = document.getElementById('dayBlockTwo')
    var medElement = document.createElement('p')
    var timeElement = document.createElement('p')
    var medElementData =  JSON.parse(localStorage.getItem('medData2'))
    var timeElementData = JSON.parse(localStorage.getItem('timeData2'))
    var colorOption = JSON.parse(localStorage.getItem('colorData2'))
    medElement.innerText = medElementData
    timeElement.innerText = timeElementData
    calendar.append(medElement)
    calendar.append(timeElement)
    if (colorOption == 'red') {
        medElement.style = 'background-color:var(--red); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--red); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'orange') {
        medElement.style = 'background-color:var(--orange); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--orange); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'yellow') {
        medElement.style = 'background-color:var(--yellow); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--yellow); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'green') {
        medElement.style = 'background-color:var(--green); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--green); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'blue') {
        medElement.style = 'background-color:var(--blue); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--blue); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'purple') {
        medElement.style = 'background-color:var(--purple); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--purple); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    }
    }
}
saveCalMed2()

function saveCalMed3() {
    if (localStorage.getItem('medData3')==null) {
        console.log('Nothing in Local Storage')
        return
    } else {
    const calendar = document.getElementById('dayBlockThree')
    var medElement = document.createElement('p')
    var timeElement = document.createElement('p')
    var medElementData =  JSON.parse(localStorage.getItem('medData3'))
    var timeElementData = JSON.parse(localStorage.getItem('timeData3'))
    var colorOption = JSON.parse(localStorage.getItem('colorData3'))
    medElement.innerText = medElementData
    timeElement.innerText = timeElementData
    calendar.append(medElement)
    calendar.append(timeElement)
    if (colorOption == 'red') {
        medElement.style = 'background-color:var(--red); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--red); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'orange') {
        medElement.style = 'background-color:var(--orange); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--orange); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'yellow') {
        medElement.style = 'background-color:var(--yellow); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--yellow); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'green') {
        medElement.style = 'background-color:var(--green); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--green); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'blue') {
        medElement.style = 'background-color:var(--blue); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--blue); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'purple') {
        medElement.style = 'background-color:var(--purple); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--purple); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    }
    }
}
saveCalMed3()

function saveCalMed4() {
    if (localStorage.getItem('medData4')==null) {
        console.log('Nothing in Local Storage')
        return
    } else {
    const calendar = document.getElementById('dayBlockFour')
    var medElement = document.createElement('p')
    var timeElement = document.createElement('p')
    var medElementData =  JSON.parse(localStorage.getItem('medData4'))
    var timeElementData = JSON.parse(localStorage.getItem('timeData4'))
    var colorOption = JSON.parse(localStorage.getItem('colorData4'))
    medElement.innerText = medElementData
    timeElement.innerText = timeElementData
    calendar.append(medElement)
    calendar.append(timeElement)
    if (colorOption == 'red') {
        medElement.style = 'background-color:var(--red); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--red); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'orange') {
        medElement.style = 'background-color:var(--orange); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--orange); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'yellow') {
        medElement.style = 'background-color:var(--yellow); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--yellow); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'green') {
        medElement.style = 'background-color:var(--green); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--green); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'blue') {
        medElement.style = 'background-color:var(--blue); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--blue); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'purple') {
        medElement.style = 'background-color:var(--purple); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--purple); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    }
    }
}
saveCalMed4()

function saveCalMed5() {
    if (localStorage.getItem('medData5')==null) {
        console.log('Nothing in Local Storage')
        return
    } else {
    const calendar = document.getElementById('dayBlockTwo')
    var medElement = document.createElement('p')
    var timeElement = document.createElement('p')
    var medElementData =  JSON.parse(localStorage.getItem('medData5'))
    var timeElementData = JSON.parse(localStorage.getItem('timeData5'))
    var colorOption = JSON.parse(localStorage.getItem('colorData5'))
    medElement.innerText = medElementData
    timeElement.innerText = timeElementData
    calendar.append(medElement)
    calendar.append(timeElement)
    if (colorOption == 'red') {
        medElement.style = 'background-color:var(--red); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--red); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'orange') {
        medElement.style = 'background-color:var(--orange); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--orange); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'yellow') {
        medElement.style = 'background-color:var(--yellow); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--yellow); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'green') {
        medElement.style = 'background-color:var(--green); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--green); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'blue') {
        medElement.style = 'background-color:var(--blue); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--blue); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'purple') {
        medElement.style = 'background-color:var(--purple); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--purple); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    }
    }
}
saveCalMed5()

function saveCalMed6() {
    if (localStorage.getItem('medData6')==null) {
        console.log('Nothing in Local Storage')
        return
    } else {
    const calendar = document.getElementById('dayBlockSix')
    var medElement = document.createElement('p')
    var timeElement = document.createElement('p')
    var medElementData =  JSON.parse(localStorage.getItem('medData6'))
    var timeElementData = JSON.parse(localStorage.getItem('timeData6'))
    var colorOption = JSON.parse(localStorage.getItem('colorData6'))
    medElement.innerText = medElementData
    timeElement.innerText = timeElementData
    calendar.append(medElement)
    calendar.append(timeElement)
    if (colorOption == 'red') {
        medElement.style = 'background-color:var(--red); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--red); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'orange') {
        medElement.style = 'background-color:var(--orange); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--orange); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'yellow') {
        medElement.style = 'background-color:var(--yellow); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--yellow); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'green') {
        medElement.style = 'background-color:var(--green); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--green); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'blue') {
        medElement.style = 'background-color:var(--blue); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--blue); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'purple') {
        medElement.style = 'background-color:var(--purple); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--purple); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    }
    }
}
saveCalMed6()

function saveCalMed7() {
    if (localStorage.getItem('medData7')==null) {
        console.log('Nothing in Local Storage')
        return
    } else {
    const calendar = document.getElementById('dayBlockSeven')
    var medElement = document.createElement('p')
    var timeElement = document.createElement('p')
    var medElementData =  JSON.parse(localStorage.getItem('medData7'))
    var timeElementData = JSON.parse(localStorage.getItem('timeData7'))
    var colorOption = JSON.parse(localStorage.getItem('colorData7'))
    medElement.innerText = medElementData
    timeElement.innerText = timeElementData
    calendar.append(medElement)
    calendar.append(timeElement)
    if (colorOption == 'red') {
        medElement.style = 'background-color:var(--red); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--red); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'orange') {
        medElement.style = 'background-color:var(--orange); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--orange); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'yellow') {
        medElement.style = 'background-color:var(--yellow); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--yellow); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'green') {
        medElement.style = 'background-color:var(--green); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--green); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'blue') {
        medElement.style = 'background-color:var(--blue); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--blue); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'purple') {
        medElement.style = 'background-color:var(--purple); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--purple); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    }
    }
}
saveCalMed7()

function saveCalMed8() {
    if (localStorage.getItem('medData8')==null) {
        console.log('Nothing in Local Storage')
        return
    } else {
    const calendar = document.getElementById('dayBlockEight')
    var medElement = document.createElement('p')
    var timeElement = document.createElement('p')
    var medElementData =  JSON.parse(localStorage.getItem('medData8'))
    var timeElementData = JSON.parse(localStorage.getItem('timeData8'))
    var colorOption = JSON.parse(localStorage.getItem('colorData8'))
    medElement.innerText = medElementData
    timeElement.innerText = timeElementData
    calendar.append(medElement)
    calendar.append(timeElement)
    if (colorOption == 'red') {
        medElement.style = 'background-color:var(--red); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--red); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'orange') {
        medElement.style = 'background-color:var(--orange); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--orange); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'yellow') {
        medElement.style = 'background-color:var(--yellow); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--yellow); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'green') {
        medElement.style = 'background-color:var(--green); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--green); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'blue') {
        medElement.style = 'background-color:var(--blue); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--blue); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'purple') {
        medElement.style = 'background-color:var(--purple); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--purple); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    }
    }
}
saveCalMed8()

function saveCalMed9() {
    if (localStorage.getItem('medData9')==null) {
        console.log('Nothing in Local Storage')
        return
    } else {
    const calendar = document.getElementById('dayBlockNine')
    var medElement = document.createElement('p')
    var timeElement = document.createElement('p')
    var medElementData =  JSON.parse(localStorage.getItem('medData9'))
    var timeElementData = JSON.parse(localStorage.getItem('timeData9'))
    var colorOption = JSON.parse(localStorage.getItem('colorData9'))
    medElement.innerText = medElementData
    timeElement.innerText = timeElementData
    calendar.append(medElement)
    calendar.append(timeElement)
    if (colorOption == 'red') {
        medElement.style = 'background-color:var(--red); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--red); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'orange') {
        medElement.style = 'background-color:var(--orange); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--orange); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'yellow') {
        medElement.style = 'background-color:var(--yellow); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--yellow); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'green') {
        medElement.style = 'background-color:var(--green); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--green); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'blue') {
        medElement.style = 'background-color:var(--blue); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--blue); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'purple') {
        medElement.style = 'background-color:var(--purple); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--purple); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    }
    }
}
saveCalMed9()

function saveCalMed10() {
    if (localStorage.getItem('medData10')==null) {
        console.log('Nothing in Local Storage')
        return
    } else {
    const calendar = document.getElementById('dayBlockTen')
    var medElement = document.createElement('p')
    var timeElement = document.createElement('p')
    var medElementData =  JSON.parse(localStorage.getItem('medData10'))
    var timeElementData = JSON.parse(localStorage.getItem('timeData10'))
    var colorOption = JSON.parse(localStorage.getItem('colorData10'))
    medElement.innerText = medElementData
    timeElement.innerText = timeElementData
    calendar.append(medElement)
    calendar.append(timeElement)
    if (colorOption == 'red') {
        medElement.style = 'background-color:var(--red); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--red); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'orange') {
        medElement.style = 'background-color:var(--orange); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--orange); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'yellow') {
        medElement.style = 'background-color:var(--yellow); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--yellow); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'green') {
        medElement.style = 'background-color:var(--green); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--green); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'blue') {
        medElement.style = 'background-color:var(--blue); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--blue); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'purple') {
        medElement.style = 'background-color:var(--purple); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--purple); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    }
    }
}
saveCalMed10()

function saveCalMed11() {
    if (localStorage.getItem('medData11')==null) {
        console.log('Nothing in Local Storage')
        return
    } else {
    const calendar = document.getElementById('dayBlockEleven')
    var medElement = document.createElement('p')
    var timeElement = document.createElement('p')
    var medElementData =  JSON.parse(localStorage.getItem('medData11'))
    var timeElementData = JSON.parse(localStorage.getItem('timeData11'))
    var colorOption = JSON.parse(localStorage.getItem('colorData11'))
    medElement.innerText = medElementData
    timeElement.innerText = timeElementData
    calendar.append(medElement)
    calendar.append(timeElement)
    if (colorOption == 'red') {
        medElement.style = 'background-color:var(--red); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--red); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'orange') {
        medElement.style = 'background-color:var(--orange); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--orange); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'yellow') {
        medElement.style = 'background-color:var(--yellow); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--yellow); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'green') {
        medElement.style = 'background-color:var(--green); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--green); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'blue') {
        medElement.style = 'background-color:var(--blue); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--blue); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'purple') {
        medElement.style = 'background-color:var(--purple); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--purple); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    }
    }
}
saveCalMed11()

function saveCalMed12() {
    if (localStorage.getItem('medData12')==null) {
        console.log('Nothing in Local Storage')
        return
    } else {
    const calendar = document.getElementById('dayBlockTwelve')
    var medElement = document.createElement('p')
    var timeElement = document.createElement('p')
    var medElementData =  JSON.parse(localStorage.getItem('medData12'))
    var timeElementData = JSON.parse(localStorage.getItem('timeData12'))
    var colorOption = JSON.parse(localStorage.getItem('colorData12'))
    medElement.innerText = medElementData
    timeElement.innerText = timeElementData
    calendar.append(medElement)
    calendar.append(timeElement)
    if (colorOption == 'red') {
        medElement.style = 'background-color:var(--red); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--red); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'orange') {
        medElement.style = 'background-color:var(--orange); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--orange); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'yellow') {
        medElement.style = 'background-color:var(--yellow); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--yellow); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'green') {
        medElement.style = 'background-color:var(--green); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--green); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'blue') {
        medElement.style = 'background-color:var(--blue); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--blue); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'purple') {
        medElement.style = 'background-color:var(--purple); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--purple); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    }
    }
}
saveCalMed12()

function saveCalMed13() {
    if (localStorage.getItem('medData13')==null) {
        console.log('Nothing in Local Storage')
        return
    } else {
    const calendar = document.getElementById('dayBlockThirteen')
    var medElement = document.createElement('p')
    var timeElement = document.createElement('p')
    var medElementData =  JSON.parse(localStorage.getItem('medData13'))
    var timeElementData = JSON.parse(localStorage.getItem('timeData13'))
    var colorOption = JSON.parse(localStorage.getItem('colorData13'))
    medElement.innerText = medElementData
    timeElement.innerText = timeElementData
    calendar.append(medElement)
    calendar.append(timeElement)
    if (colorOption == 'red') {
        medElement.style = 'background-color:var(--red); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--red); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'orange') {
        medElement.style = 'background-color:var(--orange); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--orange); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'yellow') {
        medElement.style = 'background-color:var(--yellow); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--yellow); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'green') {
        medElement.style = 'background-color:var(--green); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--green); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'blue') {
        medElement.style = 'background-color:var(--blue); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--blue); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'purple') {
        medElement.style = 'background-color:var(--purple); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--purple); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    }
    }
}
saveCalMed13()

function saveCalMed14() {
    if (localStorage.getItem('medData14')==null) {
        console.log('Nothing in Local Storage')
        return
    } else {
    const calendar = document.getElementById('dayBlockFourteen')
    var medElement = document.createElement('p')
    var timeElement = document.createElement('p')
    var medElementData =  JSON.parse(localStorage.getItem('medData14'))
    var timeElementData = JSON.parse(localStorage.getItem('timeData14'))
    var colorOption = JSON.parse(localStorage.getItem('colorData14'))
    medElement.innerText = medElementData
    timeElement.innerText = timeElementData
    calendar.append(medElement)
    calendar.append(timeElement)
    if (colorOption == 'red') {
        medElement.style = 'background-color:var(--red); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--red); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'orange') {
        medElement.style = 'background-color:var(--orange); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--orange); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'yellow') {
        medElement.style = 'background-color:var(--yellow); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--yellow); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'green') {
        medElement.style = 'background-color:var(--green); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--green); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'blue') {
        medElement.style = 'background-color:var(--blue); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--blue); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'purple') {
        medElement.style = 'background-color:var(--purple); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--purple); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    }
    }
}
saveCalMed14()

function saveCalMed15() {
    if (localStorage.getItem('medData15')==null) {
        console.log('Nothing in Local Storage')
        return
    } else {
    const calendar = document.getElementById('dayBlock15')
    var medElement = document.createElement('p')
    var timeElement = document.createElement('p')
    var medElementData =  JSON.parse(localStorage.getItem('medData15'))
    var timeElementData = JSON.parse(localStorage.getItem('timeData15'))
    var colorOption = JSON.parse(localStorage.getItem('colorData15'))
    medElement.innerText = medElementData
    timeElement.innerText = timeElementData
    calendar.append(medElement)
    calendar.append(timeElement)
    if (colorOption == 'red') {
        medElement.style = 'background-color:var(--red); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--red); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'orange') {
        medElement.style = 'background-color:var(--orange); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--orange); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'yellow') {
        medElement.style = 'background-color:var(--yellow); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--yellow); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'green') {
        medElement.style = 'background-color:var(--green); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--green); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'blue') {
        medElement.style = 'background-color:var(--blue); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--blue); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'purple') {
        medElement.style = 'background-color:var(--purple); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--purple); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    }
    }
}
saveCalMed15()

function saveCalMed16() {
    if (localStorage.getItem('medData16')==null) {
        console.log('Nothing in Local Storage')
        return
    } else {
    const calendar = document.getElementById('dayBlockSixteen')
    var medElement = document.createElement('p')
    var timeElement = document.createElement('p')
    var medElementData =  JSON.parse(localStorage.getItem('medData16'))
    var timeElementData = JSON.parse(localStorage.getItem('timeData16'))
    var colorOption = JSON.parse(localStorage.getItem('colorData16'))
    medElement.innerText = medElementData
    timeElement.innerText = timeElementData
    calendar.append(medElement)
    calendar.append(timeElement)
    if (colorOption == 'red') {
        medElement.style = 'background-color:var(--red); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--red); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'orange') {
        medElement.style = 'background-color:var(--orange); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--orange); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'yellow') {
        medElement.style = 'background-color:var(--yellow); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--yellow); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'green') {
        medElement.style = 'background-color:var(--green); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--green); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'blue') {
        medElement.style = 'background-color:var(--blue); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--blue); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'purple') {
        medElement.style = 'background-color:var(--purple); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--purple); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    }
    }
}
saveCalMed16()

function saveCalMed17() {
    if (localStorage.getItem('medData17')==null) {
        console.log('Nothing in Local Storage')
        return
    } else {
    const calendar = document.getElementById('dayBlockSeventeen')
    var medElement = document.createElement('p')
    var timeElement = document.createElement('p')
    var medElementData =  JSON.parse(localStorage.getItem('medData17'))
    var timeElementData = JSON.parse(localStorage.getItem('timeData17'))
    var colorOption = JSON.parse(localStorage.getItem('colorData17'))
    medElement.innerText = medElementData
    timeElement.innerText = timeElementData
    calendar.append(medElement)
    calendar.append(timeElement)
    if (colorOption == 'red') {
        medElement.style = 'background-color:var(--red); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--red); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'orange') {
        medElement.style = 'background-color:var(--orange); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--orange); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'yellow') {
        medElement.style = 'background-color:var(--yellow); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--yellow); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'green') {
        medElement.style = 'background-color:var(--green); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--green); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'blue') {
        medElement.style = 'background-color:var(--blue); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--blue); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'purple') {
        medElement.style = 'background-color:var(--purple); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--purple); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    }
    }
}
saveCalMed17()

function saveCalMed18() {
    if (localStorage.getItem('medData18')==null) {
        console.log('Nothing in Local Storage')
        return
    } else {
    const calendar = document.getElementById('dayBlockEighteen')
    var medElement = document.createElement('p')
    var timeElement = document.createElement('p')
    var medElementData =  JSON.parse(localStorage.getItem('medData18'))
    var timeElementData = JSON.parse(localStorage.getItem('timeData18'))
    var colorOption = JSON.parse(localStorage.getItem('colorData18'))
    medElement.innerText = medElementData
    timeElement.innerText = timeElementData
    calendar.append(medElement)
    calendar.append(timeElement)
    if (colorOption == 'red') {
        medElement.style = 'background-color:var(--red); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--red); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'orange') {
        medElement.style = 'background-color:var(--orange); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--orange); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'yellow') {
        medElement.style = 'background-color:var(--yellow); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--yellow); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'green') {
        medElement.style = 'background-color:var(--green); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--green); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'blue') {
        medElement.style = 'background-color:var(--blue); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--blue); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'purple') {
        medElement.style = 'background-color:var(--purple); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--purple); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    }
    }
}
saveCalMed18()

function saveCalMed19() {
    if (localStorage.getItem('medData19')==null) {
        console.log('Nothing in Local Storage')
        return
    } else {
    const calendar = document.getElementById('dayBlockNineteen')
    var medElement = document.createElement('p')
    var timeElement = document.createElement('p')
    var medElementData =  JSON.parse(localStorage.getItem('medData19'))
    var timeElementData = JSON.parse(localStorage.getItem('timeData19'))
    var colorOption = JSON.parse(localStorage.getItem('colorData19'))
    medElement.innerText = medElementData
    timeElement.innerText = timeElementData
    calendar.append(medElement)
    calendar.append(timeElement)
    if (colorOption == 'red') {
        medElement.style = 'background-color:var(--red); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--red); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'orange') {
        medElement.style = 'background-color:var(--orange); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--orange); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'yellow') {
        medElement.style = 'background-color:var(--yellow); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--yellow); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'green') {
        medElement.style = 'background-color:var(--green); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--green); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'blue') {
        medElement.style = 'background-color:var(--blue); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--blue); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'purple') {
        medElement.style = 'background-color:var(--purple); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--purple); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    }
    }
}
saveCalMed19()

function saveCalMed20() {
    if (localStorage.getItem('medData20')==null) {
        console.log('Nothing in Local Storage')
        return
    } else {
    const calendar = document.getElementById('dayBlockTwenty')
    var medElement = document.createElement('p')
    var timeElement = document.createElement('p')
    var medElementData =  JSON.parse(localStorage.getItem('medData20'))
    var timeElementData = JSON.parse(localStorage.getItem('timeData20'))
    var colorOption = JSON.parse(localStorage.getItem('colorData20'))
    medElement.innerText = medElementData
    timeElement.innerText = timeElementData
    calendar.append(medElement)
    calendar.append(timeElement)
    if (colorOption == 'red') {
        medElement.style = 'background-color:var(--red); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--red); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'orange') {
        medElement.style = 'background-color:var(--orange); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--orange); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'yellow') {
        medElement.style = 'background-color:var(--yellow); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--yellow); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'green') {
        medElement.style = 'background-color:var(--green); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--green); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'blue') {
        medElement.style = 'background-color:var(--blue); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--blue); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'purple') {
        medElement.style = 'background-color:var(--purple); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--purple); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    }
    }
}
saveCalMed20()

function saveCalMed21() {
    if (localStorage.getItem('medData21')==null) {
        console.log('Nothing in Local Storage')
        return
    } else {
    const calendar = document.getElementById('dayBlockTwentyOne')
    var medElement = document.createElement('p')
    var timeElement = document.createElement('p')
    var medElementData =  JSON.parse(localStorage.getItem('medData21'))
    var timeElementData = JSON.parse(localStorage.getItem('timeData21'))
    var colorOption = JSON.parse(localStorage.getItem('colorData21'))
    medElement.innerText = medElementData
    timeElement.innerText = timeElementData
    calendar.append(medElement)
    calendar.append(timeElement)
    if (colorOption == 'red') {
        medElement.style = 'background-color:var(--red); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--red); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'orange') {
        medElement.style = 'background-color:var(--orange); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--orange); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'yellow') {
        medElement.style = 'background-color:var(--yellow); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--yellow); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'green') {
        medElement.style = 'background-color:var(--green); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--green); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'blue') {
        medElement.style = 'background-color:var(--blue); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--blue); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'purple') {
        medElement.style = 'background-color:var(--purple); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--purple); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    }
    }
}
saveCalMed21()

function saveCalMed22() {
    if (localStorage.getItem('medData22')==null) {
        console.log('Nothing in Local Storage')
        return
    } else {
    const calendar = document.getElementById('dayBlockTwentyTwo')
    var medElement = document.createElement('p')
    var timeElement = document.createElement('p')
    var medElementData =  JSON.parse(localStorage.getItem('medData22'))
    var timeElementData = JSON.parse(localStorage.getItem('timeData22'))
    var colorOption = JSON.parse(localStorage.getItem('colorData22'))
    medElement.innerText = medElementData
    timeElement.innerText = timeElementData
    calendar.append(medElement)
    calendar.append(timeElement)
    if (colorOption == 'red') {
        medElement.style = 'background-color:var(--red); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--red); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'orange') {
        medElement.style = 'background-color:var(--orange); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--orange); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'yellow') {
        medElement.style = 'background-color:var(--yellow); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--yellow); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'green') {
        medElement.style = 'background-color:var(--green); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--green); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'blue') {
        medElement.style = 'background-color:var(--blue); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--blue); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'purple') {
        medElement.style = 'background-color:var(--purple); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--purple); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    }
    }
}
saveCalMed22()

function saveCalMed23() {
    if (localStorage.getItem('medData23')==null) {
        console.log('Nothing in Local Storage')
        return
    } else {
    const calendar = document.getElementById('dayBlockTwentyThree')
    var medElement = document.createElement('p')
    var timeElement = document.createElement('p')
    var medElementData =  JSON.parse(localStorage.getItem('medData23'))
    var timeElementData = JSON.parse(localStorage.getItem('timeData23'))
    var colorOption = JSON.parse(localStorage.getItem('colorData23'))
    medElement.innerText = medElementData
    timeElement.innerText = timeElementData
    calendar.append(medElement)
    calendar.append(timeElement)
    if (colorOption == 'red') {
        medElement.style = 'background-color:var(--red); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--red); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'orange') {
        medElement.style = 'background-color:var(--orange); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--orange); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'yellow') {
        medElement.style = 'background-color:var(--yellow); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--yellow); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'green') {
        medElement.style = 'background-color:var(--green); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--green); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'blue') {
        medElement.style = 'background-color:var(--blue); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--blue); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'purple') {
        medElement.style = 'background-color:var(--purple); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--purple); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    }
    }
}
saveCalMed23()

function saveCalMed24() {
    if (localStorage.getItem('medData24')==null) {
        console.log('Nothing in Local Storage')
        return
    } else {
    const calendar = document.getElementById('dayBlockTwentyFour')
    var medElement = document.createElement('p')
    var timeElement = document.createElement('p')
    var medElementData =  JSON.parse(localStorage.getItem('medData24'))
    var timeElementData = JSON.parse(localStorage.getItem('timeData24'))
    var colorOption = JSON.parse(localStorage.getItem('colorData24'))
    medElement.innerText = medElementData
    timeElement.innerText = timeElementData
    calendar.append(medElement)
    calendar.append(timeElement)
    if (colorOption == 'red') {
        medElement.style = 'background-color:var(--red); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--red); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'orange') {
        medElement.style = 'background-color:var(--orange); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--orange); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'yellow') {
        medElement.style = 'background-color:var(--yellow); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--yellow); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'green') {
        medElement.style = 'background-color:var(--green); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--green); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'blue') {
        medElement.style = 'background-color:var(--blue); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--blue); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'purple') {
        medElement.style = 'background-color:var(--purple); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--purple); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    }
    }
}
saveCalMed24()

function saveCalMed25() {
    if (localStorage.getItem('medData25')==null) {
        console.log('Nothing in Local Storage')
        return
    } else {
    const calendar = document.getElementById('dayBlockTwentyFive')
    var medElement = document.createElement('p')
    var timeElement = document.createElement('p')
    var medElementData =  JSON.parse(localStorage.getItem('medData25'))
    var timeElementData = JSON.parse(localStorage.getItem('timeData25'))
    var colorOption = JSON.parse(localStorage.getItem('colorData25'))
    medElement.innerText = medElementData
    timeElement.innerText = timeElementData
    calendar.append(medElement)
    calendar.append(timeElement)
    if (colorOption == 'red') {
        medElement.style = 'background-color:var(--red); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--red); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'orange') {
        medElement.style = 'background-color:var(--orange); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--orange); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'yellow') {
        medElement.style = 'background-color:var(--yellow); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--yellow); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'green') {
        medElement.style = 'background-color:var(--green); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--green); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'blue') {
        medElement.style = 'background-color:var(--blue); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--blue); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'purple') {
        medElement.style = 'background-color:var(--purple); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--purple); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    }
    }
}
saveCalMed25()

function saveCalMed26() {
    if (localStorage.getItem('medData26')==null) {
        console.log('Nothing in Local Storage')
        return
    } else {
    const calendar = document.getElementById('dayBlockTwentySix')
    var medElement = document.createElement('p')
    var timeElement = document.createElement('p')
    var medElementData =  JSON.parse(localStorage.getItem('medData26'))
    var timeElementData = JSON.parse(localStorage.getItem('timeData26'))
    var colorOption = JSON.parse(localStorage.getItem('colorData26'))
    medElement.innerText = medElementData
    timeElement.innerText = timeElementData
    calendar.append(medElement)
    calendar.append(timeElement)
    if (colorOption == 'red') {
        medElement.style = 'background-color:var(--red); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--red); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'orange') {
        medElement.style = 'background-color:var(--orange); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--orange); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'yellow') {
        medElement.style = 'background-color:var(--yellow); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--yellow); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'green') {
        medElement.style = 'background-color:var(--green); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--green); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'blue') {
        medElement.style = 'background-color:var(--blue); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--blue); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'purple') {
        medElement.style = 'background-color:var(--purple); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--purple); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    }
    }
}
saveCalMed26()

function saveCalMed27() {
    if (localStorage.getItem('medData27')==null) {
        console.log('Nothing in Local Storage')
        return
    } else {
    const calendar = document.getElementById('dayBlockTwentySeven')
    var medElement = document.createElement('p')
    var timeElement = document.createElement('p')
    var medElementData =  JSON.parse(localStorage.getItem('medData27'))
    var timeElementData = JSON.parse(localStorage.getItem('timeData27'))
    var colorOption = JSON.parse(localStorage.getItem('colorData27'))
    medElement.innerText = medElementData
    timeElement.innerText = timeElementData
    calendar.append(medElement)
    calendar.append(timeElement)
    if (colorOption == 'red') {
        medElement.style = 'background-color:var(--red); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--red); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'orange') {
        medElement.style = 'background-color:var(--orange); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--orange); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'yellow') {
        medElement.style = 'background-color:var(--yellow); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--yellow); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'green') {
        medElement.style = 'background-color:var(--green); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--green); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'blue') {
        medElement.style = 'background-color:var(--blue); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--blue); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'purple') {
        medElement.style = 'background-color:var(--purple); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--purple); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    }
    }
}
saveCalMed27()

function saveCalMed28() {
    if (localStorage.getItem('medData28')==null) {
        console.log('Nothing in Local Storage')
        return
    } else {
    const calendar = document.getElementById('dayBlockTwentyEight')
    var medElement = document.createElement('p')
    var timeElement = document.createElement('p')
    var medElementData =  JSON.parse(localStorage.getItem('medData28'))
    var timeElementData = JSON.parse(localStorage.getItem('timeData28'))
    var colorOption = JSON.parse(localStorage.getItem('colorData28'))
    medElement.innerText = medElementData
    timeElement.innerText = timeElementData
    calendar.append(medElement)
    calendar.append(timeElement)
    if (colorOption == 'red') {
        medElement.style = 'background-color:var(--red); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--red); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'orange') {
        medElement.style = 'background-color:var(--orange); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--orange); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'yellow') {
        medElement.style = 'background-color:var(--yellow); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--yellow); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'green') {
        medElement.style = 'background-color:var(--green); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--green); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'blue') {
        medElement.style = 'background-color:var(--blue); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--blue); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'purple') {
        medElement.style = 'background-color:var(--purple); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--purple); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    }
    }
}
saveCalMed28()

function saveCalMed29() {
    if (localStorage.getItem('medData29')==null) {
        console.log('Nothing in Local Storage')
        return
    } else {
    const calendar = document.getElementById('dayBlockTwentyNine')
    var medElement = document.createElement('p')
    var timeElement = document.createElement('p')
    var medElementData =  JSON.parse(localStorage.getItem('medData29'))
    var timeElementData = JSON.parse(localStorage.getItem('timeData29'))
    var colorOption = JSON.parse(localStorage.getItem('colorData29'))
    medElement.innerText = medElementData
    timeElement.innerText = timeElementData
    calendar.append(medElement)
    calendar.append(timeElement)
    if (colorOption == 'red') {
        medElement.style = 'background-color:var(--red); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--red); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'orange') {
        medElement.style = 'background-color:var(--orange); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--orange); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'yellow') {
        medElement.style = 'background-color:var(--yellow); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--yellow); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'green') {
        medElement.style = 'background-color:var(--green); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--green); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'blue') {
        medElement.style = 'background-color:var(--blue); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--blue); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'purple') {
        medElement.style = 'background-color:var(--purple); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--purple); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    }
    }
}
saveCalMed29()

function saveCalMed30() {
    if (localStorage.getItem('medData30')==null) {
        console.log('Nothing in Local Storage')
        return
    } else {
    const calendar = document.getElementById('dayBlockThirty')
    var medElement = document.createElement('p')
    var timeElement = document.createElement('p')
    var medElementData =  JSON.parse(localStorage.getItem('medData30'))
    var timeElementData = JSON.parse(localStorage.getItem('timeData30'))
    var colorOption = JSON.parse(localStorage.getItem('colorData30'))
    medElement.innerText = medElementData
    timeElement.innerText = timeElementData
    calendar.append(medElement)
    calendar.append(timeElement)
    if (colorOption == 'red') {
        medElement.style = 'background-color:var(--red); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--red); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'orange') {
        medElement.style = 'background-color:var(--orange); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--orange); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'yellow') {
        medElement.style = 'background-color:var(--yellow); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--yellow); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'green') {
        medElement.style = 'background-color:var(--green); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--green); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'blue') {
        medElement.style = 'background-color:var(--blue); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--blue); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'purple') {
        medElement.style = 'background-color:var(--purple); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--purple); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    }
    }
}
saveCalMed30()

function saveCalMed31() {
    if (localStorage.getItem('medData31')==null) {
        console.log('Nothing in Local Storage')
        return
    } else {
    const calendar = document.getElementById('dayBlockThirtyOne')
    var medElement = document.createElement('p')
    var timeElement = document.createElement('p')
    var medElementData =  JSON.parse(localStorage.getItem('medData31'))
    var timeElementData = JSON.parse(localStorage.getItem('timeData31'))
    var colorOption = JSON.parse(localStorage.getItem('colorData31'))
    medElement.innerText = medElementData
    timeElement.innerText = timeElementData
    calendar.append(medElement)
    calendar.append(timeElement)
    if (colorOption == 'red') {
        medElement.style = 'background-color:var(--red); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--red); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'orange') {
        medElement.style = 'background-color:var(--orange); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--orange); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'yellow') {
        medElement.style = 'background-color:var(--yellow); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--yellow); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'green') {
        medElement.style = 'background-color:var(--green); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--green); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'blue') {
        medElement.style = 'background-color:var(--blue); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--blue); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'purple') {
        medElement.style = 'background-color:var(--purple); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--purple); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    }
    }
}
saveCalMed31()

function saveCalMed32() {
    if (localStorage.getItem('medData32')==null) {
        console.log('Nothing in Local Storage')
        return
    } else {
    const calendar = document.getElementById('dayBlockThirtyTwo')
    var medElement = document.createElement('p')
    var timeElement = document.createElement('p')
    var medElementData =  JSON.parse(localStorage.getItem('medData32'))
    var timeElementData = JSON.parse(localStorage.getItem('timeData32'))
    var colorOption = JSON.parse(localStorage.getItem('colorData32'))
    medElement.innerText = medElementData
    timeElement.innerText = timeElementData
    calendar.append(medElement)
    calendar.append(timeElement)
    if (colorOption == 'red') {
        medElement.style = 'background-color:var(--red); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--red); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'orange') {
        medElement.style = 'background-color:var(--orange); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--orange); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'yellow') {
        medElement.style = 'background-color:var(--yellow); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--yellow); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'green') {
        medElement.style = 'background-color:var(--green); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--green); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'blue') {
        medElement.style = 'background-color:var(--blue); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--blue); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'purple') {
        medElement.style = 'background-color:var(--purple); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--purple); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    }
    }
}
saveCalMed32()

function saveCalMed33() {
    if (localStorage.getItem('medData33')==null) {
        console.log('Nothing in Local Storage')
        return
    } else {
    const calendar = document.getElementById('dayBlockThirtyThree')
    var medElement = document.createElement('p')
    var timeElement = document.createElement('p')
    var medElementData =  JSON.parse(localStorage.getItem('medData33'))
    var timeElementData = JSON.parse(localStorage.getItem('timeData33'))
    var colorOption = JSON.parse(localStorage.getItem('colorData33'))
    medElement.innerText = medElementData
    timeElement.innerText = timeElementData
    calendar.append(medElement)
    calendar.append(timeElement)
    if (colorOption == 'red') {
        medElement.style = 'background-color:var(--red); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--red); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'orange') {
        medElement.style = 'background-color:var(--orange); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--orange); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'yellow') {
        medElement.style = 'background-color:var(--yellow); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--yellow); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'green') {
        medElement.style = 'background-color:var(--green); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--green); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'blue') {
        medElement.style = 'background-color:var(--blue); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--blue); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'purple') {
        medElement.style = 'background-color:var(--purple); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--purple); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    }
    }
}
saveCalMed33()

function saveCalMed34() {
    if (localStorage.getItem('medData34')==null) {
        console.log('Nothing in Local Storage')
        return
    } else {
    const calendar = document.getElementById('dayBlockThirtyFour')
    var medElement = document.createElement('p')
    var timeElement = document.createElement('p')
    var medElementData =  JSON.parse(localStorage.getItem('medData34'))
    var timeElementData = JSON.parse(localStorage.getItem('timeData34'))
    var colorOption = JSON.parse(localStorage.getItem('colorData34'))
    medElement.innerText = medElementData
    timeElement.innerText = timeElementData
    calendar.append(medElement)
    calendar.append(timeElement)
    if (colorOption == 'red') {
        medElement.style = 'background-color:var(--red); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--red); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'orange') {
        medElement.style = 'background-color:var(--orange); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--orange); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'yellow') {
        medElement.style = 'background-color:var(--yellow); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--yellow); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'green') {
        medElement.style = 'background-color:var(--green); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--green); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'blue') {
        medElement.style = 'background-color:var(--blue); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--blue); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'purple') {
        medElement.style = 'background-color:var(--purple); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--purple); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    }
    }
}
saveCalMed34()

function saveCalMed35() {
    if (localStorage.getItem('medData35')==null) {
        console.log('Nothing in Local Storage')
        return
    } else {
    const calendar = document.getElementById('dayBlockThirtyFive')
    var medElement = document.createElement('p')
    var timeElement = document.createElement('p')
    var medElementData =  JSON.parse(localStorage.getItem('medData35'))
    var timeElementData = JSON.parse(localStorage.getItem('timeData35'))
    var colorOption = JSON.parse(localStorage.getItem('colorData35'))
    medElement.innerText = medElementData
    timeElement.innerText = timeElementData
    calendar.append(medElement)
    calendar.append(timeElement)
    if (colorOption == 'red') {
        medElement.style = 'background-color:var(--red); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--red); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'orange') {
        medElement.style = 'background-color:var(--orange); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--orange); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'yellow') {
        medElement.style = 'background-color:var(--yellow); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--yellow); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'green') {
        medElement.style = 'background-color:var(--green); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--green); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'blue') {
        medElement.style = 'background-color:var(--blue); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--blue); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    } else if (colorOption == 'purple') {
        medElement.style = 'background-color:var(--purple); border: 1px solid black; border-bottom: 0; border-top-left-radius:5px; border-top-right-radius:5px'
        timeElement.style = 'background-color:var(--purple); border: 1px solid black; border-top: 0; border-bottom-left-radius:5px; border-bottom-right-radius:5px'
    }
    }
}
saveCalMed35()
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
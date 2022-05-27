fetch('https://clinicaltables.nlm.nih.gov/api/rxterms/v3/search?terms=arava&ef=STRENGTHS_AND_FORMS')
.then(response => response.json())
.then(data => console.log(JSON.stringify(data[1])))
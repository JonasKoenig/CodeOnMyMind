const answersElement = document.getElementById('answers');

// create a button for each answer choice
userChoices.forEach(a => {
    let inputElement = document.createElement('input');
    inputElement.type = 'submit';
    inputElement.name = 'answer';
    inputElement.value = a;
    inputElement.classList.add('answer')
    answersElement.appendChild(inputElement);
});

// POST the selected choice to server
function submit(choice){
    var http = new XMLHttpRequest();
    var url = window.location.href;
    var params = 'answer=' + choice;
    http.open('POST', url, true);
    http.setRequestHeader('Content-Type', 'application/json');

    http.onreadystatechange = function() {
        if (http.readyState == 4 && http.status == 200) {
            document.open();
            document.write(http.responseText);
        }
    }
    http.send(params);
}
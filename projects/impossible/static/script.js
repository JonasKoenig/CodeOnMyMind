const answersElement = document.getElementById('answers');

possibleAnswers.forEach(a => {
    let inputElement = document.createElement('input');
    inputElement.type = 'submit';
    inputElement.name = 'answer';
    inputElement.value = a;
    inputElement.classList.add('answer')
    answersElement.appendChild(inputElement);
});

function submit(key){
    var http = new XMLHttpRequest();
    var url = window.location.href;
    var params = 'answer='+key;
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
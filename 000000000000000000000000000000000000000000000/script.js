document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'LeonUnger' && password === '29845') {
        window.location.href = 'menü.html'; 
        <link href="menü.html"></link>
    } else {
        alert('Falscher Benutzername oder Passwort. Bitte versuchen Sie es erneut.');
    }
});
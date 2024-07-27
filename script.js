var languages = ["JavaScript", "Python", "PHP"];
var ul = document.getElementById("programming-languages");

for (var i = 0; i < languages.length; i++) {
    ul.innerHTML += '<li>' + languages[i] + '</li>';
}

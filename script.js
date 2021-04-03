var questions = document.getElementsByClassName("question");
var searchInput = input.value.toUpperCase();
var thisQuestion;

for (i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var answer = this.nextElementSibling;
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } 
  });
}



function SearchingFAQ() {
  for (i = 0; i < questions.length; i++) {
    thisQuestion = questions[i].textContent
    if (thisQuestion.toUpperCase().indexOf(searchInput) > -1) {
      questions[i].style.display = "";
    } else {
      questions[i].style.display = "none";
    }
  }
}
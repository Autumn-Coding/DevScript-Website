var questions = document.getElementsByClassName("question");
var searchQuestion = document.getElementById("searchFAQ");
var searchInput;
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
  searchInput = searchQuestion.value.toUpperCase();
  for (i = 0; i < questions.length; i++) {
    thisQuestion = questions[i].textContent;
    if (thisQuestion.toUpperCase().indexOf(searchInput) > -1) {
      questions[i].classList.remove("hide");
    } else {
      questions[i].classList.add("hide");
    }
  }
}
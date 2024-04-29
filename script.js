//Program title
var entry1 = document.getElementById("7Ls");
var entry2 = document.getElementById("5Ls");
var entry3 = document.getElementById("5Ls-2");
var entry4 = document.getElementById("4Ls");
var entry5 = document.getElementById("4Ls-2");
var entry6 = document.getElementById("optional");
var btn = document.getElementById("btn");
var correctAns = 0;
var incorrectAns = 0;
var result = document.getElementById("result");

btn.addEventListener("click", checkAns);

function checkAns() {
  var correctAns = 0;
  var incorrectAns = 0;

  if (entry1.value.toLowerCase() == "shahada") {
    correctAns++;
    entry1.style.color = "green";
  } else {
    incorrectAns++;
    entry1.style.color = "red";
  }

  if (
    entry2.value.toLowerCase() == "salat" ||
    entry2.value.toLowerCase() == "zakat" ||
    entry2.value.toLowerCase() == "salah" ||
    entry2.value.toLowerCase() == "namaz"
  ) {
    correctAns++;
    entry2.style.color = "green";
  } else {
    incorrectAns++;
    entry2.style.color = "red";
  }

  if (
    entry3.value.toLowerCase() == "salat" ||
    entry3.value.toLowerCase() == "zakat" ||
    entry3.value.toLowerCase() == "salah" ||
    entry3.value.toLowerCase() == "namaz"
  ) {
    correctAns++;
    entry3.style.color = "green";
  } else {
    incorrectAns++;
    entry3.style.color = "red";
  }

  if (
    entry4.value.toLowerCase() == "sawm" ||
    entry4.value.toLowerCase() == "hajj" ||
    entry4.value.toLowerCase() == "fasting"
  ) {
    correctAns++;
    entry4.style.color = "green";
  } else {
    incorrectAns++;
    entry4.style.color = "red";
  }

  if (
    entry5.value.toLowerCase() == "sawm" ||
    entry5.value.toLowerCase() == "hajj" ||
    entry5.value.toLowerCase() == "fasting"
  ) {
    correctAns++;
    entry5.style.color = "green";
  } else {
    incorrectAns++;
    entry5.style.color = "red";
  }

  if (entry6.value.toLowerCase() == "jihad") {
    correctAns++;
    entry6.style.color = "green";
  } else if (entry6.value.toLowerCase() == "") {
    entry6.style.color = "black";
  } else if (entry6.value.toLowerCase() != "jihad") {
    incorrectAns++;
    entry6.style.color = "red";
  }

  if (correctAns == 6) {
    result.innerHTML = `You got them all correct!`;
  } else if (entry6.value == "" && correctAns == 5) {
    result.innerHTML = `Awesome, now can you try and guess the potential sixth pillar?`;
  } else if (incorrectAns == 6) {
    result.innerHTML = `You got them all wrong. Try it again.`;
  } else if (correctAns < 6) {
    result.innerHTML = `You got ${correctAns} questions right & ${incorrectAns} wrong. Try and fix them`;
  }
}

// if all complete except optional, display message
// if all wrong, say all are wrong
// if some are wrong say how many are
// if all correct, say "Correct!"

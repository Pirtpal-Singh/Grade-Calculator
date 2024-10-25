// Button Click Listener
document.getElementById("btn1").addEventListener("click", btnclicked);

function btnclicked() {
  // Input
  let grade1 = +document.getElementById("grade1").value;
  let grade2 = +document.getElementById("grade2").value;
  let grade3 = +document.getElementById("grade3").value;
  let grade4 = +document.getElementById("grade4").value;
  let grade5 = +document.getElementById("grade5").value;
  // Process
  let average = (grade1 + grade2 + grade3 + grade4 + grade5) / 5;

  // Output
  document.getElementById("output").innerHTML = average;
}

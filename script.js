alert("مرحباً بك في موقعي الذي سيحسب درجتك!!");
var grade = prompt("اكتب درجتك بالأرقام");

console.log(`You grade is ${grade}`);
if (grade >= 90) {
  console.log("%c لقد حصلت على امتياز 🥳", "background: #222; color: #green");
} else if (grade >= 80) {
  console.log("%cلقد حصلت على جيد جداً🤩", "background: #222; color: yellw");
} else if (grade >= 70) {
  console.log("%c لقد حصلت على جيد🙂", "background: #222; color: red");
} else if (grade >= 60) {
  console.log("لقد حصلت على مقبول😕");
} else if (grade >= 50) {
  console.log("لقد حصلت على ضعيف☹️");
} else {
  console.log("راسب💔");
}
// جافاسكربت ليست جافا

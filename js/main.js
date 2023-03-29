const form = document.querySelector(".form_authorization ");
const listForm = form.querySelectorAll(".form_auth");
const userPassFirst = document.querySelector("#password1");
const userPassSecond = document.querySelector("#password2");
const mail = form.querySelector(".form_auth");
let flagPas = false;
let flagEmptyPole = false;

const listener = (e) => {
  userPassFirst.style =
    userPassFirst.value === userPassSecond.value
      ? "border: 1px solid green"
      : "border: 1px solid red";
  userPassSecond.style =
    userPassFirst.value === userPassSecond.value
      ? "border: 1px solid green"
      : "border: 1px solid red";
  flagPas = userPassFirst.value === userPassSecond.value ? true : false;
};
userPassSecond.addEventListener("input", listener);

form.addEventListener("submit", function (e) {
  listForm.forEach((element) => {
    if (!element.value) {
      element.style = "border: 1px solid red";
      flagEmptyPole = false;
    }
  });
  if (!flagPas || !flagEmptyPole) {
    e.preventDefault();
    console.log(`поля незаполнены/некорректный пароль`);
  }
});

mail.addEventListener("click", function (e) {
  e.target.style = "border: 1px solid #d9d9d9";
  flagEmptyPole = true;
});

const raiting = document.querySelector(".rating-area ");

raiting.addEventListener("click", function (e) {
  if (e.target.type === "radio") {
    console.log(e.target.id);
  }
});

function checkMCQ(button, correct) {
  const options = button.parentElement.querySelectorAll("button");
  options.forEach(opt => {
    opt.classList.remove("mcq-correct", "mcq-wrong");
    opt.disabled = true;
  });

  if (correct) {
    button.classList.add("mcq-correct");
  } else {
    button.classList.add("mcq-wrong");
  }
}

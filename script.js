const visibilityBtn = document.getElementById("visibilityBtn")
visibilityBtn.addEventListener("click", toggleVisibility)

function toggleVisibility() {
  const passwordInput = document.getElementById("newpassword")
  const icon = document.getElementById("icon")
  if (passwordInput.type === "password"){
      passwordInput.type = "text"
      icon.innerText = "visibility"
  } else {
    passwordInput.type = "password"
    icon.innerText = "visibility_off"
  }
}
 
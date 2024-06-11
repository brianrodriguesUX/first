function toogle() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#user-avatar img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "Foto do usuário Brian Rufino sorrindo em um dia de sol, em meados de 2022"
    )
  } else {
    img.setAttribute(
      "alt",
      "Foto do usuário Brian Rufino sorrindo em um dia frio, no ínicio da pandemia em 2020"
    )
  }
}

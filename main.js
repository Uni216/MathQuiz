function login(){
  p1= document.getElementById("Name1").value
  localStorage.setItem("NameOne", p1)

   p2= document.getElementById("Name2").value
  localStorage.setItem("NameTwo", p2)

  window.location=("gamepage.html")
}
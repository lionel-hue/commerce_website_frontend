import * as CLASS from "./class.js"

const login = new CLASS.Formulaire(
    [
        "../img/shopping-cart-shopping-purchasing-candy.jpg", 
        "../img/360_F_603641752_KZXQVK9LI6XD4KORIEZvwAUm0F2w8Ydj.jpg", 
        "../img/delivery-truck-parked-front-grocery-store-sliced-view_943281-34880.jpg"
    ]
)

login.auto_implementer()

login.contenu.querySelector("h2").innerText = "Bon retour!"
login.contenu.querySelector("p").innerText = "replonger tout de suite dans!"
login.contenu.querySelector("legend").innerText = "Login" 
login.contenu.querySelector(".svg").style.display = 'none'      

login.contenu.querySelector("fieldset nav").removeChild( login.contenu.querySelectorAll("fieldset nav label")[3] )
login.contenu.querySelector("fieldset").removeChild( login.contenu.querySelectorAll("fieldset nav")[1] )

// login.contenu.querySelector("nav").appendChild( document.createElement("label") )

login.contenu.querySelector("nav").appendChild(document.createElement('input'))
login.contenu.querySelectorAll("nav")[0].querySelectorAll("input")[3].value = "✓"
login.contenu.querySelectorAll("nav")[0].querySelectorAll("input")[3].setAttribute("type", "submit")
export class Formulaire
{
    constructor(TDSDI)
    {
        this.contenu = document.createElement('form')

        //TLPDF : toutes les pages de formulaire 
        this.TLPDF = undefined

        this.btn_suivant = undefined

        //TDSDI : tableau des sources des images
        this.TDSDI = TDSDI

        //PDTLI : parent de toutes les images
        this.PDTLI = document.querySelector("body .principal .boite_principale .diaporama_d_images")


    }

    construire()
    {
        //cette methoode est effectue sur le formulaire aussi bien que les images ajoutees

        //formulaire
        this.contenu.innerHTML = 
                   `<h2>Commençons!</h2>
                    <p class="description">
                        Vous n'êtes qu'à quelques pas du marché!
                    </p>
    
                    <fieldset class = "Produit">
                        <legend>
                            Produit
                        </legend>

                        <nav class="bloc1" style="transition:.5s;">
                            <label class = "id" style = "display:none;">
                                Id de produit <br>
                                <input type="text"> 
                            </label>
                            <br>
        
                            <label class = "nom" required>
                                Nom de produit <br>
                                <input type="text">
                            </label>
                            <br>
        
                            <label class = "marque">
                                Marque de produit <br>
                                <input type="text" required> 
                            </label>
                            <br>
        
                            <label class = "description">
                                Description brève de produit<br>
                                <textarea></textarea>
                            </label>
                            <br>
                        </nav>
         
                        <nav class = 'bloc2' style="display:none; transition:.5s; opacity:0;">
                            <br>
                            <label>
                                <select required>
                                    <option>fruits</option>
                                    <option>produits laitiers</option>
                                    <option>boissons</option>
                                </select>
    
                            </label>
                            <br>
    
                            <div style="display:flex;"> 
                                <label>
                                    Quantité en stock <br>
                                    <input type="number" required>
                                </label>
        
                                <label>
                                    Prix Unitaire <br>
                                    <input type="number" required>
                                </label>
                            </div>
                            <br>       
                            
                            
                            <div style="display:flex;">
                                <label>
                                    Date d'expiration
                                    <input type="date" required> <br>
                                </label>
    
                                <label>
                                    date d'ajout
                                    <input type="date" required>
                                </label>
                            </div>
                            <br>
    
    
                            <div style = "display:flex;">
                                <label>
                                    Poids/Volume
                                    <input type="text" required> <br>
                                </label>
    
                                <input type = "submit" value="✓" />
                            </div>
                            <br>
                        </nav>
                    </fieldset>
                    
                    <div class = 'svg'>
                    <svg fill="#FFFFFF" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
         viewBox="0 0 55.752 55.752" xml:space="preserve" class="icon">
         <style>
            .icon{
                padding:5px;
            }
         </style>
    <g>
        <path d="M43.006,23.916c-0.28-0.282-0.59-0.52-0.912-0.727L20.485,1.581c-2.109-2.107-5.527-2.108-7.637,0.001
            c-2.109,2.108-2.109,5.527,0,7.637l18.611,18.609L12.754,46.535c-2.11,2.107-2.11,5.527,0,7.637c1.055,1.053,2.436,1.58,3.817,1.58
            s2.765-0.527,3.817-1.582l21.706-21.703c0.322-0.207,0.631-0.444,0.912-0.727c1.08-1.08,1.598-2.498,1.574-3.912
            C44.605,26.413,44.086,24.993,43.006,23.916z"/>
    </g>
    </svg>

                </div>`

        //La definition de l'attribut 'class' du formulaire  ET la
        //la jointure dans le formulaire
        this.contenu.setAttribute("class", "formulaire")
        document.body.querySelector(".principal .boite_principale .section_B").appendChild(this.contenu)

        //Voici toutes les pages dans le formulaire...
        this.TLPDF = this.contenu.querySelectorAll("fieldset nav")

        this.btn_suivant = document.querySelector("body .principal .boite_principale .section_B .svg")

        //Les images pour la publicite(seulement 3)
        for(let i=0; i<=2;i++)
        {
            this.PDTLI.appendChild( document.createElement("img") )
            this.PDTLI.querySelectorAll("img")[i].src = this.TDSDI[i]
        }


    }

    suivant()
    {
        //Je vais utiliser cette varaible, >>i<<, pour savoir si la derniere page (le dernier nav)
        //dans le formulaire est atteint afin que je puisse changer la direction du bouton suivant!,
        //important!
        let i = 0, direction = "asc"

        this.btn_suivant.addEventListener("click", ()=>
        {

            if( direction == "asc" )
            {
                this.btn_suivant.style.transform = "rotate(-360deg)"
                this.TLPDF[i].style.opacity = 0
                this.TLPDF[i+1].style.display= "block"
    
                setTimeout(()=>
                    {
                        this.TLPDF[i+1].style.opacity= 1 
                        this.TLPDF[i].style.display = "none"
                        i++
                        if( i >= this.TLPDF.length -1 )
                        {
                            direction = "desc"
                            this.btn_suivant.style.transform = "rotate(-180deg)"
                        } 
                   
                }, 500)
                console.log("Taille des pages " + this.TLPDF.length) //ceci etait juste pour un test
                console.log("Nombre de fois touchee " + i) //ceci etait juste pour un test
            }
            
            else if( direction == "desc" )
            {
                this.btn_suivant.style.transform = "rotate(-180deg)"
                this.TLPDF[i].style.opacity = 0

                setTimeout(()=>
                    {
                        this.TLPDF[i].style.display = "none"
                        this.TLPDF[i-1].style.display= "block"
                        this.TLPDF[i-1].style.opacity= 1
                        i--
                        if(i <=0 )
                        {
                            direction = "asc"
                            this.btn_suivant.style.transform = "rotate(-360deg)"
                        }
             
                },500)
                console.log("Taille des pages " + this.TLPDF.length) //ceci etait juste pour un test
                console.log("Nombre de fois touchee " + i) //ceci etait juste pour un test
            }
            else
            {
                alert("x")
            }
        })
    }

    defilementAuto()
    {
        //Defilement par defaut...
        this.PDTLI.querySelectorAll("img")[0].scrollIntoView({
            behavior:"instant",
            block:"nearest",
            inline:"center"
        })


        // Le Defilement en forme de publicité simple.
        let i = 0;
        setInterval(()=>
        {
            this.PDTLI.querySelectorAll("img")[i+1].scrollIntoView({
                behavior: "smooth",
                block:"nearest",
                inline:"center"
            })
            i++
            i >= 2? i = -1:0
        }
        , 2500 )

    }

    auto_implementer()
    {
        this.construire()
        this.suivant()
        this.defilementAuto()
    }
}
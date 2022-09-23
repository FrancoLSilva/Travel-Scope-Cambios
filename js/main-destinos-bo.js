let login = false

const contenedor=document.getElementById("contenedor-destinos");
const btn = document.getElementById("btn-login")
btn.addEventListener("click", (e)=>{
    e.preventDefault();
    procesarLog();
})

function procesarLog(){
    let usernameDestino = document.getElementById("usernameBo");
    let passwordDestino = document.getElementById("passwordBo");
    if(usernameDestino.value=="Backoffice22" && passwordDestino.value=="1234" && login == false)
    {   
        alert(`Bienvenido ${usernameDestino.value} a TravelScope!`);
        mostrarBackOfficeDestinos(); 
        usernameDestino.value = ""
        passwordDestino.value = ""
        let sacarLogin = document.querySelector(".login-accion")
        sacarLogin.setAttribute("style","display:none;")
        login = true
    } 
    else if(login == false){
        alert("Datos invalidos");
    }
}

function Destinos(idDestino, nombreDestino, PrecioXNoche, fotoDestino)
{
    this.id = idDestino;
    this.nombre = nombreDestino;
    this.precioXNoche = PrecioXNoche;
    this.foto = fotoDestino;

}

const destinosDisponibles=[
    {idDestino: "V001",
    nombreDestino: "Mendoza",
    precioXNoche:"Precio aproximado: $700 x noche.",
    fotoDestino: "../multimedia/images/mendoza-centro.jpg"},
    {idDestino: "V002",
    nombreDestino: "Cordoba",
    precioXNoche:"Precio aproximado: $600 x noche.",
    fotoDestino: "../multimedia/images/cordoba-centro.jpg"},
    {idDestino: "V003",
    nombreDestino: "Salta",
    precioXNoche:"Precio aproximado: $700 x noche.",
    fotoDestino: "../multimedia/images/salta-centro.jpg"},
    {idDestino: "V004",
    nombreDestino: "Jujuy",
    precioXNoche:"Precio aproximado: $500 x noche.",
    fotoDestino: "../multimedia/images/jujuy-image.jpg"},
];

function mostrarDestinos()
{
    destinosDisponibles.forEach(destino => {
        const nodoDestinos= document.createElement("div");
    nodoDestinos.setAttribute("style","width:400px; height:200px; font-size:15px; border:black; display:block;")
    nodoDestinos.innerHTML=`<h4>${destino.nombreDestino}</h4>
                            <img src=${destino.fotoDestino} width=300px; height=200px />
                            <p>${destino.precioXNoche}</p>`
    const button = document.createElement("button")
    button.innerHTML="¡Agregalo a tus favoritos!"
    button.classList.add("button-Style")
    button.addEventListener("click", ()=>{

        elegirFavorito(destino)
        
    });

    nodoDestinos.appendChild(button);
    contenedor.appendChild(nodoDestinos)
    });
    
}

function elegirFavorito(destino)
{
    localStorage.setItem("favorito", JSON.stringify(destino));
    
}

function botonFavorito(favorito)
{
    const contenedorfav= document.getElementById("info-destinos")
    const contenedorbutton= document.createElement("div")
    contenedorbutton.setAttribute("style", "width:auto; height:50px; display:flex; justify-content: center; align-items: center;")
    const favButton = document.createElement("button")
    favButton.classList.add("button-Style");
    favButton.innerHTML="Visualizar favoritos"
    const handclick = (favorito) =>{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Tu favorito es: ${favorito.nombreDestino}`,
            showConfirmButton: false,
            timer: 1500
        })
        console.log(favorito)
    }
    favButton.addEventListener("click", ()=>{
        handclick(favorito)
        mostrarFavorito(favorito)
    });
    
    contenedorbutton.appendChild(favButton);
    contenedorfav.appendChild(contenedorbutton);
}



function mostrarFavorito()
  { 
    let favorito = localStorage.getItem("favorito");
    
    if(favorito)
    {
        favorito = JSON.parse(favorito);
        alert(`Tu favorito es: ${favorito.nombreDestino}`)
    }
  }

//Depurar funcion tira error en el addEventListener, boton no reacciona
function mostrarBackOfficeDestinos(){
    const containerButtons = document.getElementById("backOffice-buttons");
    const nodoAltaDestinos = document.createElement("button")
    nodoAltaDestinos.classList.add("button-Style-Bo");
    nodoAltaDestinos.addEventListener("click",()=>{
        const formTrue = document.querySelector('.form-true') || null
        if(formTrue){
            agregarNuevoDestino()
        }else{
            console.log("sos tonto")
        }});
    nodoAltaDestinos.innerText = "Agregar destinos";
    const nodoConsultaDestinos=document.createElement("button")
    nodoConsultaDestinos.classList.add("button-Style-Bo")
    nodoConsultaDestinos.addEventListener("click",()=>{botonDestinos()})
    nodoConsultaDestinos.innerText = "Destinos disponibles"
    containerButtons.appendChild(nodoAltaDestinos)
    containerButtons.appendChild(nodoConsultaDestinos)
}

function agregarNuevoDestino(idDestino,nombreDestino,precioXNoche,fotoDestino){
    altaDatosDestino()
    destinosDisponibles.push(new Destinos(idDestino,nombreDestino,precioXNoche,fotoDestino))

}
function botonDestinos()
{
    destinosDisponibles.forEach((destino)=>{
        console.log(destino)
        consultarDestinos(destino)
    })
}
function consultarDestinos(destino){
    const btnDestinosDisponibles= document.getElementById(`mostrar-${destino.id}`)
    console.log(btnDestinosDisponibles);
}

function altaDatosDestino()
{   const containerForm = document.getElementById("backOffice-altas");
    const formAltasDest=document.createElement("div")
    formAltasDest.classList.add("form-alta-Destinos");
    formAltasDest.innerHTML=`<h3 class="form-true"><strong>Carga de datos nuevo destinos</strong></h3>
                            <form>
                                <input type="text" placeholder="ID del Destino" value="V005">
                                <input type="text" placeholder="Nombre del Destino" value="Bariloche">
                                <input type="number" placeholder="Precio del Destino" value="1900">
                                <input type="url" placeholder="Link Imagen del Destino" value="https://denomades.s3.us-west-2.amazonaws.com/blog/wp-content/uploads/2020/05/08213126/shutterstock_1371228326.jpg">
                                <button id="Btn-Altas-Destinos">Dar de alta</button>
                            </form>
                                `;
    containerForm.appendChild(formAltasDest);

    //btn saca toda la info de los inputs y los manda agregarNuevoDestino
    const btnAltas = document.getElementById("Btn-Altas-Destinos")
    btnAltas.addEventListener(`submit`,e=>{
        e.preventDefault()
        const data= Object.fromEntries(
                new FormData(e.target)
            )
            alert(JSON.stringify(data))
        })
}

procesarLog();
mostrarDestinos();
botonFavorito();
mostrarBackOfficeDestinos();
const serviciosDisponibles=[];
localStorage.setItem("Servicios", JSON.stringify(serviciosDisponibles));


const destinosDisponibles=[];
localStorage.setItem("Destinos", JSON.stringify(destinosDisponibles));


function Servicios(fotoServicio,idServicio,nombreServicio,descripcionServicio)
{
    this.img = fotoServicio;
    this.id = idServicio;
    this.nombre = nombreServicio;
    this.description = descripcionServicio;
}

function Destinos(idDestino, nombreDestino, PrecioXNoche, fotoDestino)
{
    this.id = idDestino;
    this.nombre = nombreDestino;
    this.precioXNoche = PrecioXNoche;
    this.foto = fotoDestino;

}

function botonCargaServ(){
    const btn = document.getElementById("btn-login")
    btn.addEventListener("click", ()=>{
    agregarServicio();

    })
}

function botonCargaDest()
{
    const btn = document.getElementById("btn-login")
    btn.addEventListener("click", ()=>{
    agregarDestino();

    })
}

function programarBotonLog()
{
    const btn = document.getElementById("btn-login")
    btn.addEventListener("click", ()=>{
    procesarLog();

    })
}


function agregarServicio(){

    

}

function agregarDestino(){
    const idDestino= prompt("Cargue un ID");
    const nombreDestino= prompt("Cargue nombre del destino");
    const PrecioXNoche= prompt("Cargue el precio por noche");
    const fotoDestino= prompt ("Cargue Adicionales") 

    const destino1 = new Destino(idDestino, nombreDestino, PrecioXNoche, fotoDestino,bloqueada=true)
    console .log("A usted se le a asignado la habitacion:", destino1)
}
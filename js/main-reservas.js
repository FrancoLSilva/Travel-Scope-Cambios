contenedorConsultas();
const servicios = ["Traslado", "Alojamiento", "Media-pensión", "Guia-turistico"];

const form= document.getElementById("form-reservas");
    form.setAttribute("style","display:grid; justify-items: center; margin:20px;")//CREA UNA STYLE EN CSS CON ESTAS PROPIEDADES
    form.addEventListener("submit", (e) =>{
        e.preventDefault()//no refesca por submit
        validacionFormulario(form)
        console.log("MINISTERIO")
    })

function contenedorConsultas(){ 
    const nodoPresupuesto = document.getElementById("Presupuesto-reserv"); 
        nodoPresupuesto.onclick = () => {//PUSISTE UN PARAMERTO Q NUNCA VA A NINGUN LADO
            let destinoUsuario = prompt(`Ingrese el numero de su destino:
                    1 - Salta
                    2 - Jujuy
                    3 - Cordoba
                    4 - Mendoza`);

            alert(`Su proximo destino es ${destinoUsuario}, complete los datos a continuacion para calcular su viaje`);
            let Numero1 = Number(prompt("Ingrese el numero de pasajeros"));
            let Numero2 = Number(prompt("Ingrese la cantidad de dias"));

            if (isNaN(Numero1) || isNaN(Numero2)) {
                alert("Operacion invalida");
            }

            else {
                switch (destinoUsuario) {
                    case 'Salta':
                        {
                            const resultadoSalta = (Numero1 * 5000) + (Numero2 * 500);
                            alert(`El valor aproximado de su viaje es: ${resultadoSalta}`);
                            break;
                        }

                    case 'Jujuy':
                        {
                            const resultadoJujuy = (Numero1 * 6000) + (Numero2 * 1000);
                            alert(`El valor aproximado de su viaje es: ${resultadoJujuy}`);
                            break;
                        }

                    case 'Cordoba':
                        {
                            const resultadoCordoba = (Numero1 * 7000) + (Numero2 * 1500);
                            alert(`El valor aproximado de su viaje es: ${resultadoCordoba}`);
                            break;
                        }

                    case 'Mendoza': {
                        const resultadooMendoza = (Numero1 * 8000) + (Numero2 * 2000);
                        alert(`El valor aproximado de su viaje es: ${resultadooMendoza}`);
                        break;
                    }
                    default:
                        {
                            alert("Usted no se va de viaje");
                        }

                }
            }

        } ;
        

const nodoAdicional=document.getElementById("Adicionales-reserv");
        nodoAdicional.onclick= () => {
                let opciones = prompt(`¿Desea sumar servicios?
                                        1. Si
                                        2. No`);
                switch (opciones) {
                    case "1":
                        sumarServicios();
                        break;

                    case "2":
                        {
                            alert("¡Muchas gracias por elejirnos! enviaremos el detalle al mail suministrado.");
                            break;
                        }

                    default:
                        {
                            alert("Opción invalida");
                            break;
                        }
                }
            


            function sumarServicios() {
                const pedirservicios = prompt("Suma un servicio adicional: Excursiones, Fiestas, Piscina");
                if(pedirservicios !== ""){
                    servicios.push(pedirservicios);
                    console.log(servicios);
                    alert(`Se ha sumado el siguiente servicio a su paquete: ${pedirservicios}`);
                }
            };
        }
        

    const nodoHoteles=document.getElementById("Hoteles-reserv");
        nodoHoteles.onclick =  function hotelesDisponibles(){   
            let hotelbuscado = prompt(`Ingrese el hotel que desea - 
                    Santa Rita 
                    Las termas 
                    San Ignacio 
                    Gold Season`);
            const hoteles = ["Santa Rita","Las termas","San Ignacio","Gold Season"];
            const busqueda = hoteles.find ((hotel)=> hotel.includes(hotelbuscado))
            //estas haciendo un find para que?, no cumple funcion
            console.log(busqueda)
        };
}

function validacionFormulario(value){
    let informacion = []
    for (let i = 0; i < form.length-1; i++) {
        let registro = value[i].value;
        if(registro == "" ){
            alert("Debe completar todos los campos")
            informacion = []
            //si encuentra 1 que no este completada salta la alerta y reseta el array al comienzo
            break;
        }else{
            informacion.push(registro)
        }
    }
    if(informacion.length == 6){
        registroCompletado()
    }
}

function registroCompletado(){
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Tu reserva a sido registrada',
        showConfirmButton: false,
        timer: 1500
    })

    //RESETIAR LOS CAMPOS
    for (let i = 0; i < form.length-1; i++) {
        form[i].value = ""
    }

}

// backoffice
function cargarDatosHabitacion(){
        const id = prompt("Ingrese el ID de su habitacion");
        const medida = prompt(" elija una medida");
        const tipoDeCama = prompt("tipoDeCama");
        const hab1 = new Habitacion(id, medida,tipoDeCama, true);
        console.log(hab1);
    };
    
    function Transporte(id,tipoDeTransporte,tipoDeAsiento){
        this.id=id;
        this.tipoDeTransporte=tipoDeTransporte;
        this.tipoDeAsiento=tipoDeAsiento;
        };            

function cargarDatosTransporte(){
        const id=prompt("Ingrese el ID de su transporte");
        const tipoDeTransporte=prompt("Ingrese el transporte que prefiere (Micro o Avion)");
        const tipoDeAsiento= prompt("Ingrese el tipo de asiento (Cama o Semi-cama)");

        const transporte1 = new Transporte(id, tipoDeTransporte, tipoDeAsiento, true);
        console.log (transporte1);
    }
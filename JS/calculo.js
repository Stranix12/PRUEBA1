class Calculo{
    venta(){
     //   console.log("PROBANDO VENTA..")
     // se obtiene el elemento dado su id
     let costo=document.getElementById("costo").value;
     let descuento=document.getElementById("descuento").value;
     let IVA=document.getElementById("IVA").checked;
     //se ontiene el elemento html
    let $resp=document.getElementById("resp")
        //se modifica el elemento html
        let total=0,subtotal=0,valorIva=0
const iva=0.12
costo=parseFloat(costo)
descuento=parseFloat(descuento)/100
descuento=parseFloat((descuento*costo).toFixed(2))
subtotal=costo-descuento
if(IVA==true){
    valorIva=subtotal*iva
    valorIva=parseFloat(valorIva)
}
total=(costo-descuento+valorIva)


//se p´resenta el atributo del elemento html
$resp.textContent=`Costo: ${costo.toString()}\nDescuento: ${descuento.toString()}\nSubtotal:${subtotal.toString()}\nIva:${valorIva.toString()}\nTotal:${total.toString()}`
        console.log($resp)
    }
}
let cal = new Calculo()
//cal.venta()
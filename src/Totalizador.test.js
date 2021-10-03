describe("Totalizador",() =>{
    it("deberia calcular el total para una cantidad ",()=>{
        expect(calcularTotal(2,1,"")).toEqual(2);
    });
    it("deberia calcular el total para una cantidad ",()=>{
        expect(calcularTotal(2,2,"")).toEqual(4);
    });
    it("deberia calcular el total para una cantidad ",()=>{
        expect(calcularTotal(2,2,"CA")).toEqual(4.33);
    });
    it("deberia calcular el total para una cantidad ",()=>{
        expect(calcularTotal(3,2,"CA")).toEqual(6.495);
    });
    it("deberia calcular el total para una cantidad ",()=>{
        expect(calcularTotal(3,2,"NV")).toEqual(6.48);
    });
    it("deberia calcular el total para una cantidad ",()=>{
        expect(calcularTotal(3,2,"TX")).toEqual(6.375);
    });
    it("deberia calcular el total para una cantidad ",()=>{
        expect(calcularTotal(501,2,"NV")).toEqual(1049.6952);
    });
});

function impuestoEstado(estado){
    let impuestos = {"CA":0.0825,"UT":0.0665,"NV":0.08,"TX":0.0625,"AL":0.04,"":0}
    return impuestos[estado];
}
function obtenerDescuento(sub){
    if(sub>1000){
        return sub *0.03;
    }
    else {
        return 0;
    }
}
function calcularTotal(cantidad,precio,estado){
    let subTotal = cantidad*precio;
    let descuento;
    descuento = obtenerDescuento(subTotal);
    subTotal = subTotal-descuento;
    
    let impuesto = impuestoEstado(estado);
    subTotal = subTotal + subTotal*impuesto;
    
    return subTotal;
}
describe("Totalizador",() =>{
    it("deberia calcular el total para una cantidad ",()=>{
        expect(calcularTotal(2,1,"")).toEqual(2);
    });
    it("deberia calcular el total para una cantidad ",()=>{
        expect(calcularTotal(2,2,"")).toEqual(4);
    });
    it("deberia calcular el total para una cantidad contemplando el impuesto del Estado ",()=>{
        expect(calcularTotal(2,2,"CA")).toEqual(4.33);
    });
    it("deberia calcular el total para una cantidad  contemplando el impuesto del Estado",()=>{
        expect(calcularTotal(3,2,"CA")).toEqual(6.495);
    });
    it("deberia calcular el total para una cantidad  contemplando el impuesto del Estado",()=>{
        expect(calcularTotal(3,2,"NV")).toEqual(6.48);
    });
    it("deberia calcular el total para una cantidad  contemplando el impuesto del Estado",()=>{
        expect(calcularTotal(3,2,"TX")).toEqual(6.375);
    });
    it("deberia calcular el total para una cantidad  contemplando el impuesto del Estado y el descuento ",()=>{
        expect(calcularTotal(501,2,"NV")).toEqual(1049.6952);
    });
    it("deberia calcular el total para una cantidad  contemplando el impuesto del Estado y el descuento",()=>{
        expect(calcularTotal(501,20,"AL")).toEqual(9378.72);
    });

    it("deberia calcular el total para una cantidad  contemplando el impuesto del Estado y el descuento",()=>{
        expect(calcularTotal(200,200,"CA")).toEqual(36805);
    });
    it("deberia calcular el total para una cantidad  contemplando el impuesto del Estado y el descuento",()=>{
        expect(calcularTotal(1000,20,"UT")).toEqual(19197);
    });
    it("deberia calcular el total para una cantidad  contemplando el impuesto del Estado y el descuento",()=>{
        expect(calcularTotal(3510,2,"NV")).toEqual(7050.888000000001);
    });
    it("deberia calcular el total para una cantidad  contemplando el impuesto del Estado y el descuento",()=>{
        expect(calcularTotal(752,4,"TX")).toEqual(3036.2);
    });
});

function impuestoEstado(estado){
    let impuestos = {"CA":0.0825,"UT":0.0665,"NV":0.08,"TX":0.0625,"AL":0.04,"":0}
    return impuestos[estado];
}
function obtenerDescuento(sub){
    var descuentoPrecio = 0;
      if (sub >= 30000){
          descuentoPrecio = 0.15*sub;
      }else if(sub >= 10000){
          descuentoPrecio = 0.1*sub;
      }else if(sub >= 7000){
          descuentoPrecio = 0.07*sub;
      }else if(sub >= 3000){
          descuentoPrecio = 0.05*sub;
      }else if(sub >= 1000){
          descuentoPrecio = 0.03*sub;
      }
      return descuentoPrecio;
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
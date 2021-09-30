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
});

function calcularTotal(cantidad,precio,estado){
    let subTotal = cantidad*precio;
    if(estado=="CA"){
        let impuesto = 0.0825;
        return subTotal + subTotal*impuesto;
    }
    return subTotal;
}
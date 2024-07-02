class Validations {


    validateId(id){
        
        const idMin=1;
        const idMax=5
        if(id>=idMin && id<=idMax ) {
            return id
        }
        else {
            throw new Error("Datos no validos")
        }
    }

    validateTemp(temp){
        const tempMin = -20
        const tempMax = 100

        if(temp>=tempMin && temp<=tempMax) {
            return temp
        }
        else {
            throw new Error("Datos no validos")
        }
    }
}

export default Validations
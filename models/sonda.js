class Sonda {

    sondas = []

    async addSonda (sonda) {
     this.sondas.push(sonda)
    }

    async getAll () {
        return this.sondas
    }

    async getSondasPorId (id) {
        const sondasFilter = this.sondas.filter(sonda=>sonda.id==id)
        return sondasFilter
        }
    }


export default Sonda
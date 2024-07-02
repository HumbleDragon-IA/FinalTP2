import SondaService from "../services/sondaService.js"

const sondaService = new SondaService()
class SondaController{

    
    
    async insertSonda (req,res) {
        try{
           
            const {id, temperatura} = req.body
            const fecha= new Date()
            const data = await sondaService.insertSondaService({
                id,
                temperatura,
                fecha: fecha.toTimeString()
            });
            res.status(201).send({ success: true, return: data, message: `La sonda ${id} registró un temperatura de ${temperatura} °`})

        }catch(error){
            res.status(403).send({success:false, message: error.message})
        }
    }

    async getAllSondas (req,res) {
        try{
            const result = await sondaService.getAllSondasService({
                attributes: ["id","temperatura"]
            });
            res.status(200).send({success: true, return: result});
        }catch(error){
            res.status(400).send({success: false, message: error.message})
        }
    }

    async getSondasPorId (req,res) {
        try{
            const {id} = req.params
            const result = await sondaService.getSondasPorIdService(id);
            res.status(200).send({success: true, return: result})
        }catch(error){
            res.status(404).send({success: false, message : error.message})    
        }
    }
}

export default SondaController
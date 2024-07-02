import Sonda from "../models/sonda.js";
import Validation from "../functions/validations.js";

class SondaService {
  sondaModel = new Sonda();

  async insertSondaService(sonda) {
    try {
      const sondaValidada = this.validarSonda(sonda);
      if (sondaValidada) {
        await this.sondaModel.addSonda(sondaValidada);
        return sonda;
      }
    } catch (error) {
      throw error;
    }
  }

  async getAllSondasService() {
    try {
      const data = await this.sondaModel.getAll();
      if (!data) throw new Error("No hay registros cargados");
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getSondasPorIdService(id) {
    try {
      const data = await this.sondaModel.getSondasPorId(id);
      if (!data) throw new Error("No hay registros para el Id indicado");
      return data;
    } catch (error) {
      throw error;
    }
  }

  validarSonda(sonda) {
    try {
      const validation = new Validation();
      const idOk = validation.validateId(sonda.id);
      const tempOk = validation.validateTemp(sonda.temperatura);
      if (idOk && tempOk) {
        return sonda;
      }
    } catch (error) {
      throw error;
    }
  }
}

export default SondaService;

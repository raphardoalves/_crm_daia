import { connectionModel } from "./connectModel";

const getChosenProduct = async (argument: string, fornecedor: string, idCliente: string) => {
    const [lista] = await connectionModel.execute(`SELECT * FROM ${fornecedor} WHERE produto LIKE ? LIMIT 10`,[`%${argument}%`]);
    return lista
}

export default {
    getChosenProduct
}
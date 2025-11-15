import { connectionModel } from "./connectModel";

const getAllUsers = async () => {
    const [lista] = await connectionModel.execute("SELECT produto FROM")
    return lista
}

export default {
    getAllUsers
}
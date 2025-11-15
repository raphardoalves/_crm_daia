import { app } from "./app";
import { config } from "dotenv";
config()

const porta = process.env.PORT || 3001

app.listen(porta, () => {
    console.log(`http://localhost:${porta}/pages`)
})
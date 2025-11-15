import path from "path"
import type { Request, Response } from "express"

export const pageServer = async (req: Request, res: Response) => {
   res.sendFile(path.join(__dirname,'../statics/pages/index.html'))
}
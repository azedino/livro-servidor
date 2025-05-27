import { ControleEditora } from "@/classes/controle/ControleEditoras";
import { error } from "console";
import { NextApiRequest, NextApiResponse } from "next";

const controleEditora = new ControleEditora();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const editoras = await controleEditora.getEditoras();
      res.status(200).json(editoras);
    } catch (error) {
      res.status(500).json({ message: 'Erro Interno do Servidor' });
    }
  } else {
    res.status(405).json({message: 'Erro Inesperado'})
  }
}
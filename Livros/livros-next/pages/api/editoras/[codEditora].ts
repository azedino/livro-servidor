import { NextApiRequest, NextApiResponse } from "next";
import { ControleEditora } from "@/classes/controle/ControleEditoras";

const controleEditora = new ControleEditora();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const { codEditora } = req.query;
      const nomeEditora = await controleEditora.getNomeEditora(Number(codEditora));
      res.status(200).json({ nome: nomeEditora });
    } catch (error) {
      res.status(500).json({ message: 'Erro Interno no Servidor' });
    }
  } else {
    res.status(405).json({ message: 'Erro com o Cliente' });
  }
}
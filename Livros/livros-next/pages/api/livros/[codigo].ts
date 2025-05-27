// Importar os módulos necessários
import { NextApiRequest, NextApiResponse } from 'next';
import { ControleLivros } from '../../../classes/controle/ControleLivros';

const controleLivros = new ControleLivros();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'DELETE') {
        try {
             const { codigo } = req.query;
            await controleLivros.excluir(String(codigo));
            res.status(200).json({ message: 'Livro excluído com sucesso' });
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
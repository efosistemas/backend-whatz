import { Request, Response } from 'express'

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class MensagemController {
	
	async mensagens(req: Request, res: Response) {

		try {
			
		  	const mensagens = await prisma.mensagem.findMany({
			  orderBy: [
				{
				  createdAt: 'desc',
				},
			  ]
			  });

			  res.json(mensagens);
		  } catch (error) {
			return res.status(500).json({ message: 'Internal Server Error' })
		}
	};
}
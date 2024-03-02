import { Request, Response } from 'express'

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class MensagemController {

	async confirmaPresenca(req: Request, res: Response) {
		const opcao = req.params.hash.substring(0,1);
		const idMensagem = req.params.hash.substring(1);

		const mensagem = await prisma.mensagem.findFirst({where: {id: idMensagem}});
	    return res.json({opcao: opcao, mensagem: mensagem});

	}
	
	async mensagens(req: Request, res: Response) {

		try {
			
		  	const mensagens = await prisma.mensagem.findMany({
			  select: {
				descricao: true,
				celular: true,
			  },
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
	  
	async create(req: Request, res: Response) {

		const {descricao,celular} = req.body;
		if (!descricao) {
		  return res.status(400).json({ message: 'A descrição mensagem é obrigatória' });
		}  
		if (!celular) {
		  return res.status(400).json({ message: 'O celular é obrigatório' });
		}
		
		try {
		  const newMensagem = await prisma.mensagem.create({
			data: {
			  descricao,
			  celular
			}
		  }); 
		  
		  return res.json(newMensagem);
		} catch (error) {
			return res.status(500).json({ message: 'Internal Server Error' })
		}

	};
}
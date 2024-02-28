import { Request, Response } from 'express'

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export class TodoController {
	
	async todos(req: Request, res: Response) {
  
		try {
		  const users = await prisma.todo.findMany({
			  orderBy: [
				{
				  createdAt: 'desc',
				},
			  ]
			  });
			  res.json(users);
		  } catch (error) {
			return res.status(500).json({ message: 'Internal Server Error' })
		}
	};
	  
	async create(req: Request, res: Response) {
		
		try {
			const todo = await prisma.todo.create({
				data: {
				  completed: false,
				  createdAt: new Date(),
				  text: req.body.text ?? "Empty todo",
				},
			  });
				  
		  return res.json(todo);
		} catch (error) {
			return res.status(500).json({ message: 'Internal Server Error' })
		}
		  
	};

}
  
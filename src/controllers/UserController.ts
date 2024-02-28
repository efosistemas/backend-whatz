import { Request, Response } from 'express'

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export class UserController {
	
	async users(req: Request, res: Response) {
  
		try {
		  const users = await prisma.user.findMany({
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
			const user = await prisma.user.create({
				data: {
				  createdAt: new Date(),
				  name: req.body.name,
				  email: req.body.email,
				  password: req.body.password
				},
			  });
				  
		  return res.json(user);
		} catch (error) {
			return res.status(500).json({ message: 'Internal Server Error' })
		}
		  
	};

}
  
/*
  Warnings:

  - Made the column `descricao` on table `Mensagem` required. This step will fail if there are existing NULL values in that column.
  - Made the column `celular` on table `Mensagem` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Mensagem" ALTER COLUMN "descricao" SET NOT NULL,
ALTER COLUMN "celular" SET NOT NULL;

/*
  Warnings:

  - You are about to drop the column `tokenVersion` on the `tb_users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "tb_backlog" ALTER COLUMN "data_lancamento" SET DEFAULT null,
ALTER COLUMN "data_documento" SET DEFAULT null,
ALTER COLUMN "data_vencimento" SET DEFAULT null,
ALTER COLUMN "iniciar_em" SET DEFAULT null,
ALTER COLUMN "vencimento_liquido" SET DEFAULT null;

-- AlterTable
ALTER TABLE "tb_users" DROP COLUMN "tokenVersion";

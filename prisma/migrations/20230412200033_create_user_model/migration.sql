/*
  Warnings:

  - A unique constraint covering the columns `[vim]` on the table `tb_backlog` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `agent_atual` to the `tb_backlog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `centro` to the `tb_backlog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data_documento` to the `tb_backlog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data_lancamento` to the `tb_backlog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data_vencimento` to the `tb_backlog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `denominacao` to the `tb_backlog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dias_a_pagar` to the `tb_backlog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `doc_compras` to the `tb_backlog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `empr` to the `tb_backlog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fornecedor` to the `tb_backlog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `funcao_atual` to the `tb_backlog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `iniciar_em` to the `tb_backlog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `moeda_doc` to the `tb_backlog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `montante_bruto` to the `tb_backlog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `motivo_da_excecao` to the `tb_backlog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome_do_fornecedor` to the `tb_backlog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `num_doc` to the `tb_backlog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pd_tip_doc` to the `tb_backlog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `proc_st_vim` to the `tb_backlog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `referencia` to the `tb_backlog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo` to the `tb_backlog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vim` to the `tb_backlog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tb_backlog" ADD COLUMN     "agent_atual" VARCHAR(50) NOT NULL,
ADD COLUMN     "centro" VARCHAR(50) NOT NULL,
ADD COLUMN     "data_documento" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "data_lancamento" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "data_vencimento" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "denominacao" VARCHAR(255) NOT NULL,
ADD COLUMN     "dias_a_pagar" INTEGER NOT NULL,
ADD COLUMN     "doc_compras" VARCHAR(255) NOT NULL,
ADD COLUMN     "empr" INTEGER NOT NULL,
ADD COLUMN     "fornecedor" VARCHAR(50) NOT NULL,
ADD COLUMN     "funcao_atual" VARCHAR(50) NOT NULL,
ADD COLUMN     "iniciar_em" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "moeda_doc" VARCHAR(50) NOT NULL,
ADD COLUMN     "montante_bruto" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "motivo_da_excecao" VARCHAR(100) NOT NULL,
ADD COLUMN     "nome_do_fornecedor" VARCHAR(255) NOT NULL,
ADD COLUMN     "num_doc" VARCHAR(50) NOT NULL,
ADD COLUMN     "pd_tip_doc" VARCHAR(50) NOT NULL,
ADD COLUMN     "proc_st_vim" VARCHAR(70) NOT NULL,
ADD COLUMN     "referencia" VARCHAR(255) NOT NULL,
ADD COLUMN     "tipo" VARCHAR(50) NOT NULL,
ADD COLUMN     "vim" VARCHAR(50) NOT NULL;

-- CreateTable
CREATE TABLE "tb_users" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,

    CONSTRAINT "tb_users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tb_users_email_key" ON "tb_users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "tb_backlog_vim_key" ON "tb_backlog"("vim");

-- CreateTable
CREATE TABLE "tb_backlog" (
    "id" SERIAL NOT NULL,
    "vim" VARCHAR(50) NOT NULL,
    "num_doc" VARCHAR(50) NOT NULL,
    "proc_st_vim" VARCHAR(70) NOT NULL,
    "motivo_da_excecao" VARCHAR(100) NOT NULL,
    "nome_do_fornecedor" VARCHAR(255) NOT NULL,
    "referencia" VARCHAR(255) NOT NULL,
    "fornecedor" VARCHAR(50) NOT NULL,
    "doc_compras" VARCHAR(255) NOT NULL,
    "funcao_atual" VARCHAR(50) NOT NULL,
    "agent_atual" VARCHAR(50) NOT NULL,
    "centro" VARCHAR(50) NOT NULL,
    "empr" INTEGER NOT NULL,
    "pd_tip_doc" VARCHAR(50) NOT NULL,
    "tipo" VARCHAR(50) NOT NULL,
    "denominacao" VARCHAR(255) NOT NULL,
    "montante_bruto" DECIMAL(65,30) NOT NULL,
    "data_lancamento" TIMESTAMP(3) DEFAULT null,
    "data_documento" TIMESTAMP(3) DEFAULT null,
    "data_vencimento" TIMESTAMP(3) DEFAULT null,
    "moeda_doc" VARCHAR(50) NOT NULL,
    "iniciar_em" TIMESTAMP(3) DEFAULT null,
    "user_email" VARCHAR(255) NOT NULL,
    "tempo_parado" INTEGER NOT NULL,
    "dia_da_semana" INTEGER NOT NULL,
    "dia_da_semana_nominal" VARCHAR(20) NOT NULL,
    "vencimento_liquido" TIMESTAMP(3) DEFAULT null,
    "dias_a_pagar" INTEGER NOT NULL,
    "atraso" VARCHAR(50) NOT NULL,
    "recebido_em_atraso" INTEGER NOT NULL,
    "recebido_em_atraso_nominal" VARCHAR(50) NOT NULL,
    "status" VARCHAR(50) NOT NULL,

    CONSTRAINT "tb_backlog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_users" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "tokenVersion" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "tb_users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tb_backlog_vim_key" ON "tb_backlog"("vim");

-- CreateIndex
CREATE UNIQUE INDEX "tb_users_email_key" ON "tb_users"("email");

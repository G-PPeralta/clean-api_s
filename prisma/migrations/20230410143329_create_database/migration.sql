-- CreateTable
CREATE TABLE "Backlog" (
    "id" SERIAL NOT NULL,
    "user_email" VARCHAR(255) NOT NULL,
    "tempo_parado" INTEGER NOT NULL,
    "dia_da_semana" INTEGER NOT NULL,
    "dia_da_semana_nominal" VARCHAR(20) NOT NULL,
    "vencimento_liquido" TIMESTAMP(3) NOT NULL,
    "atraso" VARCHAR(50) NOT NULL,
    "recebido_em_atraso" INTEGER NOT NULL,
    "recebido_em_atraso_nominal" VARCHAR(50) NOT NULL,
    "status" VARCHAR(50) NOT NULL,

    CONSTRAINT "Backlog_pkey" PRIMARY KEY ("id")
);

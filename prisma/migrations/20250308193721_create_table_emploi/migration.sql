-- CreateTable
CREATE TABLE "Emploi" (
    "id" SERIAL NOT NULL,
    "formateur" TEXT NOT NULL,
    "module" TEXT NOT NULL,
    "groupe" TEXT NOT NULL,
    "seance" TEXT,
    "salle" TEXT NOT NULL,
    "jour" TEXT NOT NULL,
    "date" INTEGER NOT NULL,
    "moment" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "n" TEXT,
    "prevus" TEXT,
    "presents" TEXT,
    "emargement" DOUBLE PRECISION,

    CONSTRAINT "Emploi_pkey" PRIMARY KEY ("id")
);

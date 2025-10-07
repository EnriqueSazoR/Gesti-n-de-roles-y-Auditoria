-- CreateEnum
CREATE TYPE "estado" AS ENUM ('ACTIVO', 'INACTIVO');

-- CreateEnum
CREATE TYPE "accion" AS ENUM ('INSERT', 'UPDATE', 'DELETE', 'LOGIN', 'LOGOUT', 'PASSWORD_CHANGE', 'ACCESS_DENIED');

-- CreateEnum
CREATE TYPE "entidadAfectada" AS ENUM ('USUARIO', 'ROL');

-- CreateTable
CREATE TABLE "Rol" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaActualizacion" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Rol_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "idRol" INTEGER NOT NULL,
    "estado" "estado" NOT NULL DEFAULT 'ACTIVO',
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaActualizacion" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuditLogs" (
    "id" SERIAL NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    "accion" "accion" NOT NULL,
    "entidadAfectada" "entidadAfectada" NOT NULL,
    "detalle" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AuditLogs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Rol_nombre_key" ON "Rol"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_nombre_key" ON "Usuario"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_correo_key" ON "Usuario"("correo");

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_idRol_fkey" FOREIGN KEY ("idRol") REFERENCES "Rol"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuditLogs" ADD CONSTRAINT "AuditLogs_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Nest-GraphQL-Anylist

API de lista de compras creado con [Nest](https://github.com/nestjs/nest) y [GraphQL](https://docs.nestjs.com/graphql/quick-start). Basado en el curso de "Nest + GraphQL: Evoluciona tus APIs" de [DevTalles](https://cursos.devtalles.com/) en Udemy.

## Configuración del proyecto

1. Instalar NestJS CLI

```bash
$ npm i -g @nestjs/cli
```
2. Clonar el repositorio

3. Instalar las dependencias

```bash
$ npm install
```
4. Clonar el archivo .env.template y renombrar la copia a .env.

5. Completar las variables de entorno en el archivo .env.

6. Levantar la base de datos

```bash
$ docker compose up -d
```

## Compilar y ejecutar el proyecto

```bash
# desarrollo
$ npm run start

# modo observación
$ npm run start:dev

# modo producción
$ npm run build
$ npm run start:prod
```

Visitar el sitio
[localhost:3000/graphql](localhost:3000/graphql)

## Aspectos estudiados

En esta API se trabajan los siguientes aspectos de Nest y GraphQL:
-	Postgres
-	TypeORM
- Entidades con GraphQL Object Types
- CRUD (Queries y Mutations)
- Protección de queries y mutations
- Creación de usuarios desde GraphQL
- Login
- Revalidación de token de autenticación
- JWT
- Relaciones ManyToOne a la misma tabla
- Actualización de usuarios
- Bloqueo de usuarios
- Protección de GqlSchema
- Módulos asíncronos
- Factory functions
- Uso de módulos en factory functions
- Roles y actualización de usuario que modifica registros
- Relaciones user - item
- Validaciones
- Consultas por usuario
- Índices
- LazyRelationships
- Seed
- Paginaciones
- Búsquedas por nombre
- Paginar y buscar de forma simultánea
- Paginar y buscar por ítems dentro de usuarios
- Aplicar filtros a la hora de consultar los ítems
- Relaciones
- Maestro detalles
- Constraints
- Filtros, paginar y conteo
- Actualiza elementos
- Actualizaciones con query builders

## Librerías utilizadas

Los paquetes necesarios para trabajar con GraphQL en NestJS son:
```bash
$ npm i @nestjs/graphql @nestjs/apollo @apollo/server @as-integrations/express5 graphql
```

Los paquetes necesarios para realizar validaciones en NestJS son:
```bash
$ npm i @nestjs/config
```

La conexión con la base de datos Postgres utiliza TypeORM:
```bash
$ npm install --save @nestjs/typeorm typeorm pg
```

Los paquetes necesarios para realizar validaciones en NestJS son:
```bash
$ npm i class-validator class-transformer
```

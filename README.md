# Tienda Online de Bolsos - Machimba

Este repositorio contiene el backend para la tienda online **Machimba**, especializada en la venta de bolsos de distintas colecciones y estilos. El backend está desarrollado en **Node.js** con **Express** y **MySQL** como base de datos.

## Tabla de Contenidos

- [Descripción del Proyecto](#descripción-del-proyecto)
- [Estructura de la Base de Datos](#estructura-de-la-base-de-datos)
- [Requisitos](#requisitos)
- [Instalación y Configuración](#instalación-y-configuración) 
- [Endpoints de la API](#endpoints-de-la-api)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia) 
- [Equipo de Desarrollo](#equipo-de-desarrollo)

---

## Descripción del Proyecto

Este proyecto permite gestionar una tienda online de bolsos, donde los usuarios pueden registrarse, ver y comprar productos, y consultar un histórico de sus pedidos. También cuenta con un panel administrativo para gestionar productos,usuarios y trabajadores.

### Funcionalidades

1. **Autenticación**: Registro e inicio de sesión de usuarios.
2. **Gestión de Productos**: Creación, actualización, y consulta de productos.
3. **Realización de Pedidos**: Los clientes pueden hacer pedidos y consultar su historial de compras.
4. **Panel Administrativo**: Acceso exclusivo para trabajadores para gestionar inventario y pedidos.


## Estructura de la Base de Datos

La base de datos **Machimba** tiene las siguientes tablas:

1. **product**: Almacena información sobre cada bolso disponible en la tienda.
2. **user**: Almacena los datos de los usuarios.
3. **client**: Extiende la tabla de usuarios para almacenar detalles adicionales sobre los clientes.
4. **worker**: Extiende la tabla de usuarios para almacenar detalles de los empleados.
5. **purchase**: Almacena los pedidos realizados.
6. **purchase_has_product**: Relaciona los productos con los pedidos y almacena la cantidad de cada producto en cada pedido.
7. **purchase_history**: Historial de pedidos realizados por los clientes.

## Requisitos

Para ejecutar este proyecto, asegúrate de tener instalados los siguientes programas:

- [Node.js](https://nodejs.org/) (v14 o superior)
- [MySQL](https://www.mysql.com/) (v5.7 o superior)

## Instalación y configuración

## Endpoints de la API

Se han añadido dos endpoints distintos como muestra para recibir información de todos los bolsos o de forma individual. Esto sirve de ejemplo y se podrían crear endpoints para

## Contribuciones

## Licencia

## Equipo de Desarrollo

Este proyecto fue desarrollado por los siguientes miembros del equipo:

- **[Ekaitz](https://github.com/EkaitzGA)**
- **[Ines](https://github.com/inesuribeb)**
- **[Samuel](https://github.com/samucopp)**

Cada miembro ha contribuido en diversas etapas del desarrollo para crear una tienda online funcional y bien documentada.

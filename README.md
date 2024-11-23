# Tienda Online de Bolsos - Machimba

**MACHIMBAS** es una tienda online de bolsos únicos y de edición limitada, diseñados y confeccionados por Rocío Machimbarrena. La plataforma está construida utilizando **Node.js** para el backend y **Pug** como motor de plantillas para el frontend.

## Tecnologías Utilizadas

Backend: Node.js
Motor de Plantillas: Pug
Base de Datos: SQL
Estilos: CSS puro
Frontend: Javascript (manejo dinámico del carrito y para Interacciones de UI/UX) 
Containerización: Docker
                  Contenedor para Node.js
                  Contenedor para MySQL
                  Docker Compose para orquestación


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

### Paginas principales y Funcionalidades

    1. Página de Inicio (Home) 
        Presentación de la marca

    2. Página Catálogo
        Muestra del catálogo de bolsos
        Formulario interactivo para filtrar la búsqueda
        Enlace a una ruta individual de cada bolso con más detalles del mismo Posibilidad de añadir productos a tu compra
    
    3. Inicio Sesión/Registro
        **Autenticación**: Registro e inicio de sesión de usuarios.

    4. Perfil Cliente : Acceso exclusivo para clientes para gestionar datos y pedidos.
        Datos Personales
        Visualización del perfil actual
        Formulario de edición con todos los datos Actualización en tiempo real
        Historial de Compras
        Vista previa de las últimas transacciones
        Detalles por compra: fecha de pedido, estado del pedido, total de la compra, productos adqui ridos, dirección de envío utilizada.

    5. Carrito de Compra
        Visualización de productos seleccionados
        Actualizar cantidades: control de cantidad por producto Cálculo automático de subtotales y totales
        Proceso de checkout
        Formulario de dirección de envío
        Validación de datos de compra

    6. Perfil Administrativo : Acceso exclusivo para trabajadores para gestionar inventario, trabajadores y pedidos.
    Seccion Productos:
        Visualización de productos CRUD completo
        Busqueda por query
    Sección Clientes:
        Visualización de datos de cliente Sección Trabajadores:
        Visualización de datos de trabajador CRUD completo
    Sección Pedidos
        Visualización de datos de pedidos
        Gestión de cuenta Cierre de sesión




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

Se han añadido dos endpoints distintos como muestra para recibir información de todos los bolsos o de forma individual. Esto sirve de ejemplo.

## Consideraciones de Diseño

- Diseño minimalista y elegante
- nfoque en la usabilidad
- Experiencia de usuario fluida
- Responsive design para todos los dispositivos

## Estado del Proyecto

El proyecto está en desarrollo activo, con actualizaciones regulares de funcionalidades y mejoras en la experiencia de usuario.

## Contribuciones

## Licencia

Este proyecto no cuenta con ninguna licencia

## Equipo de Desarrollo

Este proyecto fue desarrollado por los siguientes miembros del equipo:

- **[Ekaitz](https://github.com/EkaitzGA)**
- **[Ines](https://github.com/inesuribeb)**
- **[Samuel](https://github.com/samucopp)**

Cada miembro ha contribuido en diversas etapas del desarrollo para crear una tienda online funcional y bien documentada.


# 👜 Tienda Online de Bolsos - **Machimba**

**MACHIMBA** es una tienda online de bolsos únicos y de edición limitada, diseñados y confeccionados por Rocío Machimbarrena. La plataforma está construida utilizando **Node.js** para el backend y **Pug** como motor de plantillas para el frontend.

---

## 🚀 Tecnologías Utilizadas

- **Backend**: Node.js
- **Motor de Plantillas**: Pug
- **Base de Datos**: SQL
- **Estilos**: CSS puro
- **Frontend**: JavaScript (manejo dinámico del carrito e interacciones de UI/UX)
- **Containerización**: Docker
  - Contenedor para Node.js
  - Contenedor para MySQL
  - Docker Compose para orquestación

---

## 📚 Tabla de Contenidos

- [Descripción del Proyecto](#descripción-del-proyecto)
- [Estructura de la Base de Datos](#estructura-de-la-base-de-datos)
- [Requisitos](#requisitos)
- [Instalación y Configuración](#instalación-y-configuración)
- [Endpoints de la API](#endpoints-de-la-api)
- [Consideraciones de Diseño](#consideraciones-de-diseño)
- [Estado del Proyecto](#estado-del-proyecto)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)
- [Equipo de Desarrollo](#equipo-de-desarrollo)

---

## 🛒 Descripción del Proyecto

Este proyecto permite gestionar una tienda online de bolsos, donde los usuarios pueden:

1. Registrarse, ver y comprar productos.
2. Consultar un histórico de sus pedidos.
3. Los administradores pueden gestionar productos, usuarios y trabajadores.

---

## 🗂️ Estructura de la Base de Datos

- **Tablas principales**:
  1. `product`: Almacena información sobre cada bolso disponible.
  2. `user`: Almacena los datos de los usuarios.
  3. `client`: Detalles adicionales sobre los clientes.
  4. `worker`: Información de los empleados.
  5. `purchase`: Pedidos realizados.
  6. `purchase_has_product`: Relación entre productos y pedidos.
  7. `purchase_history`: Historial de pedidos.

---

## 🛠️ Requisitos

Para ejecutar este proyecto, necesitas:

- **[Node.js](https://nodejs.org/)** (v14 o superior)
- **[MySQL](https://www.mysql.com/)** (v5.7 o superior)

---

## ⚙️ Instalación y Configuración

1. Clona el repositorio:
   ```bash
   git clone git@github.com:EkaitzGA/Machimba.git
   cd Machimba
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura las variables de entorno:
   - Crea un archivo `.env` siguiendo el ejemplo de `.env.example`:

     ```env
     DB_HOST=machimba_db
     DB_PORT=3308
     APP_HOST=machimba_back
     APP_PORT=3001
     DB_USER="tu user"
     DB_PASSWORD="tu contraseña"
     DB_DATABASE=Machimba
     DB_ROOT_PASSWORD=1234
     SESSION_SECRET=1234
     ```

4. Inicia Docker:
   ```bash
   docker compose up --build
   ```

   La aplicación estará disponible en **[http://localhost:3001](http://localhost:3001)**.

---

## 📡 Endpoints de la API

- **Todos los bolsos**: `purses/api/purses`
- **Bolso individual**: `purses/api/purses/:id`

---

## 🎨 Consideraciones de Diseño

- **Diseño minimalista** y elegante.
- Enfoque en **usabilidad**.
- **Experiencia de usuario fluida**.
- Totalmente **responsive** para dispositivos móviles.

---

## 🛠️ Estado del Proyecto

🚧 **En desarrollo activo**: Actualizaciones frecuentes con nuevas funcionalidades y mejoras.

---

## 🤝 Contribuciones

¡Cualquier contribución es bienvenida! Sigue estos pasos:

1. Haz un **fork** del repositorio.
2. Crea una nueva rama:
   ```bash
   git checkout -b "nombre-de-tu-rama"
   ```
3. Realiza tus cambios y haz commit:
   ```bash
   git commit -m "Descripción de los cambios"
   ```
4. Envía un **Pull Request**.

---

## 📜 Licencia

⚠️ Este proyecto **no cuenta con una licencia**.

---

## 👥 Equipo de Desarrollo

Este proyecto fue desarrollado por:

- **[Ekaitz](https://github.com/EkaitzGA)**
- **[Ines](https://github.com/inesuribeb)**
- **[Samuel](https://github.com/samucopp)**

Cada miembro contribuyó a distintas etapas del desarrollo para crear una plataforma funcional y bien documentada.

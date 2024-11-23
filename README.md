

👜 Tienda Online de Bolsos - Machimba
MACHIMBA es una tienda online de bolsos únicos y de edición limitada, diseñados y confeccionados por Rocío Machimbarrena.
Esta plataforma está construida utilizando Node.js para el backend y Pug como motor de plantillas para el frontend.

🛠️ Tecnologías Utilizadas
Backend: Node.js
Motor de Plantillas: Pug
Base de Datos: SQL
Estilos: CSS puro
Frontend: JavaScript (manejo dinámico del carrito e interacciones UI/UX)
Containerización:
🐳 Contenedor para Node.js
🐬 Contenedor para MySQL
Docker Compose para orquestación
📋 Tabla de Contenidos
📖 Descripción del Proyecto
💾 Estructura de la Base de Datos
🔧 Requisitos
⚙️ Instalación y Configuración
📡 Endpoints de la API
🎨 Consideraciones de Diseño
🚧 Estado del Proyecto
🤝 Contribuciones
📜 Licencia
👥 Equipo de Desarrollo
📖 Descripción del Proyecto
Este proyecto permite gestionar una tienda online de bolsos donde los usuarios pueden:

Registrarse
Ver y comprar productos
Consultar el historial de pedidos
También incluye un panel administrativo para gestionar productos, usuarios y trabajadores.

🌟 Funcionalidades Principales
Página de Inicio (Home)

Presentación de la marca
Catálogo

Visualización del catálogo de bolsos
Filtros interactivos para búsqueda
Detalles individuales de cada producto
Añadir productos al carrito
Autenticación

Registro e inicio de sesión para usuarios
Perfil Cliente

Gestión de datos personales
Historial de compras
Carrito de Compra

Visualización de productos seleccionados
Actualización de cantidades
Checkout con validación de datos
Perfil Administrativo

CRUD completo para productos, clientes, trabajadores y pedidos
Cierre de sesión seguro
💾 Estructura de la Base de Datos
La base de datos Machimba incluye las siguientes tablas:

product: Información de los bolsos.
user: Datos básicos de los usuarios.
client: Detalles adicionales de los clientes.
worker: Datos de los empleados.
purchase: Pedidos realizados.
purchase_has_product: Relación entre productos y pedidos.
purchase_history: Historial de pedidos.
🔧 Requisitos
Asegúrate de tener instalados:

Node.js (v14 o superior)
MySQL (v5.7 o superior)
⚙️ Instalación y Configuración
Paso 1: Clonar el repositorio
bash
Copiar código
git clone git@github.com:EkaitzGA/Machimba.git
Paso 2: Instalar dependencias
bash
Copiar código
npm install
Paso 3: Configurar variables de entorno
Crea un archivo .env siguiendo el ejemplo en .env.example:

dotenv
Copiar código
DB_HOST=machimba_db
DB_PORT=3308
APP_HOST=machimba_back
APP_PORT=3001
DB_USER="tu usuario"
DB_PASSWORD="tu contraseña"
DB_DATABASE=Machimba
DB_ROOT_PASSWORD=1234
SESSION_SECRET=clave-super-secreta
Paso 4: Iniciar contenedor Docker
bash
Copiar código
docker compose up --build
La aplicación estará disponible en http://localhost:3001.

📡 Endpoints de la API
GET /purses/api/purses: Lista todos los bolsos.
GET /purses/api/purses/:id: Información de un bolso específico.
🎨 Consideraciones de Diseño
Diseño minimalista y elegante
Enfoque en la usabilidad
Experiencia de usuario fluida
Responsive design para todos los dispositivos
🚧 Estado del Proyecto
El proyecto está en desarrollo activo con actualizaciones regulares de funcionalidades y mejoras.

🤝 Contribuciones
¡Contribuciones son bienvenidas!

Haz un fork del repositorio.
Crea una nueva rama:
bash
Copiar código
git checkout -b "nueva-rama"
Realiza los cambios y haz commit:
bash
Copiar código
git commit -m "Mi mejora"
Envía un Pull Request.
📜 Licencia
Este proyecto no cuenta con ninguna licencia.

👥 Equipo de Desarrollo
Desarrollado por:

Ekaitz
Ines
Samuel
¡Cada miembro contribuyó para crear una tienda online funcional y bien documentada!


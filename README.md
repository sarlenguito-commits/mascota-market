# Mascota Market · Tareas 🐾

👉 **App:** https://sarlenguito-commits.github.io/mascota-market/

App web para organizar las tareas de limpieza y mantenimiento de los locales **Mascota Market Diagonal** y **Mascota Market Rivadavia**.

Cada empleada entra tocando su nombre (la primera vez en cada celular pone la clave del equipo; la dueña entra con su propia clave) y ve **qué le toca esta semana**. Puede marcar cada tarea como **"Lo hice"** o **"No lo hice"** (con una nota opcional; si no lo hizo, la tarea pasa al día siguiente). La dueña ve informes por local y semana, y el historial del mes.

Además:
- **🔄 Notas de cambio de turno**: quien sale deja escrito lo que tiene que saber quien entra. La última nota de su local le aparece arriba en "Hoy" a la siguiente.
- **📌 Agenda**: Agustina agrega cosas a un día del calendario, para una empleada o para todas. Aparecen con 📌 en el calendario y en "Hoy" ese día.
- **🗒️ Bloc de notas de Agustina**: notas privadas que solo ve ella.
- **📖 Glosario**: todas las tareas de los dos locales con quién hace cada una según la semana, el total y un buscador.
- **📦 Stock**: productos por local con − / + y aviso de poco stock. Arriba, los **🚚 días de pedido y entrega** de cada marca, con lo que se pide o llega hoy resaltado (`PEDIDOS` en `config.js`).

> Esta app es para organizar el trabajo entre turnos de forma simple y efectiva.

## 🛠️ Tecnologías
- HTML, SCSS (partials, variables, mixins, `@extend`) y JavaScript (módulos ES)
- Firebase Authentication con correo y contraseña: un usuario compartido del equipo para las empleadas y uno propio para la dueña
- Firebase Firestore (base de datos en tiempo real)
- GitHub Pages (hosting)

## 📁 Estructura
- `index.html` — página única
- `js/config.js` — **personas, locales, turnos y tareas** (se edita acá para cambiar asignaciones)
- `js/calendario.js` — semanas del mes, lunes, turnos y qué le toca a quién
- `js/datos.js` — conexión con Firebase (o modo prueba con `localStorage`)
- `js/app.js` — interfaz
- `scss/` — estilos (utilities, base, layout, components) → compilan a `styles/style.css`
- `firestore.rules` — reglas de seguridad de la base de datos

## 📅 Cómo se asignan las tareas
- **Semana del mes**: semana 1 = días 1–7, semana 2 = 8–14, semana 3 = 15–21, semana 4 = 22 a fin de mes.
- **Wash**: todos los lunes (en Rivadavia, Ailin; en Diagonal se turnan Sharon y Sofía, a confirmar si sigue).
- Si una tarea no se hace en su semana, aparece como "Quedó de la semana pasada".
- "No lo hice" la pasa al próximo día hábil (lunes a sábado) y aparece arriba como "Quedó de ayer".

## ⚙️ Compilar estilos
```bash
sass scss/main.scss styles/style.css
```

## 🧪 Probar
Mientras `firebaseConfig.apiKey` en `js/config.js` diga `"PEGAR_AQUI"`, la app funciona en **modo prueba**: la clave del equipo es `1234`, la de la dueña puede ser cualquiera, y los datos quedan solo en el navegador.

Para simular otra fecha: `index.html?fecha=2026-09-28&hora=15:00`.

## 🔥 Conectar Firebase
1. Crear un proyecto en [console.firebase.google.com](https://console.firebase.google.com).
2. **Authentication** → Comenzar → activar **solo Correo electrónico/contraseña**.
3. **Authentication → Usuarios** → agregar dos usuarios (el dominio no tiene que existir):
   - `agustina@mascotamarket.app` con la contraseña de Agustina.
   - `equipo@mascotamarket.app` con la **clave del equipo**, la misma para todas las chicas. Cada una la pone una sola vez por celular y después entra tocando su nombre.
4. **Firestore Database** → Crear base de datos (modo producción, ubicación `southamerica-east1`).
5. **Firestore → Reglas** → pegar el contenido de `firestore.rules` → Publicar.
   Las reglas cubren `registros`, `tareas`, `notasTurno`, `agenda` y `stock`. Solo Agustina escribe en `tareas` y `agenda`, y `notasDuena` es privado de ella.
6. **Configuración del proyecto → Tus apps → Web (`</>`)** → registrar app → copiar el objeto `firebaseConfig` en `js/config.js`.
7. **Authentication → Configuración → Dominios autorizados** → agregar el dominio de GitHub Pages (`sarlenguito-commits.github.io`).

## 🔒 Seguridad del acceso
- Las claves viven solo en Firebase: el código de la página (repo público) no tiene ninguna.
- Tras **5 intentos fallidos** el celular queda bloqueado **15 minutos** (`INTENTOS_MAXIMOS` y `MINUTOS_BLOQUEO` en `config.js`). Firebase además frena por su cuenta las ráfagas de intentos.
- En una emergencia, desde **Authentication → Usuarios**, sobre `equipo@mascotamarket.app`:
  - **Inhabilitar cuenta** corta el acceso de todas las chicas (tarda hasta 1 hora en cerrar las sesiones ya abiertas).
  - **Restablecer contraseña** pone una clave nueva y cierra la sesión en todos los celulares (también en hasta 1 hora): cada una vuelve a poner la clave nueva.

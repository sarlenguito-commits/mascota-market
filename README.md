# Mascota Market · Tareas 🐾

👉 **App:** https://sarlenguito-commits.github.io/mascota-market/

App web para organizar las tareas de limpieza y mantenimiento de los locales **Mascota Market Diagonal** y **Mascota Market Rivadavia**.

Cada empleada entra tocando su nombre (la primera vez en cada celular pone la clave del equipo; la dueña entra con su propia clave) y ve **qué le toca esta semana**. Puede marcar cada tarea como **"Lo hice"** o **"No lo hice"** (con una nota opcional; si no lo hizo, la tarea pasa al día siguiente). La dueña ve informes por local y semana, y el historial del mes.

Además:
- **🔄 Notas de cambio de turno**: quien sale deja escrito lo que tiene que saber quien entra. La última nota de su local le aparece arriba en "Hoy" a la siguiente.
- **📌 Agenda**: Agustina agrega cosas a un día del calendario, para una empleada o para todas. Aparecen con 📌 en el calendario y en "Hoy" ese día.
- **🗒️ Notas del equipo**: notas compartidas que todas pueden ver, escribir, editar y borrar. Dos modos:
  - **📝 Texto**: título (opcional) y texto libre.
  - **✅ Lista**: título, descripción (opcional) e ítems que cualquiera va tildando (se ve quién tildó cada uno y cuántos van).
  - Cada nota tiene un **tiempo de desaparición** (1 día, 3 días, 1 semana, 1 mes). Con **📌 "Hasta que yo la quite"** no vence y solo la puede borrar (o cambiarle el tiempo) quien la escribió.
  - En **"Hoy"** de las chicas, **abajo de todo**, aparecen las notas vigentes con quién la escribió, el día y la hora.
- **🔒 Bloc privado de Agustina** (en Más): notas que solo ve ella.
- **🔔 Recordatorios**: cada uno dice **De:** (quien lo anota) y **Para:** (se elige entre Ailin, Sharon, Sofía o Agustina). A quien va dirigido le aparece en **su "Hoy"** (a Agustina, en **Actividad**). Todas los ven; lo editan o borran quien lo anotó y a quien va dirigido. Cada uno dura un tiempo (1 día, 3 días, 1 semana, 1 mes o hasta una fecha) o queda **sin límite** hasta que lo borren. Agustina entra desde Más.
- **✅ Checklist** (por ahora, de Sharon): la lista de lo que hay que hacer en **Diagonal** y en el **cierre de Rivadavia** (`CHECKLISTS` en `config.js`). Se tilda cada día y **al día siguiente arranca vacío**. En su **"Hoy"** le aparece el del local donde está según el turno; los sábados se resalta que la basura se saca sí o sí. **Agustina ve en Actividad** si se completó o qué faltó, y en Más → Checklist puede ver cualquier día.
- En la barra de las chicas, **Glosario** y **Locales** pasaron al menú **Más**.
- **📖 Glosario**: todas las tareas de los dos locales con quién hace cada una según la semana, el total y un buscador.
- **🚚 Pedidos**:
  - **Proveedores:** arriba, en grande, lo que **se pide hoy** y lo que **llega hoy**. Sale de los días fijos de cada marca (`PEDIDOS` en `config.js`), y Agustina puede cambiar lo de cualquier día, con una nota.
  - **Pedidos de clientes:** cuando una clienta pide algo que no hay, se anota el producto, la cantidad, el local, el nombre, el teléfono, **si pagó** (nada, seña con su monto, o el total con su monto), la forma de pago (si se sabe) y una nota. Cada pedido pasa por ⏳ pendiente → 📦 llegó (avisar al cliente, con botón para llamar) → ✅ entregado, o ❌ cancelado. Al entregarlo o cancelarlo desaparece de la lista. Tiene buscador y filtro por local, y se puede editar o borrar.
  - **📚 Pedidos entregados** (solo Agustina, en Más): el historial de los entregados y los cancelados, por mes, con buscador para ver todo lo que pidió un cliente. Desde ahí se puede deshacer una entrega o volver un cancelado a pendiente.
  - En **"Hoy"** de las chicas, **abajo de las tareas**, aparece "🚚 Pedidos de hoy" con lo de los proveedores y los pedidos de clientes que ya llegaron en su local.

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
   Las reglas cubren `registros`, `tareas`, `notasTurno`, `agenda`, `pedidosClientes`, `pedidosDia`, `notasEquipo`, `recordatorios` y `checklists`. Solo Agustina escribe en `tareas`, `agenda` y `pedidosDia`, y `notasDuena` es privado de ella. **Cada vez que cambia `firestore.rules`, hay que volver a pegarlo y publicarlo en la consola.**
6. **Configuración del proyecto → Tus apps → Web (`</>`)** → registrar app → copiar el objeto `firebaseConfig` en `js/config.js`.
7. **Authentication → Configuración → Dominios autorizados** → agregar el dominio de GitHub Pages (`sarlenguito-commits.github.io`).

## 🔒 Seguridad del acceso
- Las claves viven solo en Firebase: el código de la página (repo público) no tiene ninguna.
- Tras **5 intentos fallidos** el celular queda bloqueado **15 minutos** (`INTENTOS_MAXIMOS` y `MINUTOS_BLOQUEO` en `config.js`). Firebase además frena por su cuenta las ráfagas de intentos.
- En una emergencia, desde **Authentication → Usuarios**, sobre `equipo@mascotamarket.app`:
  - **Inhabilitar cuenta** corta el acceso de todas las chicas (tarda hasta 1 hora en cerrar las sesiones ya abiertas).
  - **Restablecer contraseña** pone una clave nueva y cierra la sesión en todos los celulares (también en hasta 1 hora): cada una vuelve a poner la clave nueva.

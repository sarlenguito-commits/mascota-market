// ============================================
// Configuración de la app: Firebase, personas, locales y tareas.
// Para cambiar asignaciones o sumar tareas, se edita solo este archivo.
// ============================================

// Pegar acá la configuración web de Firebase (Consola > Configuración del proyecto > Tus apps).
// Mientras apiKey diga "PEGAR_AQUI", la app funciona en MODO PRUEBA (datos solo en este navegador).
export const firebaseConfig = {
    apiKey: "AIzaSyCetPJYZNzVrgEBk1v2Mu8uNVXSMEIpUjU",
    authDomain: "mascota-market.firebaseapp.com",
    projectId: "mascota-market",
    storageBucket: "mascota-market.firebasestorage.app",
    messagingSenderId: "928427668031",
    appId: "1:928427668031:web:b9eea1af6fe22c030afe8a"
};

// Día en que empiezan a usar la app: lo anterior no se muestra como pendiente ni cuenta en informes.
export const FECHA_INICIO = "2026-09-24";

// Acceso: Agustina entra con su usuario (agustina@mascotamarket.app) y contraseña.
// Las chicas comparten un usuario del equipo (equipo@mascotamarket.app) con una clave que ponen
// una sola vez por celular; después eligen su nombre. Las claves reales viven solo en Firebase.
export const DOMINIO_LOGIN = "mascotamarket.app";
export const USUARIO_EQUIPO = "equipo";

// Clave del equipo SOLO para el modo prueba (en Firebase la clave es otra y no está en el código).
export const CLAVE_EQUIPO_PRUEBA = "1234";

// Protección contra quien pruebe claves: después de estos intentos fallidos, se bloquea ese celular un rato.
// (Además, Firebase tiene su propio freno del lado del servidor.)
export const INTENTOS_MAXIMOS = 5;
export const MINUTOS_BLOQUEO = 15;

export const PERSONAS = {
    ailin: { nombre: "Ailin", rol: "empleada" },
    sharon: { nombre: "Sharon", rol: "empleada" },
    sofia: { nombre: "Sofía", rol: "empleada" },
    agustina: { nombre: "Agustina", rol: "duena" }
};

// cambioTurno: hora en que el turno mañana pasa al turno tarde.
export const LOCALES = {
    diagonal: {
        nombre: "Diagonal",
        cambioTurno: "14:30",
        turnos: { manana: "sharon", tarde: "sofia" }
    },
    rivadavia: {
        nombre: "Rivadavia",
        cambioTurno: "17:00",
        turnos: { manana: "ailin", tarde: "sharon" }
    }
};

// Tipos de tarea:
//  - "semanal": semana del mes (1 = días 1-7, 2 = 8-14, 3 = 15-21, 4 = 22 a fin de mes) → persona
//  - "lunes":   se hace cada lunes; "persona" fija o "rotacion" que alterna un lunes cada una
//  - "libre":   sin asignar todavía; se muestra hace cuántos días se hizo por última vez
export const TAREAS = [
    // ---------- Rivadavia ----------
    { id: "riv-wash", local: "rivadavia", nombre: "Limpieza a fondo del Wash", tipo: "lunes", persona: "ailin" },
    { id: "riv-espejos", local: "rivadavia", nombre: "Limpieza de todos los espejos", tipo: "semanal", semanas: { 1: "ailin", 3: "sharon" } },
    { id: "riv-bidones", local: "rivadavia", nombre: "Barrer la zona de bolsas grandes y bidones de arena", tipo: "semanal", semanas: { 3: "ailin", 1: "sharon" } },
    { id: "riv-bano", local: "rivadavia", nombre: "Limpieza de baño y zona de cocina", tipo: "semanal", semanas: { 1: "ailin", 3: "ailin", 2: "sharon", 4: "sharon" } },
    { id: "riv-deposito", local: "rivadavia", nombre: "Limpiar y acomodar el depósito", tipo: "semanal", semanas: { 1: "ailin", 3: "sharon" } },
    { id: "riv-estantes", local: "rivadavia", nombre: "Limpieza de todos los estantes (muebles de perros y gatos)", tipo: "semanal", semanas: { 3: "ailin", 1: "sharon" } },
    { id: "riv-pouch", local: "rivadavia", nombre: "Limpieza del mueble de Pouch", tipo: "semanal", semanas: { 4: "ailin", 2: "sharon" } },
    { id: "riv-panos", local: "rivadavia", nombre: "Limpieza de la zona de paños y sílicas", tipo: "semanal", semanas: { 2: "ailin", 4: "sharon" } },
    { id: "riv-camas", local: "rivadavia", nombre: "Limpieza del sector de camas: sacudir camas y repasar muebles", tipo: "semanal", semanas: { 4: "ailin", 2: "sharon" } },
    { id: "riv-vidrios", local: "rivadavia", nombre: "Limpieza a fondo de todos los vidrios", tipo: "semanal", semanas: { 1: "ailin", 3: "sharon" } },
    { id: "riv-vidriera", local: "rivadavia", nombre: "Cambio de vidriera", tipo: "semanal", semanas: { 2: "ailin", 4: "ailin", 1: "sharon", 3: "sharon" } },

    // ---------- Diagonal ----------
    { id: "dia-sieger", local: "diagonal", nombre: "Limpieza con plumero de estantes de Sieger y alimentos", tipo: "semanal", semanas: { 1: "sharon", 3: "sofia" } },
    { id: "dia-estantes", local: "diagonal", nombre: "Limpieza de todos los estantes", tipo: "semanal", semanas: { 2: "sharon", 4: "sharon", 1: "sofia", 3: "sofia" } },
    { id: "dia-pouch", local: "diagonal", nombre: "Limpieza de estantes de Pouch", tipo: "semanal", semanas: { 2: "sharon", 4: "sofia" } },
    { id: "dia-exterior", local: "diagonal", nombre: "Limpieza exterior con plumero (rejas y marcos de ventanas)", tipo: "semanal", semanas: { 3: "sharon", 1: "sofia" } },
    { id: "dia-vidrios", local: "diagonal", nombre: "Limpieza profunda de todos los vidrios", tipo: "semanal", semanas: { 1: "sharon", 3: "sofia" } },
    { id: "dia-bidones", local: "diagonal", nombre: "Barrer y pasar la mopa en la zona de bidones de arena y bolsas grandes", tipo: "semanal", semanas: { 4: "sharon", 2: "sofia" } },
    { id: "dia-bano", local: "diagonal", nombre: "Limpieza de baño y cocina", tipo: "semanal", semanas: { 1: "sharon", 3: "sharon", 2: "sofia", 4: "sofia" } },
    { id: "dia-optimum", local: "diagonal", nombre: "Limpieza de muebles de piedras Optimum", tipo: "semanal", semanas: { 2: "sharon", 4: "sofia" } },
    { id: "dia-panos", local: "diagonal", nombre: "Limpieza de muebles de paños y bandejas", tipo: "semanal", semanas: { 3: "sharon", 1: "sofia" } },
    { id: "dia-camas", local: "diagonal", nombre: "Limpieza de la mesa de camas: sacudir y repasar muebles (repasar también las piedras de abajo)", tipo: "semanal", semanas: { 4: "sharon", 2: "sofia" } },
    { id: "dia-vidriera", local: "diagonal", nombre: "Limpieza y recambio de vidriera", tipo: "semanal", semanas: { 2: "sharon", 4: "sharon", 1: "sofia", 3: "sofia" } },
    // No figura en la lista del 23/09 (a confirmar si sigue). Alterna un lunes cada una desde el lunes de referencia.
    { id: "dia-wash", local: "diagonal", nombre: "Limpieza a fondo del Wash", tipo: "lunes", rotacion: ["sharon", "sofia"], desde: "2026-09-21" }
];

// ---------- Stock ----------
// Productos fijos que aparecen siempre en la sección Stock (las cantidades se cargan desde la app).
// Para sumar uno: { id: "st-dia-sieger-15", local: "diagonal", nombre: "Sieger adulto 15 kg", unidad: "bolsas", minimo: 2 }
// El id no se cambia nunca (con él se guardan las cantidades). Desde la app también se pueden agregar productos.
export const STOCK_BASE = [];

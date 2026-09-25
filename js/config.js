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

// ---------- Pedidos a proveedores ----------
// Qué día se hace el pedido de cada marca y qué día llega (0 = domingo, 1 = lunes … 6 = sábado).
// Se muestra en la sección Pedidos y marca lo que se pide o llega hoy.
export const PEDIDOS = [
    { marcas: ["Royal Canin", "Eukanuba", "Optimum"], dias: [{ pide: 1, llega: 3 }, { pide: 4, llega: 1 }] },
    { marcas: ["Balanced", "Nutrique"], dias: [{ pide: 2, llega: 4 }] },
    { marcas: ["Pro Plan", "Excellent", "Agility", "Sieger"], dias: [{ pide: 3, llega: 5 }] }
];

// Formas de pago para los pedidos de clientes (es opcional: se puede dejar "Todavía no se sabe").
export const FORMAS_PAGO = ["Efectivo", "Transferencia Mercado Pago", "QR Mercado Pago", "Débito", "Crédito"];

// ---------- Checklists (por persona y local) ----------
// Se tildan cada día y al día siguiente arrancan vacíos. En "Hoy" le aparece a la persona el del local
// donde está según su turno, y Agustina ve en Actividad si se completó.
// Cada ítem tiene un id fijo (no cambiarlo: con él se guarda lo tildado). "sabado" = aviso que se resalta los sábados.
export const CHECKLISTS = [
    {
        id: "sharon-diagonal", persona: "sharon", local: "diagonal", titulo: "Diagonal", icono: "📋",
        items: [
            { id: "pava", texto: "Pava desenchufada" },
            { id: "barrer", texto: "Barrer y limpiar el local" },
            { id: "luces", texto: "Luces prendidas y apagadas, según corresponda" },
            { id: "posnet", texto: "Posnet conectado" },
            { id: "comederos", texto: "Estante de comederos y demás sin polvo" },
            { id: "agua", texto: "Cambiar el agua de los perris" },
            { id: "reponer", texto: "Reponer y frentear productos" },
            { id: "llave", texto: "Llave de los candados en la caja" },
            { id: "separar", texto: "Ver si separé cosas (si se pidió)" }
        ]
    },
    {
        id: "sharon-cierre-rivadavia", persona: "sharon", local: "rivadavia", titulo: "Cierre del local · Rivadavia", icono: "🔒",
        items: [
            { id: "aire", texto: "Apagar el aire acondicionado (controlar que quedó apagado)" },
            { id: "basura", texto: "Basura: revisar si hay que sacarla y poner bolsa nueva", sabado: "Hoy es sábado: se saca sí o sí (los 3 tachos)" },
            { id: "productos", texto: "Productos: enviar al grupo los que hay que traer de Diagonal" },
            { id: "wash", texto: "Si se usó el Wash: limpiar los pelos debajo de la reja de la bañera" },
            { id: "balde", texto: "Tirar el agua del balde y limpiarlo" },
            { id: "alfombra", texto: "Entrar la alfombra" },
            { id: "luces", texto: "Apagar luces: vestidor, salón y galpón (depósito)" },
            { id: "compu", texto: "Compu bien enchufada" },
            { id: "cartel", texto: "Apagar el cartel \"Abierto\"" },
            { id: "posnet", texto: "Dejar cargando el posnet" },
            { id: "celu", texto: "Dejar cargando el celu" },
            { id: "luz-afuera", texto: "Luz de afuera prendida" }
        ]
    }
];

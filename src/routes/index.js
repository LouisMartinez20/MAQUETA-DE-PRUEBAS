/**
 * ÍNDICE DE RUTAS DE LA APLICACIÓN
 *
 * Este archivo documenta todas las rutas disponibles en la aplicación.
 * Las rutas están configuradas en routes/routes.jsx
 */

export const ROUTES = {
  // Ruta raíz - redirige a ausencias
  HOME: "/",

  // Módulo de Ausencias
  AUSENCIAS: {
    LIST: "/ausencias",
    CREATE: "/ausencias/reportar",
  },

  // Módulos en desarrollo
  VACACIONES: "/vacaciones",
  INCAPACIDADES: "/incapacidades",
  CERTIFICACIONES: "/certificaciones",
  CONTRATOS: "/contratos",
  CARGOS: "/cargos",
  SOLICITUDES: "/solicitudes",
};

/**
 * Función helper para obtener rutas con parámetros
 * Ejemplo: getRoute(ROUTES.AUSENCIAS.DETAIL, { id: 123 })
 */
export const getRoute = (route, params = {}) => {
  let finalRoute = route;
  Object.keys(params).forEach((key) => {
    finalRoute = finalRoute.replace(`:${key}`, params[key]);
  });
  return finalRoute;
};

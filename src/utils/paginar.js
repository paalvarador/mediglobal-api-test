const { v4: uuidv4 } = require("uuid");

function paginar(datos, pagina, cantidadRegistros) {
  const totalRegistros = datos.length;
  const totalPaginas = Math.ceil(totalRegistros / cantidadRegistros);
  const inicio = (pagina - 1) * cantidadRegistros;
  const registrosPagina = datos.slice(inicio, inicio + cantidadRegistros);

  return {
    entidadResultado: registrosPagina,
    paginaActual: pagina,
    cantidadRegistros: cantidadRegistros,
    totalRegistros,
    totalPaginas,
    hayMasPaginas: pagina < totalPaginas,
    procesoExitoso: true,
    mensaje: "OK",
    codigoMensaje: "OK-000",
    requestId: uuidv4().replace(/-/g, ""),
  };
}

module.exports = { paginar };

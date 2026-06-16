const { Router } = require("express");
const { paginar } = require("../utils/paginar");

const router = Router();

const SUCURSALES = [
  {
    idSucursal: 3,
    nombreSucursal: "MEDIGLOBAL AURORA",
    direccion: "AV LEON FEBRES CORDERO, C.C. PALMORA PLAZA LOCAL 21 AL 25",
    idCiudad: 82,
    nombreCiudad: "DAULE",
  },
  {
    idSucursal: 1,
    nombreSucursal: "MEDIGLOBAL KENNEDY",
    direccion: "CDLA. KENNEDY, CALLE OCTAVA 111 Y AV. SAN JORGE",
    idCiudad: 77,
    nombreCiudad: "GUAYAQUIL",
  },
  {
    idSucursal: 4,
    nombreSucursal: "MEDIGLOBAL SUR",
    direccion: "AV. 25 DE JULIO",
    idCiudad: 77,
    nombreCiudad: "GUAYAQUIL",
  },
];

router.post("/ListarSucursalesCm", (req, res) => {
  const pagina = parseInt(req.body.Pagina) || 1;
  const cantidadRegistros = parseInt(req.body.CantidadRegistros) || SUCURSALES.length;
  res.json(paginar(SUCURSALES, pagina, cantidadRegistros));
});

module.exports = router;

const { Router } = require("express");
const { paginar } = require("../utils/paginar");

const router = Router();

const ESPECIALIDADES = [
  { idEspecialidad: 10, descripcion: "ALERGOLOGIA", teleConsulta: false, codigo: "ALERG" },
  { idEspecialidad: 11, descripcion: "ANESTESIOLOGIA", teleConsulta: false, codigo: "ANEST" },
  { idEspecialidad: 9, descripcion: "CARDIOLOGIA", teleConsulta: true, codigo: "CARDIO" },
  { idEspecialidad: 12, descripcion: "CARDIOLOGIA PEDIAT", teleConsulta: false, codigo: "CARDIPED" },
  { idEspecialidad: 13, descripcion: "CIRUGIA CARDIOVASCULAR", teleConsulta: false, codigo: "CIRUGCARD" },
  { idEspecialidad: 14, descripcion: "CIRUGIA GENERAL", teleConsulta: false, codigo: "CIRUGENER" },
  { idEspecialidad: 15, descripcion: "CIRUGIA PEDIATRICA", teleConsulta: false, codigo: "CIRUGPEDI" },
  { idEspecialidad: 16, descripcion: "CIRUGIA PLASTICA", teleConsulta: false, codigo: "CIRUGPLAS" },
  { idEspecialidad: 17, descripcion: "CIRUGIA VASCULAR", teleConsulta: false, codigo: "CIRUGVASC" },
  { idEspecialidad: 44, descripcion: "CIRUJANOS EXTERNOS", teleConsulta: false, codigo: "CIRUEXT" },
  { idEspecialidad: 18, descripcion: "DERMATOLOGIA", teleConsulta: true, codigo: "DERMA" },
  { idEspecialidad: 19, descripcion: "ENDOCRINOLOGIA", teleConsulta: false, codigo: "ENDOCR" },
  { idEspecialidad: 5, descripcion: "ESPECIALISTA", teleConsulta: false, codigo: "ESPECI" },
  { idEspecialidad: 52, descripcion: "EVALUACION ESTETICA", teleConsulta: false, codigo: "ESTET" },
  { idEspecialidad: 39, descripcion: "FISIATRIA Y REHABILITACION", teleConsulta: false, codigo: "FISIA" },
  { idEspecialidad: 20, descripcion: "FLEBOLOGIA/ CIRUG VASCULAR", teleConsulta: false, codigo: "FLEBOL" },
  { idEspecialidad: 21, descripcion: "GASTROENTEROLOGIA", teleConsulta: false, codigo: "GASTRO" },
  { idEspecialidad: 47, descripcion: "GASTROENTEROLOGIA PED", teleConsulta: false, codigo: "GASPED" },
  { idEspecialidad: 3, descripcion: "GINECOLOGIA Y OBSTET", teleConsulta: true, codigo: "GINECO" },
  { idEspecialidad: 22, descripcion: "HEMATOLOGIA", teleConsulta: false, codigo: "HEMAT" },
  { idEspecialidad: 37, descripcion: "IMAGENOLOGIA", teleConsulta: false, codigo: "IMAGE" },
  { idEspecialidad: 45, descripcion: "MASTOLOGIA", teleConsulta: false, codigo: "MASTO" },
  { idEspecialidad: 53, descripcion: "MEDICINA CLINICA", teleConsulta: false, codigo: "MECLIN" },
  { idEspecialidad: 48, descripcion: "MEDICINA CLINICA MD EXPRESS", teleConsulta: true, codigo: "GENEXP" },
  { idEspecialidad: 49, descripcion: "MEDICINA CLINICA/INTERNISTA", teleConsulta: false, codigo: "MEDCINT" },
  { idEspecialidad: 1, descripcion: "MEDICINA GENERAL", teleConsulta: true, codigo: "GENERA" },
  { idEspecialidad: 4, descripcion: "MEDICINA INTERNA", teleConsulta: false, codigo: "MEDINT" },
  { idEspecialidad: 23, descripcion: "MEDICINA OCUPACIONAL", teleConsulta: false, codigo: "OCUPAC" },
  { idEspecialidad: 40, descripcion: "NEFROLOGIA", teleConsulta: false, codigo: "NEFRO" },
  { idEspecialidad: 24, descripcion: "NEUMOLOGIA", teleConsulta: false, codigo: "NEUMOL" },
  { idEspecialidad: 25, descripcion: "NEUROCIRUGIA", teleConsulta: false, codigo: "NEUCIRUG" },
  { idEspecialidad: 35, descripcion: "NEUROLOGIA", teleConsulta: false, codigo: "NEURO" },
  { idEspecialidad: 43, descripcion: "NEUROLOGIA PEDIATRICA", teleConsulta: false, codigo: "NEUROPED" },
  { idEspecialidad: 26, descripcion: "NUTRIOLOGIA", teleConsulta: false, codigo: "NUTRIO" },
  { idEspecialidad: 27, descripcion: "NUTRIOLOGIA CONTROL", teleConsulta: false, codigo: "NUTRICO" },
  { idEspecialidad: 54, descripcion: "OBSTETRICIA", teleConsulta: false, codigo: "OBST" },
  { idEspecialidad: 6, descripcion: "ODONTOLOGIA", teleConsulta: false, codigo: "ODONT" },
  { idEspecialidad: 28, descripcion: "OFTALMOLOGIA", teleConsulta: false, codigo: "OFTAL" },
  { idEspecialidad: 29, descripcion: "ONCOLOGIA CLINICA", teleConsulta: false, codigo: "ONCOLO" },
  { idEspecialidad: 46, descripcion: "ONCOLOGIA MASTOLOGIA", teleConsulta: false, codigo: "ONCMAS" },
  { idEspecialidad: 50, descripcion: "ONCOLOGIA PEDIATRICA", teleConsulta: false, codigo: "ONCPED" },
  { idEspecialidad: 38, descripcion: "OPERATIVOS MEDIGLOBAL", teleConsulta: false, codigo: "OPERA" },
  { idEspecialidad: 30, descripcion: "OTORRINO", teleConsulta: false, codigo: "OTORR" },
  { idEspecialidad: 2, descripcion: "PEDIATRIA", teleConsulta: true, codigo: "PEDIAT" },
  { idEspecialidad: 31, descripcion: "PROCTOLOGIA", teleConsulta: false, codigo: "PROCT" },
  { idEspecialidad: 32, descripcion: "PSICOLOGIA", teleConsulta: false, codigo: "PSICO" },
  { idEspecialidad: 36, descripcion: "RADIOLOGIA", teleConsulta: false, codigo: "RADIO" },
  { idEspecialidad: 33, descripcion: "REUMATOLOGIA", teleConsulta: false, codigo: "REUMA" },
  { idEspecialidad: 7, descripcion: "TERAPIA FISICA", teleConsulta: false, codigo: "TERAP" },
  { idEspecialidad: 8, descripcion: "TRAUMATOLOGIA", teleConsulta: false, codigo: "TRAUM" },
  { idEspecialidad: 34, descripcion: "UROLOGIA", teleConsulta: false, codigo: "UROLO" },
];

router.post("/ListarEspecialidadesCm", (req, res) => {
  const pagina = parseInt(req.body.Pagina) || 1;
  const cantidadRegistros = parseInt(req.body.CantidadRegistros) || ESPECIALIDADES.length;
  res.json(paginar(ESPECIALIDADES, pagina, cantidadRegistros));
});

module.exports = router;

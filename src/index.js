const express = require("express");

const sucursalesRouter = require("./routes/sucursales");
const especialidadesRouter = require("./routes/especialidades");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/", sucursalesRouter);
app.use("/", especialidadesRouter);

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Mediglobal Test Service corriendo en http://localhost:${PORT}`);
  });
}

module.exports = app;

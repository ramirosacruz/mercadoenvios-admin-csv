const fs = require("fs");

const sqlite3 = require("sqlite3").verbose();

/**
 * GUIA: 
 * deposito{
  id_pieza: 41930984028,
  tipo: 'drop_off',
  direccion: 'forward',
  estado: 'picked_up',
  alto: 5,
  peso: 240,
  ancho: 17,
  largo: 28,
  valor_declarado: 22.9,
  agencia: '542124431_10447',
  id_vendedor: 4990389,
  clave_fiscal: '',
  fecha_ingreso: '2023-01-01T15:10:49-03:00',
  fecha_salida: '2023-01-02T10:04:20-03:00',
  vehiculo_conductor: '',
  actualizado_por: '',
  id_etiqueta: ''
}
 */
let db = new sqlite3.Database("./my.db", (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the my database.');
  });

  const search = "12738921"
  const columnasQueIndique = ["estado", "direccion"]
  db.each(`SELECT ${columnasQueIndique} FROM deposito  WHERE id_pieza > ${search}`, (error, row) => {
    if (error) {
      throw new Error(error.message);
    }
    console.log(row);
  });
  
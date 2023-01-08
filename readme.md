sqlite3

create table deposito(id_pieza INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, tipo, direccion, estado, alto INTEGER, peso INTEGER, ancho INTEGER, largo INTEGER, valor_declarado REAL, agencia, id_vendedor INTEGER, clave_fiscal, fecha_ingreso, fecha_salida, vehiculo_conductor, actualizado_por, id_etiqueta);

.separator ";"

.import reemplame.csv deposito
.save my.db
.exit 

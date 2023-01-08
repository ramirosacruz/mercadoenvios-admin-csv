# Manejador de CSV de Mercadoenvíos
## Instalación


SQLITE (Windows):

```
choco install sqlite
```

Dependencias de NodeJS:
```
npm install
```


## Creamos una base de datos para manipular el .csv de forma optimizada

Entramos en la CLI de SQLITE3
```
sqlite3 
```

Una vez adentro ejecutamos:

``` 
create table deposito(id_pieza INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, tipo, direccion, estado, alto INTEGER, peso INTEGER, ancho INTEGER, largo INTEGER, valor_declarado REAL, agencia, id_vendedor INTEGER, clave_fiscal, fecha_ingreso, fecha_salida, vehiculo_conductor, actualizado_por, id_etiqueta);

.separator ";"

.import reemplame.csv deposito
.save my.db
.exit 
```

## Corremos la aplicación

```
node main.js
```
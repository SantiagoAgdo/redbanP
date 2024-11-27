# Nodejs y Express

### Guia Ejecucion

1. clonar
2. navegar a la carpeta productosapi 
   
Ejecutar proyecto con:

```
node app.js
```
el proyecto se ejecuta por defecto en el purto 3000

### Probar con el sigueinte CURL
```
curl --location 'http://localhost:3000/api/productos' \
--header 'Content-Type: application/json' \
--data '{
  "nombre": "Datafono",
  "precio": 189.99,
  "categoria": "Electrónica",
  "descripcion": "Datafono de alto flujo de Transacciones"
}'
```

CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY COMMENT 'Identificador único para cada producto',
    nombre VARCHAR(100) NOT NULL COMMENT 'Nombre del producto',
    precio DECIMAL(10, 2) NOT NULL COMMENT 'Precio del producto',
    categoria VARCHAR(50) COMMENT 'Categoría a la que pertenece el producto'
) COMMENT='Tabla que almacena los productos';

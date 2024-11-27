const { Pool } = require('pg');
const Joi = require('joi');

const db = new Pool({
    user: 'admin',
    host: 'localhost',
    database: 'productos_db',
    password: 'admin',
    port: 5432,
  });

const productoSchema = Joi.object({
  nombre: Joi.string().min(3).max(100).required(),
  precio: Joi.number().positive().precision(2).required(),
  categoria: Joi.string().max(50).optional(),
  descripcion: Joi.string().optional(),
});

exports.crearProducto = async (request, rpt, next) => {
  const { error, value } = productoSchema.validate(request.body);
  if (error) {
    return next({ status: 400, message: error.details[0].message });
  }

  const { nombre, precio, categoria, descripcion } = value;

  try {
    const query = 
    `
      INSERT INTO productos (nombre, precio, categoria, descripcion)
      VALUES ($1, $2, $3, $4) RETURNING *;
    `;
    const result = await db.query(query, [nombre, precio, categoria, descripcion]);

    rpt.status(201).json({ message: 'Producto agregado', producto: result.rows[0] });
  } catch (e) {
    console.error(e);
    next({ status: 500, message: 'Error al agreegar' });
  }
};

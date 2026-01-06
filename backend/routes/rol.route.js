//defino controlador para el manejo de CRUD
const rolCtrl = require('./../controllers/rol.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de rol.
/**
 * @swagger
 * tags:
 *      name: Rols
 *      description: Gestion de roles de usuarios
 */
/**
 * @swagger
 * /api/rol:
 *      get:
 *          summary: Obtener todos los roles
 *          tags: [Rols]
 *          responses:
 *              200:
 *                 description: Lista de roles
 */
router.get('/', rolCtrl.getRoles);

/**
 * @swagger
 * /api/rol:
 *      post:
 *          summary: Crear un nuevo rol
 *          tags: [Rols]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/Rol'
 *          responses:
 *              201:
 *                  description: Rol creado exitosamente
 */
router.post('/', rolCtrl.createRol);

/**
 * @swagger
 * /api/rol/{id}:
 *   delete:
 *     summary: Eliminar un rol por ID
 *     tags: [Rols]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Rol eliminado
 */
router.delete('/:id', rolCtrl.deleteRol);

/**
 * @swagger
 * /api/rol/{id}:
 *   put:
 *     summary: Editar un rol por ID
 *     tags: [Rols]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Rol'
 *     responses:
 *       200:
 *         description: Rol actualizado
 */
router.put('/:id', rolCtrl.editRol);

/**
 * @swagger
 * /api/rol/obtener-rol/{id}:
 *   get:
 *     summary: Obtener un rol por ID
 *     tags: [Rols]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Rol encontrado
 *         content:
 *           application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Rol'
 *       404:
 *         description: Rol no encontrado
 */
router.get('/obtener-rol/:id', rolCtrl.getRolById);

/**
 * @swagger
 * /api/rol/obtener-rol-por-nombre/{nombre}:
 *   get:
 *     summary: Obtener un rol por nombre
 *     tags: [Rols]
 *     parameters:
 *       - in: path
 *         name: nombre
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Rol encontrado
 */
router.get('/obtener-rol-por-nombre/:nombre', rolCtrl.getRolByName);
//exportamos el modulo de rutas
module.exports = router;
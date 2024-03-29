/*
    path: /api/messages
*/
const { Router } = require('express');
const { validateJWT } = require('../middlewares/validate-jwt');
const { getChat } = require('../controllers/messages');


const router = Router();


router.get('/:to', validateJWT, getChat )



module.exports = router;
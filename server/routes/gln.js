const express = require('express');
const router = express.Router();

const GLN = require('../models/GLN');

// POST /api/gln/create
// create a GLN
router.post('/create', async (req, res) => {
    try{
        const newGLN = {
            code: req.body.code,
            address: req.body.address
        };

        const dataGLN = await GLN.create(newGLN);

        return res.status(201).json({ data: dataGLN });
        
    } catch(err){
        console.error(err);
    }
});

module.exports = router;
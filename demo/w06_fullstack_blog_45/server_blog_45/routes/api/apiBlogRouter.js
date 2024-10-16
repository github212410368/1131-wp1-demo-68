import express from 'express'
const router = express.Router()

import db from '../../utils/database.js'

router.get('/', async (req, res) => {
    try {
        const results = await db.query(`select * from blog_45`)
        res.json(results.rows)
    }catch(error){
        console.log(error)
    }
});

export default router

import express from 'express'

const app= express();

// import db from './utils/database.js'

import db from './utils/database-supabase.js'


app.get('/api/blog_45', async (req, res) => {
    try {
        const results = await db.query(`select * from blog_45`)
        res.json(results.rows)
    }catch(error){
        console.log(error)
    }
});

app.use('/', (req, res, next)=> {
    res.send('Chienchun Liu, 212410145')
});

const port = process.env.PORT || 3000
app.listen(port,() =>{
    console.log(`Sever running on port ${port}`)
})
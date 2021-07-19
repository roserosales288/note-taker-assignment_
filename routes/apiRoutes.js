let dbData = require ('../db/db.json')
const {v4:uuidv4} = require('uuid')
module.exports = (app) => {

    app.get('/api/notes', (req, res) =>{
        
      
        res.json(dbData)



    }) 
    

    app.post('/api/notes',(req, res) => {
          
        req.body.id=uuidv4()

         dbData.push(req.body)

        res.json(dbData)
    })

    app.delete('/api/notes/:id',(req, res) =>{
         const id= req.params.id
         console.log(id)
            dbData =  dbData.filter(note=>{
             return note.id!=id
         })
          res.json(dbData)
    })
}
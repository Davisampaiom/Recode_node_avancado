const connect = require("../../config/db");


module.exports = (app) => {

      app.get("/mensagem", (req, res) => {
        connect.query("SELECT * FROM mensagem", (error, result) => {
          res.json(result);
        });
      });
    
    app.post('/criar_mensagem', (req, res) => {
      let dados= [];
    
      dados.push({
        nome: req.body.nome,
        mensagem:req.body.mensagem,
      })
    
      connect.query("INSERT INTO mensagem SET?", dados, ()=>{
        dados=[]
    
        return res.json({message:"Dados enviados com sucesso!"})
      })
    })


};

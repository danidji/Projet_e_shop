module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send("Salut mec bien")
    })
    app.post('/proceder-paiement', (req, res) => {
        console.log(req.body);
        res.send("/proceder-paiement")
    })

}
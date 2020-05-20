const mongoose = require("mongoose")
// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
mongoose.set('useFindAndModify', false)

const Product = mongoose.model("Product")

module.exports = {
    async show(req,res){
        const product = await Product.findById(req.params.id)
        return res.json(product)
    },
    async index(req, res){
        const {page = 1} = req.query
        const products = await Product.paginate({},{page, limit: 10})
        return res.json(products)
    },
    async store(req,res){
        //Criação de Registro
        const product = await Product.create(req.body)

        return res.json(product)
    },
    async update(req,res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, 
            {new : true}) //para retornar o product antes de atualizar as informações no req.body
        return res.json(product)
    },
    async destroy(req,res){
        await Product.findByIdAndRemove(req.params.id)
        return res.send()
    }
}
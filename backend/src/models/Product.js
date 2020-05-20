const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

//Criação de um modelo de produto
const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    url:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

//implementação de paginação
ProductSchema.plugin(mongoosePaginate)

//implementação do modelo de produto
mongoose.model('Product', ProductSchema)
import mongoose from 'mongoose'

const preprocessSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    image:{
        data: Buffer,
        contentType: String
    }
}, {
    timestamps: true
})

const Preprocess = mongoose.model('Preprocess', preprocessSchema)

export default Preprocess
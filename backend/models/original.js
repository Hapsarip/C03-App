import mongoose from 'mongoose'

const originalSchema = mongoose.Schema({
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

const Original = mongoose.model('Original', originalSchema)

export default Original
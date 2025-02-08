import mongoos from 'mongoose'

export const connectDB = async () => {
    try {
        const conn = await mongoos.connect(process.env.MONGO_URI)
        console.log()
    } catch (error) {
        
    }
}
import { Sequelize } from 'sequelize-typescript'
import dotenv from 'dotenv'
import { NoteModel } from '../model/NoteModel'
dotenv.config()
class Database {
    public sequelize: Sequelize | undefined
    private DB_HOST = process.env.DB_HOST as unknown as string
    private DB_PORT = process.env.DB_PORT as unknown as number
    // private DB_CONNTECTION = process.env.BD_CONNTECTION as unknown as string
    private DB_USER = process.env.DB_USERNAME as unknown as string
    private DB_PASSWORD = process.env.DB_PASSWORD as unknown as string
    private DB_NAME = process.env.DB_DATABASE as unknown as string
    

    constructor(){
        this.initConntection()
    }



    private async initConntection(){
        this.sequelize = new Sequelize({
            database: this.DB_NAME,
            port: this.DB_PORT,
            username: this.DB_USER,
            password:  this.DB_PASSWORD,
            host: this.DB_HOST,
            dialect: "postgres",
            models: [NoteModel]
        })



        await this.sequelize.authenticate().then(()=> {
            console.log("✅ PostgreSQL Connection has been established successfully.")
        }).catch((err)=> {
            console.log("❌ Unable to connect to the PostgreSQL database:", err)
        })
    }
}

export default Database
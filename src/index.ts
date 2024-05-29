import express, { Application, Request, Response } from 'express'
import dotenv from 'dotenv'
import Database from './config/database'
dotenv.config()
class App {
    public app: Application

    constructor(){
        this.app = express()
        this.databaseSync()
        this.routes()
        this.plugin()

    }

    protected plugin():void {
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
        // this.app.use(cookieParser())
        // this.app.use(express.static(path.join(__dirname, 'public')))
        // this.app.set('views', path.join(__dirname, 'views'))
        // this.app.set('view engine', 'ejs')
    }
    protected routes(): void {
        this.app.get('/', (req: Request, res: Response) => {
            res.send('Hello World!')
        })
    }

    protected databaseSync():void{
        const db = new Database
        db.sequelize?.sync()
    }
}

const port: any = process.env.APP_PORT
const app = new App().app

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
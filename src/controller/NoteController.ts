import { Request, Response } from "express";
import { NoteModel } from "../model/NoteModel";
import { NoteService } from "../service/note.service";

class NoteController {
    async create(req: Request, res: Response){
        try {
            const newNote = new NoteModel()
            newNote.title = req.body.title
            newNote.content = req.body.content

            await new NoteService().save(newNote)
            res.status(200).json({
                message: "Note created successfully"
            })
        } catch (error) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }
    
    async delete(req: Request, res: Response){
        try {
            let id = parseInt(req.params['id'])
            await new NoteService().delete(id)

            res.status(200).json({
                message: "Note deleted successfully"
            })
        } catch (error) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }

    async findById(req: Request, res: Response){
        try {
            let id = parseInt(req.params['id'])
            const note = await new NoteService().retriveById(id)
            res.status(200).json({
                message: "Successfully fetched note by id",
                data: note
            })

        } catch (error) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }

    async findAll(req: Request, res: Response){
        try {
            const note = await new NoteService().retriveAll()

            res.status(200).json({
                message: "Successfully fetched all notes",
                data: note
            })
        } catch (error) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }
    async update(req: Request, res: Response){
        try {
            
            let id = parseInt(req.params['id'])
            const updatedNote = new NoteModel()
            updatedNote.title = req.body.title
            updatedNote.content = req.body.content
        }catch(error){
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }
}

export default new NoteController()
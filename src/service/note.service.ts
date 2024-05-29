
import { NoteModel } from "../model/NoteModel";
import INoteRepo from "../repository/NoteRepo";

export class NoteService implements INoteRepo {
    async save(note: NoteModel): Promise<void> {
        try {
            await NoteModel.create({
                title: note.title,
                content: note.content
            })
        } catch (error) {
            throw new Error("Failed to create")
        }
    }
    async update(note: NoteModel): Promise<void> {
        try {
            const newNote = await NoteModel.findOne({
                where: {
                    id: note.id
                }
            })
            if(!newNote){
                throw new Error("Note not found")
            }
            newNote.title = note.title
            newNote.content = note.content

            await newNote.save()
        } catch (error) {
            throw new Error("failed to update");
        }
    }
    async delete(noteId: number): Promise<void> {
        try {
         const newNote = await NoteModel.findOne({
            where: {
                id: noteId
            }
         })   
         if (!newNote) {
            throw new Error("Note not found.")
         }
         await newNote.destroy()
        } catch (error) {
            throw new Error("failed to delete.");  
        }

    }
    async retriveById(noteId: number): Promise<NoteModel> {
        try {
            const newNote = await NoteModel.findOne({
                where: {
                    id: noteId
                }
            })
            if (!newNote) {
                throw new Error("Note not found.")
            }
            return newNote
        } catch (error) {
            throw new Error("Failed to retrive note by id.");
        }
        
    }
    async retriveAll(): Promise<NoteModel[]> {
        try {
            return await NoteModel.findAll()
        } catch (error) {
            throw new Error("Failed to retrive Note");
        }
    }

}
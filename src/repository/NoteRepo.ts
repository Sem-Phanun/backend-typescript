
import { NoteModel } from "../model/NoteModel"

interface INoteRepo{
    save(note: NoteModel): Promise<void>
    update(note: NoteModel): Promise<void>
    delete(noteId: number): Promise<void>
    retriveById(noteId: number): Promise<NoteModel>
    retriveAll(): Promise<NoteModel[]>
}

export default INoteRepo
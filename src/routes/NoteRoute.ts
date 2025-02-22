import BaseRoute from "./base/BaseRoute";
import NoteController from "../controller/NoteController";
import validate from '../helper/validate'
import { createNoteSchema, updateNoteSchema } from '../schema/NoteSchema'

class NoteRoutes extends BaseRoute {
    public routes(): void {
        this.router.post("", validate(createNoteSchema))
        this.router.put(
            "/:id",
            validate(updateNoteSchema),
            NoteController.update
        )
        this.router.delete("/:id", NoteController.delete)
        this.router.get("", NoteController.findAll)
        this.router.get("/:id", NoteController.findById)
    }

}

export default new NoteRoutes().router
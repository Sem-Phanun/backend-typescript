import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript'

@Table
export class NoteModel extends Model{
    public static NOTE_TABLE_NAME = "note" as string
    public static NOTE_ID = "id" as string
    public static NOTE_TITLE = "title" as string
    public static NOTE_CONTENT = "content" as string

    @Column({})
    id!: number

    @Column({})
    title!: string

    @Column({
        type: DataType.TEXT,
    })
    content!: string
}

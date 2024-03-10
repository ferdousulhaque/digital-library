import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: "books",
})
export default class Book extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "id"
  })
  id?: number;

  @Column({
    type: DataType.STRING(255),
    field: "title"
  })
  title?: string;

  @Column({
    type: DataType.STRING(255),
    field: "author"
  })
  author?: string;

  @Column({
    type: DataType.STRING(4),
    field: "publicationYear"
  })
  publicationYear?: string;

  @Column({
    type: DataType.STRING(255),
    field: "summary"
  })
  summary?: string;
}
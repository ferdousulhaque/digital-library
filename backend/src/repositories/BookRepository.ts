import Book from "../models/book";
import { Op, QueryTypes } from "sequelize";
import BookRepoInt from "./BookRepoInt";
import SearchCondition from './SearchConditionInt';
import { config, dialect } from "@config/database";
import { Sequelize } from "sequelize-typescript";

class BookRepository implements BookRepoInt {
    async save(book: Book): Promise<Book> {
        try {
            return await Book.create({
            title: book.title,
            author: book.author,
            summary: book.summary,
            publicationYear: book.publicationYear
            });
        } catch (err) {
            console.log(err)
            throw new Error("Failed to create!");
        }
    }

    async retrieveAll(searchParams: {title?: string}): Promise<Book[]> {
        try {
            let condition: SearchCondition = {};

            if (searchParams?.title)
            condition.title = { [Op.like]: `%${searchParams.title}%` };

            return await Book.findAll({ where: condition });
        } catch (error) {
            console.log(error);
            throw new Error("Failed to retrieve!");
        }
    }

    async retrieveById(bookId: number): Promise<Book | null> {
        try {
            return await Book.findByPk(bookId);
        } catch (error) {
            throw new Error("Failed to retrieve!");
        }
    }

    async update(book: Book): Promise<number> {
        const { id, title} = book;

        try {
            const affectedRows = await Book.update(
            { title },
            { where: { id: id } }
            );

            return affectedRows[0];
        } catch (error) {
            throw new Error("Failed to update!");
        }
    }

    async delete(bookId: number): Promise<number> {
        try {
            const affectedRows = await Book.destroy({ where: { id: bookId } });

            return affectedRows;
        } catch (error) {
            throw new Error("Failed to delete!");
        }
    }

    async deleteAll(): Promise<number> {
        try {
            return Book.destroy({
            where: {},
            truncate: false
            });
        } catch (error) {
            throw new Error("Failed to delete all!");
        }
    }

    async search(searchWords: String) {

        try {
            let sequelize = new Sequelize(
                config.DB,
                config.USER,
                config.PASSWORD,
                {
                    host: config.HOST,
                    dialect: dialect,
                }
            );

            // Replace the SQL query with your own
            const results = await sequelize.query(`
                SELECT *
                FROM ${Book.tableName}
                WHERE _search @@ plainto_tsquery('english', :query);
                `, {
            replacements: { query: searchWords },
            type: QueryTypes.SELECT,
            model: Book
            });

            return results;
        }catch(ex){
            console.log(ex);
        }
    }
}

export default new BookRepository();
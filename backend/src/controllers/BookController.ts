import {Request, Response} from "express";
import BookService from "../services/BookService";
import Book from "../models/book";
import BookRequestValidator from "../validator/bookRequest";


class BookController {

    async index(req: Request, res: Response) {
        try {
            res.status(200).json({
                status: "OK",
                books: await BookService.getBooks()
            });
        } catch (err) {
            res.status(500).json({
                message: "Internal Server Error!"
            });
        }
    }

    async add(req: Request, res: Response) {
        if (!req.body.title || !req.body.author || !req.body.publicationYear || !req.body.summary) {
            res.status(400).send({
                message: "Bad Request!!!",
                errors: BookRequestValidator.validate(req.body).errors
            });
            return;
        }
        try {
            const book: Book = req.body;
            const savedBook = await BookService.addBook(book);

            res.status(201).send(savedBook);
        } catch (err) {
            res.status(500).send({
                message: "Something went wrong",
                errors: err
            });
        }
    }

    async getById(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);

        try {
        const book = await BookService.getById(id);

        if (book) res.status(200).send(book);
        else
            res.status(404).send({
            message: `Cannot find Book No ${id}.`
            });
        } catch (err) {
        res.status(500).send({
            message: `Error retrieving book.`,
            errors: err
        });
        }
    }

    async update(req: Request, res: Response) {
        let book: Book = req.body;
        book.id = parseInt(req.params.id);
        if(Object.keys(req.body).length === 1){
            res.status(400).send({
            message: "No data to update"
        });
        }

        try {
        const num = await BookService.updateById(book);

        if (num == 1) {
            res.send({
            message: "updated successfully."
            });
        }
        } catch (err) {
        res.status(500).send({
            message: "Error updating",
            errors: err
        });
        }
    }

    async delete(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);
        try {
            const book = await BookService.deleteById(id);

            if (book) 
                res.status(200).send({
                    message: "Book deleted"
                });
            else
                res.status(404).send({
                message: `Cannot find Book No ${id}.`
                });
            } catch (err) {
            res.status(500).send({
                message: `Error retrieving book.`,
                errors: err
            });
        }
    }

    async search(req: Request, res: Response) {
        const searchWords: String = req.body.search;
        try {
            let foundBook = await BookService.fullTextSearch(searchWords)
            if (foundBook) 
                res.status(200).send({
                    result: foundBook,
                    message: "Books Founded"
                });
            else{
                res.status(404).send({
                    message: `No Books found.`
                });
            }
        } catch (err) {
            res.status(500).send({
                message: `Error retrieving book.`,
                errors: err
            });
        }
    }
}

export default new BookController()
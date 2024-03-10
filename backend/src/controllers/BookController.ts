import {Request, Response} from "express";
import BookService from "../services/BookService";
import Book from "../models/book";
import BookRequestValidator from "../validator/bookRequest";


class BookController {

    async index(req: Request, res: Response) {
        try {
            res.status(201).json({
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
}

export default new BookController()
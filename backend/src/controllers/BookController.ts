import {Request, Response} from "express";
import BookService from "../services/BookService";


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
}

export default new BookController()
import Book from "models/book"
import BookRepository from "../repositories/BookRepository"
import tedis from '../cache'
import { Tedis } from "tedis";

class BookService {

    async getBooks(): Promise<String|null|number|Book[]>{
        if(await tedis.exists("books")){
            return await tedis.get("books");
        }
        let books = await BookRepository.retrieveAll({})
        if(books.length > 0){
            await tedis.set("books", JSON.stringify(books));
        }
        
        return books
    }
}

export default new BookService();
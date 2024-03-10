import Book from "models/book"
import BookRepository from "../repositories/BookRepository"
import tedis from '../cache'
import { Tedis } from "tedis";

class BookService {

    async getBooks(): Promise<String|number|Book[]>{
        if(await tedis.exists("books")){
            let getFromCache = await tedis.get("books");
            return new Promise<String>((resolve, reject) => {
                if (typeof getFromCache === 'string') {
                    resolve(JSON.parse(getFromCache));
                }
                reject("Failed")
            })
        }
        let books = await BookRepository.retrieveAll({})
        if(books.length > 0){
            await tedis.set("books", JSON.stringify(books));
        }
        
        return books
    }

    async addBook(book: Book): Promise<Book>{
        const savedBook = await BookRepository.save(book);
        await tedis.del("books");
        return savedBook
    }
}

export default new BookService();
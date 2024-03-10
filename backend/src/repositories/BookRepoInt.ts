import Book from "models/book";

interface BookRepoInt {
  save(book: Book): Promise<Book>;
  retrieveAll(searchParams: {title: string}): Promise<Book[]>;
  retrieveById(bookId: number): Promise<Book | null>;
  update(book: Book): Promise<number>;
  delete(bookId: number): Promise<number>;
  deleteAll(): Promise<number>;
}

export default BookRepoInt
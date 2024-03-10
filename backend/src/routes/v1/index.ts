const router = require('express').Router()

import BookCtlr from "@controllers/BookController";

router.get('/books', BookCtlr.index)
router.post('/book', BookCtlr.add)
router.get('/book/:id', BookCtlr.getById)
router.put('/book/:id', BookCtlr.update)
router.delete('/book/:id', BookCtlr.delete)
router.post('/books/search', BookCtlr.search)

export default router
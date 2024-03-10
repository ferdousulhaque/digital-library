const router = require('express').Router()

import BookCtlr from "@controllers/BookController";

router.get('/books', BookCtlr.index)
router.post('/book', BookCtlr.add)
// router.post('/book/:id', BookCtlr.update)
// router.delete('/book/:id', BookCtlr.delete)

export default router
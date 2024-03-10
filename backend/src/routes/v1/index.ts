const router = require('express').Router()

import BookCtlr from "@controllers/BookController";

router.get('/books', BookCtlr.index)

export default router
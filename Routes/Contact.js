const express = require("express")
const { createContact, readContacts, getOneContact, updateContact, deleteContacts } = require("../Controllers/Contact")


const contactRouter = express.Router()

contactRouter.post('/createContact',createContact)

contactRouter.get("/readContact",readContacts)

contactRouter.delete("/deleteContact/:id",deleteContacts)

contactRouter.put('/updateContact/:id',updateContact)

contactRouter.get("/getOneContact/:id",getOneContact)

module.exports = contactRouter
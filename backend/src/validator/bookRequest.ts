import { Validator } from "jsonschema";


class BookRequestValidator{
    private schema: Object;
    private v: Validator;

    constructor(){
        this.v = new Validator();
        this.schema = 
        {
            "id": "/",
            "type": "object",
            "properties": {
                "title": {"type": "string"},
                "author": {"type": "string"},
                "publicationYear": {"type": "string"},
                "summary": {"type": "string"}
            },
            "required": ["title", "author", "publicationYear", "summary"]
        };
    }

    validate(instance: Object){
        return this.v.validate(instance, this.schema);
    }

}

export default new BookRequestValidator;



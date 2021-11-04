
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'hello' })
export class Hello {
    constructor(message: String) {
        this.salutation = message;
    }
    
    @Field()
    salutation: String;

}
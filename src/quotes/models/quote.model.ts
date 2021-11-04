import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Quote {
    constructor(message: String) {
        this.message = message;
      }

  @Field()
  message: String
  
}
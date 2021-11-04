
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'task' })
export class Task {
  @Field(type => ID)
  id: number;

  @Field()
  title: string

  @Field()
  description: string

  @Field()
  status: boolean
}

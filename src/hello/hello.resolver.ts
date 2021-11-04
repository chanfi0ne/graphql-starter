import { NotFoundException } from '@nestjs/common';
import { Args, Query, Resolver, /*Mutation, Subscription*/ } from '@nestjs/graphql';
//import { PubSub } from 'graphql-subscriptions';

import { Hello } from './models/hello.model';
import { HelloService } from './hello.service';

//const pubSub = new PubSub();

@Resolver(of => Hello)
export class HelloResolver {
  constructor(private readonly service: HelloService) {}

  @Query(returns => Hello)
  async greet(@Args('subject') subject: string): Promise<Hello> {
    return await this.service.greet(subject);
  }

}
import { NotFoundException } from '@nestjs/common';
import { Args, Query, Resolver, /*Mutation, Subscription*/ } from '@nestjs/graphql';
//import { PubSub } from 'graphql-subscriptions';

import { Quote } from './models/quote.model';
import { QuoteService } from './quote.service';

//const pubSub = new PubSub();

@Resolver((of) => Quote)
export class QuoteResolver {
  constructor(private readonly service: QuoteService) {}

  @Query((returns) => Quote, { nullable: true })
  async quote(): Promise<Quote> {
    return await this.service.getDailyQuote();
  }

}

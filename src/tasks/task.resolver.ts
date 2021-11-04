import { NotFoundException } from '@nestjs/common';
import { Args, Query, Resolver, /*Mutation, Subscription*/ } from '@nestjs/graphql';
//import { PubSub } from 'graphql-subscriptions';

import { Task } from './models/task.model';
import { TaskService } from './task.service';

//const pubSub = new PubSub();

@Resolver((of) => Task)
export class TaskResolver {
  constructor(private readonly service: TaskService) {}

  @Query((returns) => [Task], { nullable: true })
  async tasks(): Promise<Task[]> {
    return await this.service.getTasks();
  }

}

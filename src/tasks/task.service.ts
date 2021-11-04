
import { Injectable } from '@nestjs/common';
import { Task } from './models/task.model';

@Injectable()
export class TaskService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  private tasks: Task[] = []

  async getTasks(): Promise<Task[]> {
    return await this.tasks;
  }

}
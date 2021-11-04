
import { Injectable } from '@nestjs/common';
import { Hello } from './models/hello.model';

@Injectable()
export class HelloService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  async greet(subject: String): Promise<Hello> {
    return new Hello(subject) as any;
  }

}
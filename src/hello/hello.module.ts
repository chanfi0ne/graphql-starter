import { Module } from '@nestjs/common';
//import { DateScalar } from '../common/scalars/date.scalar';
import { HelloResolver } from './hello.resolver';
import { HelloService } from './hello.service';

@Module({
  providers: [HelloResolver, HelloService],
})
export class HelloModule {}
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { HelloModule } from './hello/hello.module';
import { TaskModule } from './tasks/task.module';
import { QuoteModule } from './quotes/quote.module';

@Module({
  imports: [
    HelloModule,
    TaskModule,
    QuoteModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
  ],
})
export class AppModule {}
import { Module } from '@nestjs/common';
//import { DateScalar } from '../common/scalars/date.scalar';
import { QuoteResolver } from './quote.resolver';
import { QuoteService } from './quote.service';

@Module({
  providers: [QuoteResolver, QuoteService],
})
export class QuoteModule {}

import { Injectable } from '@nestjs/common';
import { Quote } from './models/quote.model';
import axios, { AxiosResponse} from 'axios'

@Injectable()
export class QuoteService {

  async getDailyQuote(): Promise<Quote> {
    const url ="https://zenquotes.io/api/random/";

    const response: AxiosResponse<[{q: string}]> = await axios.get(url);
   
    return new Quote(response.data[0].q);
  }

}
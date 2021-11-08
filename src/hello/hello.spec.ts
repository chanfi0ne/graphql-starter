import { Test, TestingModule } from '@nestjs/testing';  
import { HelloResolver } from './hello.resolver';  
import { HelloService } from './hello.service';  
import { Hello } from './models/hello.model';
  
describe('AppController', () => {  
 let service: HelloService;  
  
 beforeEach(async () => {  
   const app: TestingModule = await Test.createTestingModule({  
     providers: [HelloService],  
   }).compile();  
  
   service = app.get<HelloService>(HelloService);  
 });  
  
 describe('root', () => {  
   it('should return a "hello object"', () => {  
     const expected = {salutation: "test"}
     service.greet("test").then(x=> {
        expect(x).toEqual(expected);  
     });
   });  
 });  
});  
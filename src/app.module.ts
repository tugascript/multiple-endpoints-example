import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';
import { addGqlModule } from './utilities/add-gql-module';

@Module({
  imports: [
    CatsModule,
    DogsModule,
    addGqlModule('cats', [CatsModule]),
    addGqlModule('dogs', [DogsModule]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

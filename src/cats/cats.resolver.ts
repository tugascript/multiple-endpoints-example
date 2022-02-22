import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class CatsResolver {
  @Query(() => String)
  public getCats() {
    return 'Hello from cats';
  }
}

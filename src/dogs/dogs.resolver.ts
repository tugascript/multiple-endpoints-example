import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class DogsResolver {
  @Query(() => String)
  public getDogs() {
    return 'Hello from dogs';
  }
}

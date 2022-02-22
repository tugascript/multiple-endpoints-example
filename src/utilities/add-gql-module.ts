/* eslint-disable @typescript-eslint/ban-types */
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { DynamicModule } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

export function addGqlModule(name: string, modules: Function[]): DynamicModule {
  return GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    playground: true,
    autoSchemaFile: true,
    include: modules,
    path: `/api/${name}`,
  });
}

import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Lesson } from "./lesson/lesson.entity";
import { LessonModule } from "./lesson/lesson.module";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true,
      driver: ApolloDriver,
    }),
    LessonModule,
    TypeOrmModule.forRoot({
      type: "mongodb",
      url: "mongodb://localhost:root:root:27017/school",
      synchronize: true,
      useUnifiedTopology: true,
      entities: [Lesson],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

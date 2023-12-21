import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Lesson } from "./lesson/lesson.entity";
import { LessonModule } from "./lesson/lesson.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mongodb",
      url: "mongodb://admin:root@localhost:27017", // Corrected URL format
      useNewUrlParser: true,
      useUnifiedTopology: true,
      entities: [Lesson],
      synchronize: true,
    }),

    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true,
      driver: ApolloDriver,
    }),
    LessonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Mutation, Query, Resolver } from "@nestjs/graphql";
import { LessonType } from "./lesson.type";

@Resolver(LessonType)
export class LessonResolver {
  @Query(() => LessonType)
  Lesson() {
    return {
      id: "sdfsdf",
      name: "Physics Class",
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }

  @Mutation(() => LessonType)
  createLesson() {
    return {
      name: "Physics Class",
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }
}

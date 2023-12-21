import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { LessonService } from "./lesson.service";
import { LessonType } from "./lesson.type";

@Resolver(LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}

  @Query(() => LessonType)
  Lesson(@Args("id") id: string) {
    return this.lessonService.getLesson(id);
  }

  @Query(() => [LessonType])
  Lessons() {
    return this.lessonService.getLessons();
  }

  @Mutation(() => LessonType)
  createLesson(
    @Args("name") name: string,
    @Args("startDate") startDate: string,
    @Args("endDate") endDate: string,
  ) {
    return this.lessonService.createLesson(name, startDate, endDate);
  }
}

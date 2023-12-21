import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { LessonInputDto } from "./lesson.input.dto";
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
  createLesson(@Args("createLessonInput") createLessonInput: LessonInputDto) {
    return this.lessonService.createLesson(createLessonInput);
  }
}

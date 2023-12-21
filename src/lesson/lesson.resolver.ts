import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from "@nestjs/graphql";
import { StudentService } from "../student/student.service";
import { AssignStudentDto } from "./assign-student.dto";
import { Lesson } from "./lesson.entity";
import { LessonInputDto } from "./lesson.input.dto";
import { LessonService } from "./lesson.service";
import { LessonType } from "./lesson.type";

@Resolver(LessonType)
export class LessonResolver {
  constructor(
    private lessonService: LessonService,
    private studentService: StudentService,
  ) {}

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

  @Mutation(() => LessonType)
  assignStudentsToLesson(
    @Args("assignStudentDto") assignStudentDto: AssignStudentDto,
  ) {
    return this.lessonService.assignStudentsToLesson(assignStudentDto);
  }

  @ResolveField()
  async students(@Parent() lesson: Lesson) {
    return this.studentService.getManyStudents(lesson.students);
  }
}

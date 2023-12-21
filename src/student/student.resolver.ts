import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { StudentInputDto } from "./create-student.input.dto";
import { StudentService } from "./student.service";
import { StudentType } from "./student.type";

@Resolver()
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Query(() => StudentType)
  Student(@Args("id") id: string) {
    return this.studentService.getStudent(id);
  }

  @Query(() => [StudentType])
  Students() {
    return this.studentService.getStudents();
  }

  @Mutation(() => StudentType)
  createStudent(@Args("createStudentDto") createStudentDto: StudentInputDto) {
    return this.studentService.createStudent(createStudentDto);
  }
}

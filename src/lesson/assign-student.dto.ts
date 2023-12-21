import { Field, ID, InputType } from "@nestjs/graphql";
import { IsUUID } from "class-validator";

@InputType()
export class AssignStudentDto {
  @IsUUID()
  @Field(() => ID)
  lessonId: string;

  @IsUUID("4", { each: true })
  @Field(() => [ID])
  studentIds: string[];
}

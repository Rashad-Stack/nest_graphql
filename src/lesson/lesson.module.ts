import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StudentModule } from "src/student/student.module";
import { LessonController } from "./lesson.controller";
import { Lesson } from "./lesson.entity";
import { LessonResolver } from "./lesson.resolver";
import { LessonService } from "./lesson.service";

@Module({
  providers: [LessonResolver, LessonService],
  controllers: [LessonController],
  imports: [TypeOrmModule.forFeature([Lesson]), StudentModule],
})
export class LessonModule {}

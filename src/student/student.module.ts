import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Student } from "./student.entity";
import { StudentResolver } from "./student.resolver";
import { StudentService } from "./student.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([Student]), // Add this
  ],
  providers: [StudentService, StudentResolver],
  exports: [StudentService], // Add this
})
export class StudentModule {}

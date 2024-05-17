import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { CommonModule } from 'src/common/common.module';
import { Task, TaskSchema } from './schema/tasks.schema';
import { TaskRepository } from './repository/task.repository';
import { UsersModule } from 'src/users/users.module';
import { TasksService } from './tasks.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Task.name,
        schema: TaskSchema,
      },
    ]),
    forwardRef(() => AuthModule),
    CommonModule,
    UsersModule,
  ],
  providers: [TaskRepository, TasksService],
})
export class TasksModule {}

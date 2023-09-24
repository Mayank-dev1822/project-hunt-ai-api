import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbService } from './db/db.service';
import { ProjectsController } from './projects/projects.controller';
import { ProjectsModule } from './projects/projects.module';
import { OpenAiService } from './open-ai/open-ai.service';

@Module({
  imports: [ProjectsModule],
  controllers: [AppController, ProjectsController],
  providers: [AppService, DbService, OpenAiService],
})
export class AppModule {}

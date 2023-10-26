import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MulterModule } from '@nestjs/platform-express';

import { PdfController } from './controller/pdf/pdf.controller';
import { PdfService } from './service/pdf/pdf.service';

@Module({
  imports: [
    MulterModule.register({
      dest: './uploads',
    }),
  ],
  controllers: [AppController, PdfController],
  providers: [AppService, PdfService],
})
export class AppModule {}

import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as pdf from 'pdf-parse';

@Injectable()
export class PdfService {
  async uploadPdf(file: Express.Multer.File): Promise<string> {
    const dataBuffer = fs.readFileSync(file.path);
    const data = await pdf(dataBuffer);
    return data.text;
  }
}

import fs from 'fs';
import { DataReader } from './dataReader';

export class CsvFileReader implements DataReader {
  constructor(private fileName: string) {}

  read(): string[][] {
    return fs
      .readFileSync(this.fileName, {
        encoding: 'utf-8'
      })
      .split('\n')
      .map((row: string): string[] => row.split(','));
  }
}

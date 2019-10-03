import fs from 'fs';

export class CsvFileReader {
  static read(fileName: string): string[][] {
    return fs
      .readFileSync(fileName, {
        encoding: 'utf-8'
      })
      .split('\n')
      .map((row: string): string[] => row.split(','));
  }
}

import fs from 'fs';

export abstract class CsvFileReader<RowType> {
  abstract parseRow(row: string[]): RowType;

  read(fileName: string): RowType[] {
    return fs
      .readFileSync(fileName, {
        encoding: 'utf-8'
      })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map(this.parseRow);
  }
}

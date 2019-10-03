import fs from 'fs';
import { dateStringToDate } from './utils';
import { MatchResult } from './matchResult';

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class CsvFileReader {
  static read(fileName: string): MatchData[] {
    return fs
      .readFileSync(fileName, {
        encoding: 'utf-8'
      })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map(this.parseRow);
  }

  static parseRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6]
    ];
  }
}

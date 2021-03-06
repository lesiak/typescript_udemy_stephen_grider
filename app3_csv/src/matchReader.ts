import { dateStringToDate } from './utils';
import { MatchResult } from './matchResult';
import { DataReader } from './dataReader';
import { MatchData } from './matchData';

export class MatchReader {
  constructor(private dataReader: DataReader) {}

  read(): MatchData[] {
    return this.dataReader.read().map(this.parseRow);
  }

  parseRow(row: string[]): MatchData {
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

import { Analyzer } from '../matchReportRunner';
import { MatchData } from '../matchData';
import { MatchResult } from '../matchResult';

export class WinsAnalyzer implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;
    for (let match of matches) {
      if (match[1] === this.team && match[5] === MatchResult.HomeWin) {
        wins++;
      }
      if (match[2] === this.team && match[5] === MatchResult.AwayWin) {
        wins++;
      }
    }
    return `Team ${this.team} won ${wins} games`;
  }
}

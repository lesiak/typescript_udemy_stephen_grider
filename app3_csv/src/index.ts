import { CsvFileReader } from './csvFileReader';
import { MatchResult } from './matchResult';
import { MatchReader } from './matchReader';

const matches = new MatchReader(new CsvFileReader('football.csv')).read();

let manUnitedWins = 0;
for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  }
  if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);

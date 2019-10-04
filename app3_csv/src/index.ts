import { CsvFileReader } from './csvFileReader';
import { MatchReader } from './matchReader';
import { MatchReportRunner } from './matchReportRunner';
import { WinsAnalyzer } from './analyzers/winsAnalyzer';
import { ConsoleReportTarget } from './reportTargets/consoleReportTarget';

const matches = new MatchReader(new CsvFileReader('football.csv')).read();
const matchReportRunner = new MatchReportRunner(
  new WinsAnalyzer('Man United'),
  new ConsoleReportTarget()
);
matchReportRunner.buildAndPrintReport(matches);

import { OutputTarget } from '../matchReportRunner';

export class ConsoleReportTarget implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}

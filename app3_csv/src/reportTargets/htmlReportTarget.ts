import fs from 'fs';
import { OutputTarget } from '../matchReportRunner';

export class HtmlReportTarget implements OutputTarget {
  print(report: string): void {
    const html = `
    <html>
      <body>
        <div>
          <h1>Analysis Output</h1>
          <div>${report}</div>
        </div>
      </body>
    </html>
    `;
    fs.writeFileSync('report.html', html);
  }
}

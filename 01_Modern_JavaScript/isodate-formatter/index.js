import { formatISODate, formatToRelativeTime, formatToFullDate, formatToShortDate } from './utils/formatDate.js';
import chalk from 'chalk';

const testDates = [
  '2023-01-01T12:34:56Z',
  '2022-06-15T08:22:30Z',
  '2021-03-20T14:10:45Z',
  '2020-11-25T17:45:00Z',
  '2019-07-30T19:00:00Z'
];

testDates.forEach(date => {
  console.log(chalk.blue(`Original ISO Date: ${date}`));
  console.log(chalk.green(`Readable Format: ${formatISODate(date)}`));
  console.log(chalk.yellow(`Relative Time: ${formatToRelativeTime(date)}`));
  console.log(chalk.magenta(`Full Date: ${formatToFullDate(date)}`));
  console.log(chalk.cyan(`Short Date: ${formatToShortDate(date)}`));
  console.log(chalk.red('----------------------------'));
});

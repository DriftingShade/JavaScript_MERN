import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime.js';
import customParseFormat from 'dayjs/plugin/customParseFormat.js';

dayjs.extend(relativeTime);
dayjs.extend(customParseFormat);

export function formatISODate(isoDate) {
  return dayjs(isoDate).format('MMMM D, YYYY, h:mm:ss A [UTC]');
}

export function formatToRelativeTime(isoDate) {
  return dayjs(isoDate).fromNow();
}

export function formatToFullDate(isoDate) {
  return dayjs(isoDate).format('dddd, MMMM D, YYYY');
}

export function formatToShortDate(isoDate) {
  return dayjs(isoDate).format('MM/DD/YYYY');
}

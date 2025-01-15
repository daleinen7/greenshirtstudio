export function concatenateName(first_name, last_name) {
  return `${first_name}${last_name ? ` ${last_name}` : ''}`;
}

export function producePositionString(positions) {
  return positions.map((position) => position.name).join(', ');
}

function isValidDate(date_string) {
  // Regular expression to match the format YYYY-MM-DD
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(date_string)) return false;

  const [year, month, day] = date_string.split('-').map(Number);
  // Check for valid month (01 to 12)
  if (month < 1 || month > 12) return false;

  const days_in_month = new Date(year, month, 0).getDate(); // Get the number of days in the given month
  if (day < 1 || day > days_in_month) return false;

  return true;
}

export function dashToSlashDate(date) {
  if (!isValidDate(date)) throw new Error('Invalid Date');
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
}

export function dashToReadableDate(date) {
  if (!isValidDate(date)) return date;

  const [year, month, day] = date.split('-');
  const date_obj = new Date(year, month - 1, day);
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(date_obj);
}

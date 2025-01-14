export function concatenateName(first_name, last_name) {
  return `${first_name}${last_name ? ` ${last_name}` : ''}`;
}

export function producePositionString(positions) {
  return positions.map((position) => position.name).join(', ');
}

export function dashToSlash(date) {
  // TODO: add a `date` guard
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
}

export function dashToReadableDate(date) {
  const [year, month, day] = date.split('-');
  const date_obj = new Date(year, month - 1, day);
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date_obj);
}

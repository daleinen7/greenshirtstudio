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

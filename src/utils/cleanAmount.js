/**
 * Removes '.00' from the end of a formatted currency string
 * but preserves the currency symbol and decimals when needed.
 *
 * Examples:
 * - '£50.00' => '£50'
 * - '£50.25' => '£50.25'
 * - '€1000.00' => '€1000'
 * - '€1000.50' => '€1000.50'
 *
 * @param {string} amountStr - The formatted currency string (e.g. '£50.00')
 * @returns {string} - Cleaned formatted string
 */
export function cleanFormattedAmount(amountStr) {
  if (typeof amountStr !== 'string') return '0.00';
  return amountStr.replace(/(\.\d{2})$/, (match) =>
    match === '.00' ? '' : match
  );
}
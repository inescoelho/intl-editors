import { InjectedIntl } from 'react-intl';
import memoizeIntlConstructor from 'intl-format-cache';

// Use a memoized formatter as creating instances of Intl formats is an expensive operation
const getNumberFormat = memoizeIntlConstructor(Intl.NumberFormat);

export const intlStyle = {
  DECIMAL: 'decimal',
  PERCENT: 'percent',
  CURRENCY: 'currency'
};

export const defaultFractionDigits = {
  DECIMAL: 2,
  PERCENT: 2
};

export const extraFractionDigits = {
  RATE: 2,
  TECH_RATE: 4
};

// Find the default minimum fraction digits for a locale and currency code
export function getDefaultFractionDigitsForLocale(locale: string, options?: Intl.NumberFormatOptions) {
  const numberFormat = getNumberFormat(locale, options);
  const { minimumFractionDigits, maximumFractionDigits } = numberFormat.resolvedOptions();
  return { minimumFractionDigits, maximumFractionDigits };
}

export function getDecimalSeparator({ formatNumber }: InjectedIntl) {
  const testValue = formatNumber(1.1);
  return testValue[1];
}

export function parseDecimal(value: unknown, decimalSeparator: string, allowNegative: boolean) {
  // Return the value as-is if it's already a number
  if (typeof value === 'number') {
    return value;
  }

  if (typeof value === 'string') {
    if (value.trim() === '') {
      return undefined;
    }

    // Build regex to strip out everything except digits and decimal point
    const regex = new RegExp(`[^0-9${decimalSeparator}]`, 'g');
    const isNegative = allowNegative && /^-/.test(value);
    const parsedValue = parseFloat(
      value
        .replace(regex, '') // strip out any cruft
        .replace(decimalSeparator, '.') // make sure decimal point is standard
    );

    if (!Number.isNaN(parsedValue)) {
      return isNegative ? parsedValue * -1 : parsedValue;
    }
  }

  return undefined;
}

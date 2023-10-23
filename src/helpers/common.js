import moment from "moment"

/**
 * Formats a date into a string in the format "YYYY/MM/DD".
 *
 * @param {Date} date - The date to be formatted.
 * @returns {string} The formatted date string.
 *
 * @example
 * GetDateString(new Date()); // Returns "2023/10/22"
 */
export function GetDateString(date) {
    return moment(date).format("YYYY/MM/DD")
}

/**
 * Formats a number into a currency string in Saudi Riyal (SR).
 *
 * @param {number} number - The number to be formatted.
 * @returns {string} The formatted currency string.
 *
 * @example
 * GetCurrency(1234567); // Returns "1,234,567 SR"
 */
export function GetCurrency(number) {
    return new Intl.NumberFormat("en-US").format(number) + " SR"
}
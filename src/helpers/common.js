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
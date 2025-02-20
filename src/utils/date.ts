import dayjs from 'dayjs'

/**
 * 格式化为 YYYY-MM-DD
 * @param date 要进行格式化的日期字符串
 * @returns 格式化后的字符串
 */
export function formatToYMD(date?: string | Date) {
  return date ? dayjs(date).format('YYYY-MM-DD') : ''
}

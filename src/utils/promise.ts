/**
 * 睡眠给定时长之后 Promise 被解析
 * @param duration 时长，单位毫秒
 * @returns
 */
export function sleep(duration: number) {
  return new Promise<void>((resolve) => {
    window.setTimeout(resolve, duration)
  })
}

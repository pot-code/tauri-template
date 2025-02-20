/**
 * 时长枚举，适用于 setTimeout 和 setInterval 等场景
 */
export enum Time {
  Millisecond = 1,
  Second = Millisecond * 1000,
  Minute = Second * 60,
  Hour = Minute * 60,
  Day = Hour * 24,
}

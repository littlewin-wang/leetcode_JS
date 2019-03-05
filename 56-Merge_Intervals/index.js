/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function (intervals) {
  if (!intervals.length) return intervals

  let ret = []

  let handle = intervals
    .sort((a, b) => a.start - b.start)
    .reduce((prev, next) => {
      if (prev.end >= next.start) {
        return new Interval(prev.start, Math.max(prev.end, next.end))
      } else {
        ret.push(prev)
        return next
      }
    })

  handle && ret.push(handle)
  return ret
};

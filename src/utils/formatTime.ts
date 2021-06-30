import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

const formatTime = (date: string): string => {
  const now = dayjs()
  const time = dayjs(date)
  if (time.isAfter(now.subtract(7, 'day'))) { // 七天内的返回现在到当前实例的相对时间
    return time.fromNow()
  } else if (time.isSame(now, 'year')) { // 今年的显示 MM-DD
    return time.format('MM-DD')
  } else { // 显示 YYYY-MM-DD
    return time.format('YYYY-MM-DD')
  }
}

export default formatTime

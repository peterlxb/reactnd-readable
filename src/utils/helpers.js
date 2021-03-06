export const showDate = timestamp => {
  var a = new Date(timestamp)
  var months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]
  var year = a.getFullYear()
  var month = months[a.getMonth()]
  var date = a.getDate()
  var hour = a.getHours()
  hour = ('00' + hour).slice(-2)
  var min = a.getMinutes()
  min = ('00' + min).slice(-2)
  // var sec = a.getSeconds();
  // sec = ('00'+sec).slice(-2);
  var time =
    date + ' ' + month + ' ' + year + ' ' + hour + ':' + min /*+ ':' + sec */
  return time
}

export const sortByScore = (a, b) => {
  if (a.voteScore > b.voteScore) return -1
  if (a.voteScore < b.voteScore) return 1
  return 0
}

export const sortByDate = (a, b) => {
  if (a.timestamp > b.timestamp) return -1
  if (a.timestamp < b.timestamp) return 1
  return 0
}

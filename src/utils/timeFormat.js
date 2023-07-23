export const DateFormatData = date => {
  const dateVal = new Val(date);
  const datestring =
    ('0' + dateVal.getDate()).slice(-2) +
    '/' +
    ('0' + (dateVal.getMonth() + 1)).slice(-2) +
    '/' +
    d.getFullYear();
  return datestring;
};

//  format('HH:mm am/pm');
export const TimeFormatedData = date => {
  const dateVal = new Date(date);
  let h = d.getHours();
  let ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12;
  h = h ? h : 12;
  const value =
    ('0' + h).slice(-2) + ':' + ('0' + dateVal.getMinutes()).slice(-2) + ampm;
  return value;
};

//  format('YYYY-MM-DD HH:mm:ss');
export const DateTimeFormatedData = date => {
  const d = new Date(date);
  const value =
    d.getFullYear() +
    '-' +
    ('0' + (d.getMonth() + 1)).slice(-2) +
    '-' +
    ('0' + d.getDate()).slice(-2) +
    ' ' +
    ('0' + d.getHours()).slice(-2) +
    ':' +
    ('0' + d.getMinutes()).slice(-2) +
    ':' +
    ('0' + d.getSeconds()).slice(-2);
  return value;
};

//  format('DD-MM-YYYY HH:mm');
export const SetDateFormate = date => {
  const d = new Date(date);
  const h = d.getHours();
  const ampm = h >= 12 ? 'PM' : 'AM';
  const value =
    d.toString().replace(/\S+\s(\S+)\s(\d+)\s(\d+)\s.*/, '$2 $1 $3') +
    '   ' +
    ('0' + (d.getHours() % 12)).slice(-2) +
    ':' +
    ('0' + d.getMinutes()).slice(-2) +
    ampm;
  return value;
};

//  format('DD-MM-YYYY HH:mm');
export const DateFormate = date => {
  const d = new Date(date);
  const value = d
    .toString()
    .replace(/\S+\s(\S+)\s(\d+)\s(\d+)\s.*/, '$2 $1 $3');
  return value;
};

// time format GMT+530
export const TimeZone = date => {
  const fulltime = new Date(date);
  const timeZone = fulltime.toString().match(/([A-Z]+[\+-][0-9]+)/)[1];
  return timeZone;
};

// time format mm: ss

export const TimeMinutesSeconds = num => {
  return num.toString().padStart(2, '0');
};

export const formatRemainingTime = time => {
  const min = Math.floor((time % 3600) / 60);
  const sec = time % 60;

  return `${'0' + min}:${sec < 10 ? '0' + sec : sec}`;
};

export const youtube_parser = url => {
  var regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : false;
};

export const getTimeDifference = (a, b) => {
  return Math.abs(a - b);
};

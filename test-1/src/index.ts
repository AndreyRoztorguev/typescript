const enum Days {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

function getMyDay(): Days {
  return Days["Friday"];
}
getMyDay();
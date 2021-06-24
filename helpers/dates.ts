import moment, { Moment } from "moment";

export const getDates = (dateStart: Moment, dateEnd: Moment) => {
  var dateDiffs = [];
  var count = Math.round(moment.duration(dateStart.diff(dateEnd)).asMonths());

  let month = dateEnd.month() + 1;
  let year = dateEnd.year();

  for (var i = 1; i <= count; i++) {
    if (month > 12) {
      month = 1;
      year++;
    }

    dateDiffs.push(moment(`${year}/${month}`, "YYYY/M").format("YYYY-MM"));
    month++;
  }

  return dateDiffs;
};

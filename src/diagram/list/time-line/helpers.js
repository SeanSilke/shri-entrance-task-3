import { END_DATA, START_DATA } from "../../../data/constants";

export const getFreeSlots = data => {
  let lastElement = data[data.length - 1];
  const last = {
    dateStart: lastElement.dateStart,
    dateEnd: END_DATA
  };

  const firsts = data.map((Meeting, id) => {
    let dateStart;
    if (id === 0) {
      dateStart = START_DATA;
    } else {
      dateStart = data[id - 1].dateEnd;
    }
    return { dateEnd: Meeting.dateStart, dateStart };
  });

  return [...firsts, last];
};

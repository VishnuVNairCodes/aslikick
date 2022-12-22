const dateObject = new Date();

const currentHours = dateObject.getHours();
const currentMinutesWithoutFormatting = dateObject.getMinutes();
const currentMinutes =
  currentMinutesWithoutFormatting < 10
    ? `0${currentMinutesWithoutFormatting}`
    : `${currentMinutesWithoutFormatting}`;

const currentTime24Hour = `${currentHours}:${currentMinutes}`;
const currentTime12Hour = `${currentHours % 13}:${currentMinutes}`;

const getCurrentTime = (is24HourPreferred) => {
  if (is24HourPreferred) {
    return currentTime24Hour;
  }
  return currentTime12Hour;
};

const getPartOfTheDay = () => {
  if (currentHours >= 4 && currentHours <= 12) {
    return "morning";
  } else if (currentHours > 12 && currentHours < 5) {
    return "afternoon";
  } else if (currentHours >= 5 && currentHours < 9) {
    return "evening";
  } else {
    return "night";
  }
};

export { getCurrentTime, getPartOfTheDay };

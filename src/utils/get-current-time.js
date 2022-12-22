const getCurrentTime = () => {
  const dateObject = new Date();

  const currentHours = dateObject.getHours();
  const currentMinutesWithoutFormatting = dateObject.getMinutes();
  const currentMinutes =
    currentMinutesWithoutFormatting < 10
      ? `0${currentMinutesWithoutFormatting}`
      : `${currentMinutesWithoutFormatting}`;

  const currentTime24Hour = `${currentHours}:${currentMinutes}`;

  return currentTime24Hour;
};

export { getCurrentTime };

export const maskInfo = (key: string) => {
  if (!key) return "";
  if (key.length <= 5) return key; // If key is too short, don't mask

  const firstThree = key.substring(0, 3);
  const lastTwo = key.substring(key.length - 2);
  const middleLength = key.length - 5;
  const asterisks = "*".repeat(middleLength);

  return `${firstThree}${asterisks}${lastTwo}`;
};

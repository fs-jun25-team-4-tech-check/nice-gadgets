export const capitalizeFirstletter = (str: string) => {
  return str[0].toUpperCase() + str.slice(1);
};

export const getItemNameByItemId = (itemId: string) => {
  if (!itemId) return '';
  return itemId
    .split('-')
    .map((word) => capitalizeFirstletter(word))
    .join(' ');
};

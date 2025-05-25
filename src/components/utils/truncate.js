export const truncateText = (text, maxLength = 500) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength);
  };

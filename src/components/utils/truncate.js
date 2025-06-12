export const truncateText = (text, isTextExpanded) => {
  if (typeof text !== "string") return "";
  if (window.innerWidth <= 600 && !isTextExpanded && text.length > 100) {
    return text.slice(0, 100) + "...";
  }
  return text;
};

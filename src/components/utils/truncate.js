export const truncateText = (text, isTextExpanded) => {
  if (typeof text !== "string") return ""; // Защита от undefined/null
  // Обрезаем только при ширине <= 600px и если текст не развернут
  if (window.innerWidth <= 600 && !isTextExpanded && text.length > 100) {
    return text.slice(0, 100) + "...";
  }
  return text;
};
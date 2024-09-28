export function dateFormat(dateStr) {
  const date = new Date(dateStr);

  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });

  return formattedDate;
}

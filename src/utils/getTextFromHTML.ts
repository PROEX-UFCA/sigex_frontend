export default function getTextFromHTML({
  htmlString,
}: {
  htmlString: string;
}) {
  const parser = new DOMParser();

  const document = parser.parseFromString(htmlString, "text/html");

  return document.body.textContent || "";
}

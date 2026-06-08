import { useMemo } from "react";

export default function getTextFromHTML({ htmlString }: { htmlString: string }) {
  const result = useMemo(() => {
    const parser = new DOMParser();

    const document = parser.parseFromString(htmlString, "text/html");

    return document.body.textContent || "";
  }, [htmlString])

  return result;
}

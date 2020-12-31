import { useEffect } from "react";

const useDocumentTitle = (title) => {
  return useEffect(() => {
    document.title = `glo-world | ${title}`;
  }, [title]);
};

export default useDocumentTitle;

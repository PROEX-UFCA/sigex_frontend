import { useState } from "react";
import { useNavigate } from "react-router";

export const useSearch = () => {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event: React.SubmitEvent) => {
    event.preventDefault();
    if (term) {
      navigate(`/search/${term}`);
    }
  };

  return { term, setTerm, handleSearch };
};

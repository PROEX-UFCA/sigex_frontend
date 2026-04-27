import { searchProjectsByTitle } from "@/services/projectServices";
import { useState } from "react";
import { useNavigate } from "react-router";

export const useSearch = () => {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = async (event: React.SubmitEvent) => {
    event.preventDefault();
    if (term) {
      const results = await searchProjectsByTitle(term);
      navigate(`/search/${term}`);
    }
  };

  return { term, setTerm, handleSearch };
};

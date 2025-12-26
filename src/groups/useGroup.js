import { useState, useEffect } from "react";

export const useGroup = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const loadGroups = async () => {
      const response = await fetch("/groups");
      const data = await response.json();
      setGroups(data);
      setIsLoading(false);
    };

    loadGroups();
  }, []);

  return { isLoading, groups };
};

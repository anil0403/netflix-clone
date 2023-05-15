import useSWR from "swr";
import fetcher from "@/lib/fetcher";

import React from "react";

const usefavorites = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/favorites", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false, 
  });
  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default usefavorites;

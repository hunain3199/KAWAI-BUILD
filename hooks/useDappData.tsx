import { useState } from "react";

const UseDappData = () => {

  const fetchDappData = async () => {
    const url = "/api/dapp/data";
    const res = await fetch(url, {
        method: "POST",
    });
    const result = await res.json();
    return result;
  }

  return { fetchDappData }
    
}

export default UseDappData
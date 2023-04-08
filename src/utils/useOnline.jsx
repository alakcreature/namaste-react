import { useEffect, useState } from "react";

function useOnline() {
  const [status, setStatus] = useState(false);
  useEffect(()=>{
    const handleOnline = ()=>{
        console.log("hey...");
        setStatus(true);
    };

    const handleOffline = ()=>{
        setStatus(false);
    }
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return ()=>{
        window.removeEventListener("online", handleOnline);
        window.removeEventListener("offline", handleOffline);
    }
  },[]);
  return status;
}

export default useOnline
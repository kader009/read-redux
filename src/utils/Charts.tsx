import { useEffect } from "react";
import { Connection } from "../pages/Connection";

const Charts = () => {

  useEffect(() =>{
    const connection = Connection()
    connection.connect()

    return () =>{
      connection.disconnect()
    }
  },[])
  return <div>this is our charts components</div>;
};

export default Charts;

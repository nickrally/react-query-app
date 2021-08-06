import { useState, useEffect } from "react";
import useFetch from "../../fetch/use-fetch";
import RallyBarChart from "../Chart/RallyBarChart";
import RallyPieChart from "../Chart/RallyPieChart";
const Wsapi = ({ chart }) => {
  const [wsapiData, setWsapiData] = useState([]);
  const { loading, error, makeRequest: makeWsapiRequest } = useFetch();
  useEffect(() => {
    console.log("useEffect in Wsapi component");
    const scheduleStates = ["In-Progress", "Accepted"];
    const apiKey = process.env.REACT_APP_APIKEY;
    const workspace = process.env.REACT_APP_WORKSPACE;
    const project = process.env.REACT_APP_PROJECT;
    const headers = {
      zsessionid: apiKey,
      "Content-Type": "application/json",
    };
    const wsapiUrl = "https://rally1.rallydev.com/slm/webservice/v2.0";
    const type = "HierarchicalRequirement";
    const params = [];
    const packgeWsapiData = (results) => {
      const data = scheduleStates.map((scheduleState, i) => {
        return {
          [scheduleState]: results[i].data["QueryResult"]["TotalResultCount"],
        };
      });
      setWsapiData(data);
    };
    for (const scheduleState of scheduleStates) {
      params.push({
        workspace: `workspace/${workspace}`,
        query: `((Project.ObjectID = ${project})AND(ScheduleState = ${scheduleState}))`,
      });
    }
    const url = `${wsapiUrl}/${type}`;
    makeWsapiRequest({ url: url, headers: headers }, params, packgeWsapiData);
  }, [makeWsapiRequest]);
  return (
    <div>
      {loading && <div className="loader">Loading...</div>}
      {error && <div className="error">{error} </div>}
      {chart === "bar" && <RallyBarChart data={wsapiData} />}
      {chart === "pie" && <RallyPieChart data={wsapiData} />}
    </div>
  );
};

export default Wsapi;

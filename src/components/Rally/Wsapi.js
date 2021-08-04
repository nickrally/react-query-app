import axios from "axios";
import { useQuery } from "react-query";

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

for (const scheduleState of scheduleStates) {
  params.push({
    workspace: `workspace/${workspace}`,
    query: `((Project.ObjectID = ${project})AND(ScheduleState = ${scheduleState}))`,
  });
}

const url = `${wsapiUrl}/${type}`;
const requests = [];
for (const paramObj of params) {
  requests.push(
    axios({
      url: url,
      method: "GET",
      headers: headers,
      body: {},
      params: paramObj,
    })
  );
}

const Wsapi = ({ getData }) => {
  console.log("Wsapi ...");

  const { status, data, error, isLoading } = useQuery(
    "fetchStories",
    async () => {
      const result = await axios.all(requests);
      getData(result);
      return result;
    }
  );

  return (
    <div>
      {isLoading && <div className="loader">Loading...</div>}
      {error && <div className="error">OH NO </div>}
    </div>
  );
};

export default Wsapi;

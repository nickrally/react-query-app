import axios from "axios";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import BarRechart from "../Chart/BarRechart";
import PieRechart from "../Chart/PieRechart";

const queryClient = new QueryClient();
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
console.log(params);
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
  const packgeWsapiData = (results) => {
    console.log("packageWsapiData...");
    console.log(results);
    scheduleStates.map((scheduleState, i) => {
      return {
        [scheduleState]: results[i].data["QueryResult"]["TotalResultCount"],
      };
    });
  };

  const { status, data, error, isLoading } = useQuery(
    "fetchStories",
    async () => {
      const result = await axios.all(requests);
      console.log("result");
      console.log(result);
      getData(result);
      return result;
    }
  );
  console.log("data in here...");
  return (
    <div>
      {isLoading && <div className="loader">Loading...</div>}
      {error && <div className="error">OH NO </div>}
    </div>
  );
};

export default Wsapi;
/* export default function storiesWithQueryClientProvider() {
  return (
    <QueryClientProvider client={queryClient}>
      <Wsapi getData={props.getData}/>
    </QueryClientProvider>
  ); 
}*/

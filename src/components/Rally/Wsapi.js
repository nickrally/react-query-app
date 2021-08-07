import axios from "axios";
import React from "react";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import RallyBarChart from "../Chart/RallyBarChart";
import RallyPieChart from "../Chart/RallyPieChart";

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

const Wsapi = ({ chart }) => {
  const { data, error, isLoading } = useQuery("fetchStories", async () => {
    return await axios.all(requests);
  });

  return (
    <React.Fragment>
      {isLoading && <div className="loader">Loading...</div>}
      {error && <div className="error">{error.message}</div>}
      {!isLoading && !error && chart === "pie" && <RallyPieChart data={data} />}
      {!isLoading && !error && chart === "bar" && <RallyBarChart data={data} />}
      <ReactQueryDevtools initialIsOpen={false} />
    </React.Fragment>
  );
};

const WrappedWsapi = ({ chart }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Wsapi chart={chart} />
    </QueryClientProvider>
  );
};

export default React.memo(WrappedWsapi);

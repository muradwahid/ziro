import { createBrowserRouter } from "react-router-dom"
import ProjectLayOut from "../Layout/ProjectLayOut/ProjectLayOut"
import ApplicationForm from "../pages/ApplicationForm/ApplicationForm"
import FreelancerList from "../pages/FreelancerList/FreelancerList"
import Home from "../pages/Home/Home"
import JobDetails from "../pages/JobDetails/JobDetails"
import JobList from "../pages/JobList/JobList/JobList"
import LastEventList from "../pages/LastEventList/LastEventList/LastEventList"
export const routes = createBrowserRouter([
  {
    path: '/', element: <ProjectLayOut />, children: [
      { path: '/', element: <Home /> },
      { path: '/joblist', element: <JobList /> },
      { path: '/jobdetails', element: <JobDetails /> },
      { path: '/application-form', element: <ApplicationForm /> },
      { path: 'freelancer-list', element: <FreelancerList /> },
      {path:"event-list",element:<LastEventList/>}
  ]}
])
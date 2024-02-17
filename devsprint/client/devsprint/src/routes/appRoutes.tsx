
import { RouteType } from "./config";
import HomePage from "../pages/All/HomePage";
import CppPage from "../pages/Computer Science Engineering/CppPage";
import ComputerScienceLayout from "../pages/Computer Science Engineering/ComputerScienceLayout";
import DataSciencePage from "../pages/Computer Science Engineering/DataSciencePage";
import JavaScriptPage from "../pages/Computer Science Engineering/JavaScriptPage";
import  MachineLearningPage from "../pages/Computer Science Engineering/MachineLearningPage";
import PythonPage from "../pages/Computer Science Engineering/PythonPage";
import DesignPage from "../pages/Computer Science Engineering/DesignPage";

import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <ComputerScienceLayout />,
    state: "CSE"
  },
  
  {
    path: "/computer-science-engineering",
    element: <ComputerScienceLayout />,
    state: "CSE",
    sidebarProps: {
      displayText: "Computer Science Engineering",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        path: "/computer-science-engineering/data-science",
        element: <DataSciencePage />,
        state: "datascience",
        sidebarProps: {
          displayText: "Data Science"
        },
      },
      {
        path: "/computer-science-engineering/machine-learning",
        element: <MachineLearningPage />,
        state: "ml",
        sidebarProps: {
          displayText: "Machine Learning"
        },
      },
      {
        path: "/computer-science-engineering/python",
        element: <PythonPage />,
        state: "python",
        sidebarProps: {
          displayText: "Python"
        },
      },
      {
        path: "/computer-science-engineering/javascript",
        element: <JavaScriptPage />,
        state: "javascript",
        sidebarProps: {
          displayText: "JavaScript"
        },
      },
      {
        path: "/computer-science-engineering/design",
        element: <DesignPage />,
        state: "design",
        sidebarProps: {
          displayText: "Design"
        },
      },
      {
        path: "/computer-science-engineering/cpp",
        element: <CppPage />,
        state: "cpp",
        sidebarProps: {
          displayText: "C++"
        },
      }
    ]
  },
  // {
  //   path: "/mechanical-engineering",
  //   element: <DashboardPageLayout />,
  //   state: "mechanical-engineering",
  //   sidebarProps: {
  //     displayText: "Mechanical Engineering",
  //     icon: <DashboardOutlinedIcon />
  //   },
  //   child: [
  //     {
  //       path: "/mechanical-engineering/solidworks",
  //       element: <SolidWorksPage />,
  //       state: "solidworks",
  //       sidebarProps: {
  //         displayText: "SolidWorks"
  //       },
  //     }
  //   ]
  // },
  // {
  //   path: "/civil-engineering",
  //   element: <DashboardPageLayout />,
  //   state: "civil-engineering",
  //   sidebarProps: {
  //     displayText: "Civil Engineering",
  //     icon: <DashboardOutlinedIcon />
  //   },
  //   child: [
  //     {
  //       path: "/civil-engineering/solidworks",
  //       element: <SolidWorksPage />, // Assuming SolidWorks page can be shared
  //       state: "solidworks",
  //       sidebarProps: {
  //         displayText: "SolidWorks"
  //       },
  //     },
  //     {
  //       path: "/civil-engineering/autocad",
  //       element: <AutoCadPage />,
  //       state: "autocad",
  //       sidebarProps: {
  //         displayText: "AutoCad"
  //       },
  //     }
  //  ]
  //}
];

export default appRoutes;

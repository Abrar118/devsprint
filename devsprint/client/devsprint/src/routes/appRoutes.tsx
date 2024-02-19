import { RouteType } from "./config";
import HomePage from "../pages/All/HomePage";
import CppPage from "../pages/Computer Science Engineering/CppPage";
import ComputerScienceLayout from "../pages/Computer Science Engineering/ComputerScienceLayout";
import DataSciencePage from "../pages/Computer Science Engineering/DataSciencePage";
import JavaScriptPage from "../pages/Computer Science Engineering/JavaScriptPage";
import MachineLearningPage from "../pages/Computer Science Engineering/MachineLearningPage";
import PythonPage from "../pages/Computer Science Engineering/PythonPage";
import DesignPage from "../pages/Computer Science Engineering/DesignPage";
import MechanicalLayoutLayout from "../pages/Mechanical Engineering/MechanicalLayout";
import SolidWorksPage from "../pages/Mechanical Engineering/SolidWorksPage";
import ThermoDynamicsPage from "../pages/Mechanical Engineering/ThermoDynamicsPage";
import CivilEngineeringLayout from "../pages/Civil Engineering/CivilEngineeringLayout";
import AutoCadPage from "../pages/Civil Engineering/AutoCadPage";
import ElectricalEngineeringLayout from "../pages/Electrical and Electronics Engineering/ElectricalLayout";
import ArduinoPage from "../pages/Electrical and Electronics Engineering/ArduinoPage";
import EmbeddedSystemsPage from "../pages/Electrical and Electronics Engineering/EmbeddedSystemsPage";
import MatlabPage from "../pages/Electrical and Electronics Engineering/MatlabPage";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';


const appRoutes: RouteType[] = [
  {
    path: "/",
    element: <HomePage />,
    state: "home",
    sidebarProps: {
      displayText: "Home",
      icon: <DashboardOutlinedIcon />
    }
  },
  {
    index: false,
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
  {
    path: "/mechanical-engineering",
    element: <MechanicalLayoutLayout />,
    state: "mechanical-engineering",
    sidebarProps: {
      displayText: "Mechanical Engineering",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        path: "/mechanical-engineering/solidworks",
        element: <SolidWorksPage />,
        state: "solidworks",
        sidebarProps: {
          displayText: "SolidWorks"
        },
      },
      {
        path: "/mechanical-engineering/thermodynamics",
        element: <ThermoDynamicsPage />,
        state: "thermodynamics",
        sidebarProps: {
          displayText: "ThermoDynamics"
        },
      }
    ]
  },
  {
    path: "/civil-engineering",
    element: <CivilEngineeringLayout />,
    state: "civil-engineering",
    sidebarProps: {
      displayText: "Civil Engineering",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      
      {
        path: "/civil-engineering/autocad",
        element: <AutoCadPage />,
        state: "autocad",
        sidebarProps: {
          displayText: "AutoCad"
        },
      }
   ]
  },
  {
    path: "/electrical-engineering",
    element: <ElectricalEngineeringLayout />,
    state: "electrical-engineering",
    sidebarProps: {
      displayText: "Electrical Engineering",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        path: "/electrical-engineering/arduino",
        element: <ArduinoPage />,
        state: "arduino",
        sidebarProps: {
          displayText: "Arduino"
        },
      },
      {
        path: "/electrical-engineering/embedded-systems",
        element: <EmbeddedSystemsPage />,
        state: "embedded-systems",
        sidebarProps: {
          displayText: "Embedded Systems"
        },
      },
      {
        path: "/electrical-engineering/matlab",
        element: <MatlabPage />,
        state: "matlab",
        sidebarProps: {
          displayText: "Matlab"
        },
      }
    ]
  }
];

export default appRoutes;

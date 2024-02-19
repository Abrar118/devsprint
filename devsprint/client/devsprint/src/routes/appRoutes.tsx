
import HomePage from "../pages/All/HomePage";
import CppPage from "../pages/Computer Science Engineering/CppPage";
import ComputerScienceLayout from "../pages/Computer Science Engineering/ComputerScienceLayout";
import DataSciencePage from "../pages/Computer Science Engineering/DataSciencePage";
import JavaScriptPage from "../pages/Computer Science Engineering/JavaScriptPage";
import MachineLearningPage from "../pages/Computer Science Engineering/MachineLearningPage";
import PythonPage from "../pages/Computer Science Engineering/PythonPage";
import DesignPage from "../pages/Computer Science Engineering/DesignPage";
import SolidWorksPage from "../pages/Mechanical Engineering/SolidWorksPage";
import ThermoDynamicsPage from "../pages/Mechanical Engineering/ThermoDynamicsPage";
import CivilEngineeringLayout from "../pages/Civil Engineering/CivilEngineeringLayout";
import AutoCadPage from "../pages/Civil Engineering/AutoCadPage";
import ElectricalEngineeringLayout from "../pages/Electrical and Electronics Engineering/ElectricalLayout";
import ArduinoPage from "../pages/Electrical and Electronics Engineering/ArduinoPage";
import EmbeddedSystemsPage from "../pages/Electrical and Electronics Engineering/EmbeddedSystemsPage";
import MatlabPage from "../pages/Electrical and Electronics Engineering/MatlabPage";

import MechanicalLayout from "../pages/Mechanical Engineering/MechanicalLayout";
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import DvrOutlinedIcon from '@mui/icons-material/DvrOutlined';
import ElectricalServicesOutlinedIcon from '@mui/icons-material/ElectricalServicesOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import PrecisionManufacturingOutlinedIcon from '@mui/icons-material/PrecisionManufacturingOutlined';


const appRoutes = [
  {
    path: "/education-resources-hub", 
    element: <HomePage />,
    state: "home",
    sidebarProps: {
      displayText: "Education Resources Hub",
      icon: <SchoolOutlinedIcon />
    },
    child: [
      
      {
        path: "computer-science-engineering", 
        element: <ComputerScienceLayout />,
        state: "computer-science-engineering",
        sidebarProps: {
          displayText: "Computer Science Engineering",
          icon: <DvrOutlinedIcon />
        },
        child: [
          {
            path: "data-science",
            element: <DataSciencePage />,
            state: "data-science",
            sidebarProps: {
              displayText: "Data Science"
            }
          },
          {
            path: "machine-learning", 
            element: <MachineLearningPage />,
            state: "machine-learning",
            sidebarProps: {
              displayText: "Machine Learning"
            }
          },
          {
            path: "python", 
            element: <PythonPage />,
            state: "python",
            sidebarProps: {
              displayText: "Python"
            }
          },
          {
            path: "javascript",
            element: <JavaScriptPage />,
            state: "javascript",
            sidebarProps: {
              displayText: "JavaScript"
            }
          },
          {
            path: "cpp",
            element: <CppPage />,
            state: "cpp",
            sidebarProps: {
              displayText: "C++"
            }
          },
          {
            path: "design", 
            element: <DesignPage />,
            state: "design",
            sidebarProps: {
              displayText: "Design"
            }
          }
       
        ]
      },
     
      {
        path: "electrical-engineering", // Relative path
        element: <ElectricalEngineeringLayout />,
        state: "electrical-engineering",
        sidebarProps: {
          displayText: "Electrical Engineering",
          icon: <ElectricalServicesOutlinedIcon />
        },
        child: [
          {
            path: "arduino", // Relative path
            element: <ArduinoPage />,
            state: "arduino",
            sidebarProps: {
              displayText: "Arduino"
            }
          },
          {
            path: "embedded-systems", // Relative path
            element: <EmbeddedSystemsPage />,
            state: "embedded-systems",
            sidebarProps: {
              displayText: "Embedded Systems"
            }
          },
          {
            path: "matlab", // Relative path
            element: <MatlabPage />,
            state: "matlab",
            sidebarProps: {
              displayText: "Matlab"
            }
          }
         
        ]
      },
      {
        path: "mechanical-engineering", 
        element: <MechanicalLayout />,
        state: "mechanical-engineering",
        sidebarProps: {
          displayText: "Mechanical Engineering",
          icon: <PrecisionManufacturingOutlinedIcon />
        },
        child: [
          {
            path: "solidworks", 
            element: <SolidWorksPage />,
            state: "solidworks",
            sidebarProps: {
              displayText: "SolidWorks"
            }
          },
          {
            path: "thermodynamics", 
            element: <ThermoDynamicsPage />,
            state: "thermodynamics",
            sidebarProps: {
              displayText: "ThermoDynamics"
            }
          }
          
        ]
      },
      {
        path: "civil-engineering", 
        element: <CivilEngineeringLayout />,
        state: "civil-engineering",
        sidebarProps: {
          displayText: "Civil Engineering",
          icon: <ApartmentOutlinedIcon />
        },
        child: [
          {
            path: "autocad", 
            element: <AutoCadPage />,
            state: "autocad",
            sidebarProps: {
              displayText: "AutoCad"
            }
          }
        ]
      }
    ]
  }
];

export default appRoutes;



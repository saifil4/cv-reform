import { useState } from "react";
import UploadResume from "./steps/UploadResume";
import { invoke } from "@tauri-apps/api/tauri";
import JobDescription from "./steps/JobDescription";
import ActionCenter from "./steps/ActionCenter";
import DownloadResume from "./steps/DownloadResume";
import "./App.css";


function App() {

  const [steps, setSteps] = useState([
    {
      id: 1,
      title: 'Upload Resume',
      completed: false,
      component: <UploadResume />
    },
    {
      id: 2,
      title: 'Job Description',
      completed: false,
      component: <JobDescription />
    },
    {
      id: 3,
      title: 'Action Center',
      completed: false,
      component: <ActionCenter />
    },
    {
      id: 4,
      title: 'Download Resume',
      completed: false,
      component: <DownloadResume />
    },
  ]);

  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="h-full">
      <div className="h-12">
        <div className="h-full flex justify-center items-center">
          <div className="flex gap-4">
            {
              steps.map((s) => (
                <div className={`h-8 w-8 rounded-full flex items-center justify-center text-white ${s.id === step ? "bg-indigo-600" : "bg-slate-400"}`}>
                  {s.id}
                </div>
              ))
            }
          </div>
          <div className="line"></div>
        </div>
      </div>
      <div className="h-[calc(100%-6rem)] p-5">
        {steps.map((s) => s.id === step ? s.component : null)}
      </div>
      <div className="h-12">
        <div className="flex flex-row px-5 justify-center items-center gap-3">
          {step > 1 && (
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md" onClick={handlePrevious}>Previous</button>
          )}
          {step < 4 && (
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md" onClick={handleNext}>Next</button>
          )}
        </div>
      </div>

    </div>
  );
}


export default App;

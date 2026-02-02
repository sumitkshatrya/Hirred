"use client";

import { useState } from "react";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import Stepthree from "./components/StepThree";
import StepIndicator from "./components/StepIndicator";
import { postRequirement } from "./lib/api";

export default function Page() {
  const [step, setStep] = useState<number>(1);

  const [data, setData] = useState<{
    hireType?: string;
    details?: Record<string, any>;
  }>({
    details: {},
  });

  const updateDetails = (updates: Record<string, any>) => {
    setData((prev) => ({
      ...prev,
      details: {
        ...prev.details,
        ...updates,
      },
    }));
  };

  const submit = async () => {
    await postRequirement(data);
    setStep(4); 

    setTimeout(() => {
    window.location.href = "/requirements";
  }, 1500);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 card">
      <h1 className="flex justify-center text-3xl text-amber-600 font-bold">Hired Event-Management </h1>
      <StepIndicator step={step} />

      {step === 1 && (
        <StepOne
          data={data}
          setData={setData}
          next={() => setStep(2)}
        />
      )}

      {step === 2 && (
        <StepTwo
          data={data}
          setData={setData}
          next={() => setStep(3)}
          back={() => setStep(1)}
        />
      )}

      {step === 3 && (
        <>
          <Stepthree
            data={data}
            setData={setData}
            back={()=>setStep(2)}
            submit={submit}
          />
        </>
      )}

      {/* ✅ SUCCESS STEP */}
      {step === 4 && (
        <div className="text-center space-y-4">
          <h2 className="text-lg font-semibold">
             Requirement Posted Successfully
          </h2>

        <button
      className="btn w-full"
      onClick={() => {
        window.location.href = "/requirements";
      }}
    >
      View All Requirements
    </button>


          <button
            className="btn-outline w-full"
            onClick={() => {
              setData({ details: {} });
              setStep(1);
            }}
          >
            Post Another Requirement
          </button>
        </div>
      )}
    </div>
  );
}

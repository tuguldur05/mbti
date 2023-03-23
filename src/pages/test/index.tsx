import { useState } from "react";
import { EISection } from "../../widgets/EI";

import {
  questions,
  SNquestions,
  TFQuestions,
  JPQuestions,
} from "../../utils/questions";
import { Progress } from "antd";
export const TestPage = () => {
  const [step, setStep] = useState<number>(1);
  const percentageCalc = () => {
    const val = (step / 4) * 100;
    return val;
  };
  return (
    <div>
      <Progress
        percent={percentageCalc()}
        strokeColor={"#33A474"}
        style={{ padding: "0px 10%" }}
      />
      {step === 1 && (
        <EISection
          setStep={setStep}
          questions={questions}
          type="ei"
          step={step}
        />
      )}
      {step === 2 && (
        <EISection
          setStep={setStep}
          questions={SNquestions}
          type="sn"
          step={step}
        />
      )}
      {step === 3 && (
        <EISection
          setStep={setStep}
          questions={TFQuestions}
          type="tf"
          step={step}
        />
      )}

      {step === 4 && (
        <EISection
          setStep={setStep}
          questions={JPQuestions}
          type="jp"
          step={step}
        />
      )}
    </div>
  );
};

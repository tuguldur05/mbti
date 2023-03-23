import { Dispatch, useState } from "react";
import { useTest } from "./useTest";
import { Button } from "antd";
import { ArrowRightOutlined, CheckOutlined } from "@ant-design/icons";
import { ResultModel } from "../Modal/result";
export interface Question {
  id: string;
  text: string;
  extrovert: boolean;
  options: any;
}
export const EISection = ({
  setStep,
  questions,
  type,
  step,
}: {
  setStep: Dispatch<number>;
  questions: any[];
  type: "ei" | "sn" | "tf" | "jp";
  step: number;
}) => {
  const {
    selectedOptions,
    handleSubmit,
    handleOptionChange,
    isOpen,
    setIsOpen,
    testType,
  } = useTest({
    setStep,
    type,
  });

  const change = (index: number) => {
    switch (index) {
      case 0:
        return "choice1";
      case 1:
        return "choice2";
      case 2:
        return "choice3";
      case 3:
        return "choice4";
      case 4:
        return "choice5";
    }
  };
  return (
    <>
      <ResultModel isOpen={isOpen} setIsOpen={setIsOpen} testType={testType} />
      <form onSubmit={handleSubmit} className="container">
        <div className="questions">
          {questions.map((question, i) => (
            <div key={question.id} className="child-questions">
              <p>{question.text}</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {question.options.map((option: any, index: number) => (
                  <label key={option.value} style={{ padding: "0px .4rem" }}>
                    <input
                      type="radio"
                      id={change(index)}
                      className="text-golog"
                      name={question.id}
                      value={option.value}
                      checked={selectedOptions[i]?.value === option.value}
                      onChange={(e) => handleOptionChange(e, question)}
                    />
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Button htmlType="submit" className="submit-btn" type="primary">
          {step === 4 ? "Дуусгах" : "Дараах"}
          {step === 4 ? <CheckOutlined /> : <ArrowRightOutlined />}
        </Button>
      </form>
    </>
  );
};

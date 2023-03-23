import { ChangeEvent, Dispatch, SyntheticEvent, useState } from "react";
import { Question } from ".";

export const useTest = ({
  setStep,
  type,
}: {
  setStep: Dispatch<number>;
  type: "ei" | "sn" | "tf" | "jp";
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [selectedOptions, setSelectedOptions] = useState<
    { name: string; value: string; extrovert: boolean }[]
  >([]);
  const [testType, setTestType] = useState<string>();
  const handleOptionChange = (
    event: ChangeEvent<HTMLInputElement>,
    question: Question
  ) => {
    const { name, value } = event.target;
    const index = selectedOptions.findIndex((option) => option.name === name);
    if (index === -1) {
      setSelectedOptions([
        ...selectedOptions,
        { name, value, extrovert: question.extrovert },
      ]);
    } else {
      const newSelectedOptions = [...selectedOptions];
      newSelectedOptions[index] = {
        name,
        value,
        extrovert: question.extrovert,
      };
      setSelectedOptions(newSelectedOptions);
    }
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    let extrovert = 0;
    let introvert = 0;
    selectedOptions.map((data) => {
      if (data.extrovert) {
        if (Number(data.value) > 0) {
          extrovert += Number(data.value);
        } else {
          introvert += Number(data.value) * -1;
        }
      } else {
        if (Number(data.value) > 0) {
          introvert += Number(data.value);
        } else {
          extrovert += Number(data.value) * -1;
        }
      }
    });

    if (extrovert > introvert) {
      switch (type) {
        case "ei":
          localStorage.setItem("EI", "E");
          setStep(2);
          break;
        case "sn":
          localStorage.setItem("SN", "S");
          setStep(3);
          break;
        case "tf":
          localStorage.setItem("TF", "T");
          setStep(4);
          break;
        case "jp":
          const ei = localStorage.getItem("EI");
          const sn = localStorage.getItem("SN");
          const tf = localStorage.getItem("TF");
          setTestType(ei + sn! + tf + "J");
          setIsOpen(true);
          break;
      }
    } else {
      switch (type) {
        case "ei":
          localStorage.setItem("EI", "I");
          setStep(2);
          break;
        case "sn":
          localStorage.setItem("SN", "N");
          setStep(3);
          break;
        case "tf":
          localStorage.setItem("TF", "F");
          setStep(4);
          break;
        case "jp":
          const ei = localStorage.getItem("EI");
          const sn = localStorage.getItem("SN");
          const tf = localStorage.getItem("TF");
          setIsOpen(true);
          setTestType(ei + sn! + tf + "P");
      }
    }
  };

  return {
    selectedOptions,
    handleSubmit,
    handleOptionChange,
    isOpen,
    setIsOpen,
    testType,
  };
};

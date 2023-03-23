import "aos/dist/aos.css";
import { HomeSvg } from "./icons/home";
import TextTransition, { presets } from "react-text-transition";
import { useEffect, useState } from "react";
export const Home = () => {
  
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
};

const Section1 = () => {
  const [index, setIndex] = useState<number>(0);
  const TEXTS = [
    "Hello friend",
    "こんにちは友人",
    "안녕 친구",
    "Сайн уу найз аа"
  ];
  useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  
  return (
    <div style={{ position: "relative" }}>
      <div
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
         <h1 className="section1">
      <TextTransition springConfig={presets.gentle}>
        {TEXTS[index % TEXTS.length]}
      </TextTransition>
    </h1>
      </div>
      <div
        style={{
          position: "absolute",
          backgroundColor: "#f5e0cc",
          borderRadius: "100%",
          height: 142,
          width: 142,
          left: "66%",
          top: "-7%",
        }}
      ></div>
    </div>
  );
};

const Section2 = () => {
  return (
    <div style={{ display: "flex", padding: "0px 100px" }}>
      <div style={{ fontSize: "45px" }}>
        <span
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          style={{
            color: "#003e52",
            letterSpacing: "-0.04rem",
            position: "relative",
            zIndex: 2,
          }}
        >
          Өөрийгөө олж нээсэн хүн хамгийн хүчирхэг.
        </span>
        <span
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="300"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          style={{
            color: "#003e52",
            letterSpacing: "-0.04rem",
            fontWeight: "bolder",
            position: "relative",
            zIndex: 2,
          }}
        >
          {"       "} Таныг энд байгаад баяртай байна.
        </span>
        <img
          src="star.svg"
          width={200}
          height={200}
          style={{
            position: "absolute",
            left: "0%",
          }}
        />
      </div>
    </div>
  );
};

const Section3 = () => {
  return (
    <div data-aos="fade-up" className="section3">
      <div>
        <HomeSvg />
      </div>
      {/* <p style={{ padding: "0 10rem" }}>
        The Myers-Briggs Type Indicator (MBTI) is a personality assessment tool
        that categorizes people into one of 16 different personality types. Each
        type is based on a combination of four dichotomies:
      </p> */}
    </div>
  );
};

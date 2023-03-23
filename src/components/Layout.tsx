import { Outlet, useNavigate } from "react-router-dom";

import { DropDown } from "./Dropdown";

export const Layout = () => {
  const router = useNavigate();

  return (
    <>
      <div className="header">
        <div className="first-header">
          <h1
            onClick={() => {
              router("/");
            }}
          >
            MBTI
          </h1>

          <DropDown />
        </div>
        <div
          className="test-button"
          onClick={() => {
            router("test");
          }}
        >
          <p>Тест өгөх</p>
        </div>
      </div>
      <Outlet />
    </>
  );
};

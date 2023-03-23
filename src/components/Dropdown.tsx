import { Col, Dropdown, MenuProps, Row } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { personalities } from "../utils/personalities";
import { useNavigate } from "react-router-dom";

export const DropDown = () => {
  const navigate = useNavigate();
  const items: MenuProps["items"] = personalities.map((e, index) => {
    return {
      key: index,
      label: (
        <div style={{ maxWidth: "400px", position: "relative" }} key={index}>
          <p>{e.Title}</p>
          <p>{e.description}</p>
          <Row gutter={[24, 24]}>
            {e.items.map((f, index) => (
              <Col span={6} key={index}>
                <div
                  className="dropitem"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={f.image}
                    width={50}
                    height={50}
                    onClick={() => navigate("/mbti/" + f.id.toString())}
                    alt="img"
                  />
                  <p>{f.type}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      ),
    };
  });
  return (
    <Dropdown menu={{ items }}>
      <div className="drop-parent">
        <span className="dropdown">
          Personalities <DownOutlined color="#003e52" />
        </span>
      </div>
    </Dropdown>
  );
};

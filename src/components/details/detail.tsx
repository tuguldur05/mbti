import { Col, Divider, List, Row, Typography } from "antd";

export interface Type {
  id: number;
  type: string;
  image: string;
  basic?: string;
  aw?: {
    strength: string[];
    weakness: string[];
  };
}
export const DetailComponent = ({ detail }: { detail: Type }) => {
  return (
    <div className="container" style={{ marginTop: "2rem" }}>
      <Row gutter={[24, 0]} justify="center">
        <Col
          span={12}
          xs={24}
          lg={12}
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
        >
          <div>
            <p className="type-title">{detail.type} гэж хэн бэ ?</p>
            <p>{detail.basic}</p>
          </div>
        </Col>
        <Col
          span={12}
          xs={24}
          lg={12}
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <div>
            <img
              src={detail.image}
              alt="type"
              style={{ width: "auto", height: "auto", maxWidth: "100%" }}
            />
          </div>
        </Col>
        <Col
          span={11}
          style={{ marginTop: "20px" }}
          xs={24}
          lg={11}
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-easing="ease-in-sine"
        >
          <div>
            <p className="type-title">Тэдний давуу тал</p>
            <List
              bordered
              dataSource={detail.aw?.strength}
              renderItem={(item) => (
                <List.Item>
                  <Typography.Text mark></Typography.Text> {item}
                </List.Item>
              )}
            />
          </div>
        </Col>
        <Col
          span={1}
          lg={1}
          xs={0}
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-easing="ease-in-sine"
        >
          <Divider type="vertical" style={{ height: "100%" }}></Divider>
        </Col>
        <Col
          span={11}
          style={{ marginTop: "20px" }}
          xs={24}
          lg={11}
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-easing="ease-in-sine"
        >
          <div>
            <p className="type-title">Тэдний сул тал</p>
            <List
              bordered
              dataSource={detail.aw?.weakness}
              renderItem={(item) => (
                <List.Item>
                  <Typography.Text mark></Typography.Text> {item}
                </List.Item>
              )}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

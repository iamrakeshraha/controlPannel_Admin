import { Card, Col, Row } from "antd";
import { Fragment } from "react";

const Dashboard = () => {
  return (
    <Fragment>
      <Row justify="center" align="center" gutter={[0, 16]}>
        <Col xs={22} md={12}>
          <Card bordered>
            <Row gutter={[0, 16]}>
              <Col xs={24} style={{ fontSize: 24, fontWeight: "bold" }}>
                Dashboard
              </Col>
              <Col xs={24}></Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Dashboard;

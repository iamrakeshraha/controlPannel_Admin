import { Fragment, useState } from "react";
import { Col, Row, Card, Input, Checkbox, Button } from "antd";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// import { routes } from 'shared/helpers';
// import { useNavigate } from "react-router-dom";

async function loginUser(credentials) {
  //   return fetch(
  //     'https://foure.nodejsdapldevelopments.com/royalty_accounting_bk/public/api/v1/login',
  //     {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(credentials),
  //     }
  //   ).then((data) => data.json());
}

const Login = ({ setToken, token }) => {
  let navigate = useNavigate()

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  if (token) {
    // return <Redirect to={routes.user.list} />;
  }

  const onClickButton = async () => {
    navigate('/home')

    // const response = await loginUser({
    //   // username,
    //   email,
    //   password,
    // });
    // if (response.data.token) {
    //   localStorage.setItem("token", JSON.stringify(response.data.token));
    //   setToken(response.data.token);
    //   console.log("token:", response.data);
    //   // history.push('/users');
    // } else {
    //   console.log("write valid credentials");
    // }
  };

  return (
    <Fragment>
      <Row justify="center" align="center" gutter={[0, 16]}>
        <Col xs={22} md={12}>
          <Card bordered>
            <Row gutter={[0, 16]}>
              <Col xs={24} style={{ fontSize: 24, fontWeight: "bold" }}>
                Login
              </Col>
              <Col xs={24} style={{ textAlign: "left" }}>
                Username *
              </Col>
              <Col xs={24}>
                {/* <Input placeholder="Username" onChange={e => setUsername(e.target.value)}/> */}
                <Input
                  placeholder="Username"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Col>
              <Col xs={24} style={{ textAlign: "left" }}>
                Password *
              </Col>
              <Col xs={24}>
                <Input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Col>
              <Col xs={24}>
                <Row gutter={[0, { md: 12 }]}>
                  <Col xs={24} md={12} style={{ textAlign: "left" }}>
                    <Checkbox>Remember me</Checkbox>
                  </Col>
                  <Col xs={24} md={12}>
                    {/* <Link to={routes.auth.forgotPassword}>
                      Forgot Password?
                    </Link> */}
                  </Col>
                </Row>
              </Col>
              <Col xs={24}>
                <Row justify="center">
                  <Col xs={24} sm={8} md={6} lg={6} xl={6}>
                    <Button
                      type="primary"
                      size="large"
                      block
                      onClick={onClickButton}
                    >
                      Login
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Login;
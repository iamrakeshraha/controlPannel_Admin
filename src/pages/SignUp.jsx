import react, { Component, Fragment } from "react";
import { Button, Card, Col, Input, Row, Select, Tabs, Upload } from "antd";
import PhoneInput from "react-phone-input-2";

class SignUp extends Component {
  state = {
    firstname: "",
    lastname: "",
    gender: "1",
    role: "3",
    email: "",
    mobile_phone: "",
    password: "",
    status: "0",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  selectHandleChange = (name, e) => {
    this.setState({ [name]: e });
  };
  passHandle = (e) => {
    const { name, value } = e.target;

    var passw = /^[a-zA-Z0-9]*$/;

    if (value.length > 0 && value.match(passw)) {
      console.log("Correct, try another...");
      this.setState({ [name]: value });
      // return true;
    } else {
      console.warn("Wrong...!");
      console.log("length>",value.length);
      // return false;
    }
    // console.warn("wrong hit",value);
  };
  validate = () => {
    const {password} = this.state

    var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    if(!password){
      alert("Please enter password")
    } else if(password.length < 8 || password.length > 15){
      alert("Password between 8 to 15 characters")
    } else if(!password.match(decimal)){
      alert("Enter at least one lowercase letter, one uppercase letter, one numeric digit, and one special character")
    }else{
      alert("Validate complete")
    }
  }

  onSubmitButton = () => {
    this.validate()
    // console.log(this.state);
  };

  render() {
    const {
      firstname,
      lastname,
      gender,
      role,
      email,
      mobile_phone,
      password,
      status,
    } = this.state;

    return (
      <Fragment>
        <Row justify="center" align="center" gutter={[0, 16]}>
          <Col xs={12}>
            <Card bordered>
              <Row gutter={[0, 16]}>
                <Col
                  xs={24}
                  style={{
                    fontSize: 24,
                    fontWeight: "bold",
                    textAlign: "left",
                  }}
                >
                  Create User
                </Col>
                <Col xs={24}>
                  <Tabs defaultActiveKey="1">
                    <Tabs.TabPane tab="User Details" key="1">
                      <Row gutter={[6, 16]}>
                        <Col xs={24}>
                          <Row gutter={[6, 16]}>
                            <Col xs={24} lg={12}>
                              <Input
                                name="firstname"
                                type="text"
                                value={firstname}
                                placeholder="Firts Name*"
                                onChange={this.handleChange}
                              />
                            </Col>
                            <Col xs={24} lg={12}>
                              <Input
                                name="lastname"
                                value={lastname}
                                placeholder="Last Name*"
                                onChange={this.handleChange}
                              />
                            </Col>
                          </Row>
                        </Col>
                        <Col xs={24}>
                          <Row gutter={[6, 16]}>
                            <Col xs={24} lg={12}>
                              <h4 style={{ color: "red" }}>
                                {/* {formErrors.firstname} */}
                              </h4>
                            </Col>
                            <Col xs={24} lg={12}>
                              <h4 style={{ color: "red" }}>
                                {/* {formErrors.lastname} */}
                              </h4>
                            </Col>
                          </Row>
                        </Col>
                        <Col xs={24}>
                          <Row gutter={[6, 16]}>
                            <Col xs={24} lg={12}>
                              <Select
                                showSearch
                                style={{ width: "100%", textAlign: "left" }}
                                value={gender}
                                placeholder="Gender*"
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                  option.children
                                    .toLowerCase()
                                    .indexOf(input.toLowerCase()) >= 0
                                }
                                onChange={(e) =>
                                  this.selectHandleChange("gender", e)
                                }
                              >
                                <Select.Option value="1">Male</Select.Option>
                                <Select.Option value="2">Female</Select.Option>
                                <Select.Option value="0">Others</Select.Option>
                              </Select>
                            </Col>
                            <Col xs={24} lg={12}>
                              <Select
                                style={{ width: "100%", textAlign: "left" }}
                                name="role"
                                placeholder="Select Role*"
                                value={role}
                                onChange={(e) =>
                                  this.selectHandleChange("role", e)
                                }
                              >
                                <Select.Option value="1">
                                  Super Admin
                                </Select.Option>
                                <Select.Option value="2">Admin</Select.Option>
                                <Select.Option value="3">User</Select.Option>
                              </Select>
                            </Col>
                          </Row>
                        </Col>
                        <Col xs={24}>
                          <Row gutter={[6, 16]}>
                            <Col xs={24} lg={12}></Col>
                            <Col xs={24} lg={12}>
                              <h4 style={{ color: "red" }}>
                                {/* {formErrors.company} */}
                              </h4>
                            </Col>
                          </Row>
                        </Col>
                        <Col xs={24}>
                          <Row gutter={[6, 6]}>
                            <Col xs={24} lg={12}>
                              <Input
                                name="email"
                                placeholder="E-mail*"
                                value={email}
                                onChange={this.handleChange}
                              />
                            </Col>
                            <Col xs={24} md={24} lg={12}>
                              <PhoneInput
                                inputStyle={{
                                  fontSize: 15,
                                  borderRadius: 0,
                                  height: "32px",
                                  width: "100%",
                                }}
                                international
                                country={"us"}
                                name="mobile_phone"
                                value={mobile_phone}
                                onChange={(e) =>
                                  this.selectHandleChange("mobile_phone", e)
                                }
                              />
                            </Col>
                          </Row>
                        </Col>
                        <Col xs={24}>
                          <Row gutter={[6, 16]}>
                            <Col xs={24} lg={12}>
                              {/* <h4 style={{ color: 'red' }}>{formErrors.email}</h4> */}
                            </Col>
                            <Col xs={24} lg={12}>
                              <h4 style={{ color: "red" }}>
                                {/* {formErrors.mobile} */}
                              </h4>
                            </Col>
                          </Row>
                        </Col>
                        <Col xs={24}>
                          <Row gutter={[6, 16]}>
                            <Col xs={24} lg={12}>
                              <Input
                                name="password"
                                value={password}
                                placeholder="Password*"
                                onChange={this.handleChange}
                                // onChange={this.passHandle}
                              />
                            </Col>
                            <Col xs={24} lg={12}>
                              <Select
                                style={{ width: "100%", textAlign: "left" }}
                                name="status"
                                placeholder="Status*"
                                onChange={(e) =>
                                  this.selectHandleChange("role", e)
                                }
                                value={status}
                              >
                                {/* <Select.Option value="">
                                  Please Select status
                                </Select.Option> */}
                                <Select.Option value="1">Active</Select.Option>
                                <Select.Option value="0">
                                  Inactive
                                </Select.Option>
                              </Select>
                            </Col>
                          </Row>
                        </Col>

                        <Col xs={24}>
                          <Row gutter={[6, 16]}>
                            <Col xs={24} lg={12}>
                              <Button
                                type="text"
                                size="large"
                                block
                                // onClick={onCancel}
                              >
                                Cancel
                              </Button>
                            </Col>
                            <Col xs={24} lg={12}>
                              <Button
                                type="primary"
                                size="large"
                                block
                                onClick={this.onSubmitButton}
                              >
                                Save
                              </Button>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Tabs.TabPane>
                  </Tabs>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        {/* <Modal
            visible={previewVisibility}
            footer={null}
            onCancel={() => setPreviewVisibility(false)}>
            <img alt="example" style={{ width: '100%' }} src={previewImage} />
          </Modal> */}
      </Fragment>
    );
    // return (
    //   <Fragment>
    //     <Row justify="center" align="center" gutter={[0, 16]}>
    //       <Col>
    //         <Card bordered>
    //           <Row gutter={[0, 16]}>
    //             <Col xs={24} style={{ fontSize: 24, fontWeight: "bold" }}>
    //               SignUp
    //             </Col>
    //             <Col>
    //               <Tabs defaultActiveKey="1">
    //                 <Tabs.TabPane tab="UserDetails" key="1">
    //                   <Row gutter={[0, 16]}>
    //                     <Col></Col>
    //                   </Row>
    //                 </Tabs.TabPane>
    //               </Tabs>
    //             </Col>
    //           </Row>
    //         </Card>
    //       </Col>
    //     </Row>
    //   </Fragment>
    // );
  }
}

export default SignUp;

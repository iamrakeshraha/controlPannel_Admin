import react, { Component, Fragment } from "react";
import { Button, Card, Col, Input, Row, Select, Tabs, Upload } from "antd";
import PhoneInput from "react-phone-input-2";

class SignUp extends Component {
  render() {
    return (
      <Fragment>
        <Row justify="center" align="center" gutter={[0, 16]}>
          <Col xs={12}>
            <Card bordered>
              <Row gutter={[0, 16]}>
                <Col xs={24} style={{ fontSize: 24, fontWeight: "bold", textAlign: "left" }}>
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
                                //   value={formValues.firstname}
                                placeholder="Firts Name*"
                                //   onChange={handleChange}
                              />
                            </Col>
                            <Col xs={24} lg={12}>
                              <Input
                                name="lastname"
                                //   value={formValues.lastname}
                                placeholder="Last Name*"
                                //   onChange={handleChange}
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
                                //   value={formValues.gender}
                                placeholder="Gender*"
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                  option.children
                                    .toLowerCase()
                                    .indexOf(input.toLowerCase()) >= 0
                                }
                                //   onChange={(e) => selectHandleChange(e, 'gender')}
                              >
                                <Select.Option value="1">Male</Select.Option>
                                <Select.Option value="0">Female</Select.Option>
                                <Select.Option value="2">Others</Select.Option>
                              </Select>
                            </Col>
                            <Col xs={24} lg={12}>
                              <Select
                                style={{ width: "100%", textAlign: "left" }}
                                name="role"
                                placeholder="Select Role*"
                                //   onChange={(e) => selectHandleChange(e, 'role')}
                                //   value={formValues.role}
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
                                //   value={formValues.email}
                                //   onChange={handleChange}
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
                                //   value={initialData.mobile_phone}
                                //   onChange={(e) => mobileHandleChange("mobile_phone", e)}
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
                                //   value={formValues.lastname}
                                placeholder="Password*"
                                //   onChange={handleChange}
                              />
                            </Col>
                            <Col xs={24} lg={12}>
                              <Select
                                style={{ width: "100%", textAlign: "left" }}
                                name="status"
                                placeholder="Status*"
                                //   onChange={(e) => selectHandleChange(e, 'role')}
                                //   value={formValues.role}
                              >
                                {/* <Select.Option value="">
                                  Please Select status
                                </Select.Option> */}
                                <Select.Option value="active">
                                  Active
                                </Select.Option>
                                <Select.Option value="inactive">
                                  Inactive
                                </Select.Option>
                              </Select>
                            </Col>
                          </Row>
                        </Col>
                        <Col xs={24}>
                          <Row gutter={[6, 16]}>
                            <Col xs={24} lg={12}>
                              {/* <h4 style={{ color: 'red' }}>{formErrors.role}</h4> */}
                            </Col>
                          </Row>
                        </Col>

                        <Col xs={24}>
                          {/* <h4 style={{ color: 'red' }}>{formErrors.note}</h4> */}
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
                                //   onClick={loading ? <Spin indicator={antIcon}/> : onSubmitButton}
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

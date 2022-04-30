import styled from "@emotion/styled";
import { Button, Form, Input } from "antd";
import { css } from "assets/css/variable";
import { PageTitle } from "components/page-title";
import { useEffect, useState } from "react";
import { showToast } from "utils/showToast";
import { useNavigate } from "react-router-dom";
import { api } from "api/login";

export const ResetPass = () => {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    userName: "",
    validCode: "",
    password: "",
  });
  const [isResetDisable, setIsResetDisable] = useState(true);
  const onSubmit = () => {
    api
      .resetPass({})
      .then((res) => {
        showToast("重置密码成功！");
        navigate(`/login`);
      })
      .catch((e) => {
        showToast("重置密码失败");
      });
  };

  useEffect(() => {
    const { userName, password, validCode } = loginForm;
    if (userName && password && validCode) {
      setIsResetDisable(false);
    } else {
      setIsResetDisable(true);
    }
  }, [loginForm]);

  return (
    <ResetWrapper>
      <PageTitle title="重置密码"></PageTitle>
      <ResetContent>
        <Form name="basic" autoComplete="off">
          <Form.Item name="userName">
            <Input
              value={loginForm.userName}
              onChange={(env) =>
                setLoginForm({ ...loginForm, userName: env.target.value })
              }
              placeholder="请输入您的手机号"
            />
          </Form.Item>
          <Form.Item name="validCode">
            <Input
              value={loginForm.validCode}
              onChange={(env) =>
                setLoginForm({ ...loginForm, validCode: env.target.value })
              }
              placeholder="请输入验证码"
            />
          </Form.Item>
          <Form.Item name="password">
            <Input.Password
              value={loginForm.password}
              onChange={(env) =>
                setLoginForm({ ...loginForm, password: env.target.value })
              }
              placeholder="请输入您的密码"
            />
          </Form.Item>
          <Form.Item className="mgt-48">
            <Button
              type="primary"
              size="large"
              block
              htmlType="submit"
              disabled={isResetDisable}
              onClick={onSubmit}
            >
              重置密码
            </Button>
          </Form.Item>
        </Form>
      </ResetContent>
    </ResetWrapper>
  );
};

const ResetWrapper = styled.div`
  height: 100vh;
  background-color: ${css.colorBackground};
  font-weight: bold;
`;

const ResetContent = styled.div`
  padding: 16px;
`;

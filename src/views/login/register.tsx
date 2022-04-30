import styled from "@emotion/styled";
import { Button, Form, Input } from "antd";
import { api } from "api/login";
import { LargeTitle } from "components/large-title";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { showToast } from "utils/showToast";

export const Register = () => {
  const [registerForm, setRegisterForm] = useState({
    userName: "",
    password: "",
    validCode: "",
  });
  const [isRegisterDisable, setIsRegisterDisable] = useState(true);
  const onRegister = () => {
    api
      .register({
        user: registerForm.userName,
        password: registerForm.password,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        showToast("登录失败");
      });
  };
  useEffect(() => {
    const { userName, password, validCode } = registerForm;
    if (userName && password && validCode) {
      setIsRegisterDisable(false);
    } else {
      setIsRegisterDisable(true);
    }
  }, [registerForm]);

  return (
    <div>
      <LargeTitle title="注册" hasReturn={true}></LargeTitle>
      <RegisterContent>
        <Form name="basic" autoComplete="off">
          <Form.Item name="userName">
            <Input
              value={registerForm.userName}
              onChange={(env) =>
                setRegisterForm({ ...registerForm, userName: env.target.value })
              }
              placeholder="请输入您的手机号"
            />
          </Form.Item>
          <Form.Item name="password">
            <Input.Password
              value={registerForm.password}
              onChange={(env) =>
                setRegisterForm({ ...registerForm, password: env.target.value })
              }
              placeholder="请输入您的密码"
            />
          </Form.Item>
          <Form.Item name="validCode">
            <Input
              value={registerForm.validCode}
              onChange={(env) =>
                setRegisterForm({
                  ...registerForm,
                  validCode: env.target.value,
                })
              }
              placeholder="请输入验证码"
            />
          </Form.Item>
          <Form.Item className="mgt-48">
            <Button
              type="primary"
              shape="round"
              size="large"
              block
              htmlType="submit"
              disabled={isRegisterDisable}
              onClick={onRegister}
            >
              注册
            </Button>
          </Form.Item>
        </Form>
      </RegisterContent>
      <RegisterFooter>
        <Link to="/login">
          <Button type="link">已有账号？立即登录</Button>
        </Link>
      </RegisterFooter>
    </div>
  );
};

const RegisterContent = styled.div`
  padding: 16px;
`;

const RegisterFooter = styled.div`
  position: absolute;
  bottom: 10%;
  width: 100%;
  text-align: center;
`;

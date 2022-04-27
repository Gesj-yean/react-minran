import styled from "@emotion/styled";
import { LargeTitle } from "components/large-title";
import IconWx from "assets/img/icon_wx.png";
import IconZfb from "assets/img/icon_zfb.png";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { showToast } from "utils/showToast";
import { api } from "api/login";

export const Login = () => {
  const [loginForm, setLoginForm] = useState({
    userName: "",
    password: "",
    isAllow: false,
  });
  const [isLoginDisable, setIsLoginDisable] = useState(true);
  const onFinish = (values: any) => {
    if (!values.userName || !values.password) {
      showToast("用户名或密码错误");
    } else if (!values.isAllow) {
      showToast("登录前请先阅读并同意相关协议");
    } else {
      showToast("登录成功！");
    }
  };

  const onLogin = () => {
    api
      .login({
        user: loginForm.userName,
        password: loginForm.password,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        showToast("登录失败");
      });
  };

  useEffect(() => {
    const { userName, password, isAllow } = loginForm;
    if (userName && password && isAllow) {
      setIsLoginDisable(false);
    } else {
      setIsLoginDisable(true);
    }
  }, [loginForm]);

  return (
    <LoginWrapper>
      <LargeTitle title="欢迎登录泯然"></LargeTitle>

      <LoginContent>
        <Form name="basic" onFinish={onFinish} autoComplete="off">
          <Form.Item name="userName">
            <Input
              value={loginForm.userName}
              onChange={(env) =>
                setLoginForm({ ...loginForm, userName: env.target.value })
              }
              placeholder="请输入您的手机号"
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
          <FlexBetween>
            <Link to={"/reset"}>
              <Button type="link" className="link">
                忘记密码？
              </Button>
            </Link>
            <Link to={"/register"}>
              <Button type="link" className="link">
                立即注册
              </Button>
            </Link>
          </FlexBetween>
          <Form.Item className="mgt-48">
            <Button
              type="primary"
              shape="round"
              size="large"
              block
              htmlType="submit"
              disabled={isLoginDisable}
              onClick={onLogin}
            >
              登录
            </Button>
          </Form.Item>
          <Form.Item name="isAllow" valuePropName="checked">
            <Checkbox
              onChange={(env) =>
                setLoginForm({ ...loginForm, isAllow: env.target.checked })
              }
            >
              <span className="desc mgl-4">
                已阅读并同意《用户协议》，《隐私协议》
              </span>
            </Checkbox>
          </Form.Item>
        </Form>
      </LoginContent>

      <LoginFooter>
        <div>
          <img src={IconZfb} alt="" width={"40rem"} />
          <div className="desc">支付宝登录</div>
        </div>
        <div>
          <img src={IconWx} alt="" width={"40rem"} />
          <div className="desc">微信登录</div>
        </div>
      </LoginFooter>
    </LoginWrapper>
  );
};

const LoginWrapper = styled.div`
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const LoginContent = styled.div`
  padding: 0 16px 16px;
  flex: 1;
`;

export const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.6rem;
`;
const LoginFooter = styled.div`
  padding-bottom: 15%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

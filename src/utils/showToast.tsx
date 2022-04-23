import { message } from "antd";
export const showToast = (content: string) => {
  message.open({
    type: "info",
    icon: null,
    content: content,
  });
};

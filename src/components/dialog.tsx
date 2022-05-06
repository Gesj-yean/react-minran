import styled from "@emotion/styled";
import { Button } from "antd";
import { css } from "assets/css/variable";

interface DialogProps {
  visible: boolean;
  title: string;
  content?: string;
  confirmText: string;
  cancelText?: string;
  onSubmit: () => void;
  onCancel?: () => void;
}
export const Dialog = (props: DialogProps) => {
  return (
    <DialogWrapper style={{ display: props.visible ? "" : "none" }}>
      <DialogContent>
        <div className="title">{props.title}</div>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: props.content || "" }}
        />
        <div className="btn-wrapper">
          {props.cancelText ? (
            <Button type="link" className="grey" onClick={props.onCancel}>
              {props.cancelText || "取消"}
            </Button>
          ) : null}
          <Button type="link" onClick={props.onSubmit}>
            {props.confirmText || "确认"}
          </Button>
        </div>
      </DialogContent>
    </DialogWrapper>
  );
};

const DialogWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;
const DialogContent = styled.div`
  width: 270px;
  background: ${css.colorWhite};
  border-radius: 8px;

  .title {
    text-align: center;
    margin: 30px 16px 10px;
    font-weight: bold;
  }

  .content {
    color: ${css.colorTitleSecond};
    padding: 0 16px;
    line-height: 21px;
    text-align: center;
    white-space: pre-wrap;
  }

  .btn-wrapper {
    text-align: center;
    border-top: solid 1px ${css.colorDevide};
    margin-top: 20px;
    display: flex;
    justify-content: space-between;

    .grey {
      color: ${css.colorTitleSecond};
    }

    button {
      flex: 1;
      padding: 10px 0;
      height: 40px;
      &:first-of-type {
        border-right: solid 1px ${css.colorDevide};
      }
    }
  }
`;

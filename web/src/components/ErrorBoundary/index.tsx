import { css } from "@emotion/react";
import { Alert } from "antd";
import type { ReactNode } from "react";
import { Component } from "react";

export class ErrorBoundary extends Component<
  {
    message?: ReactNode;
    description?: ReactNode;
    children?: ReactNode;
    id?: string;
  },
  {
    error?: Error | null;
    info?: {
      componentStack?: string;
    };
  }
> {
  state = {
    error: undefined,
    info: {
      componentStack: "",
    },
  };

  componentDidCatch(error: Error | null, info: object) {
    this.setState({ error, info });
  }

  render() {
    const { message, description, id, children } = this.props;
    const { error, info } = this.state;
    const componentStack = info?.componentStack || null;
    const errorMessage =
      typeof message === "undefined" ? (error || "").toString() : message;
    const errorDescription =
      typeof description === "undefined" ? componentStack : description;

    if (error) {
      return (
        <div
          css={css`
            padding: 16px;
          `}
        >
          <Alert
            description={
              <pre style={{ fontSize: "0.9em", overflowX: "auto" }}>
                {errorDescription}
              </pre>
            }
            id={id}
            message={errorMessage}
            type="error"
          />
        </div>
      ) as ReactNode;
    }

    return children;
  }
}

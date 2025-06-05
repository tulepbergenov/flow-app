import { css } from "@emotion/css";
import { Alert } from "antd";
import { isRouteErrorResponse, useRouteError } from "react-router";
import {
  getErrorDescription,
  getErrorMessage,
  getErrorTitle,
} from "./RouteErrorBoundary.lib";

export const RouteErrorBoundary = () => {
  const error = useRouteError();

  console.error("Route error:", error);

  const title = getErrorTitle(error);
  const description = getErrorDescription(error);

  const alertType = isRouteErrorResponse(error)
    ? error.status >= 500
      ? "error"
      : "warning"
    : "error";

  return (
    <div
      className={css`
        padding: 16px;
      `}
    >
      <Alert
        type={alertType}
        message={title}
        description={
          <div>
            <p>{getErrorMessage(error)}</p>
            <details>
              <summary style={{ cursor: "pointer", marginTop: "8px" }}>
                Техническая информация
              </summary>
              <pre
                style={{
                  fontSize: "0.85em",
                  overflowX: "auto",
                  marginTop: "8px",
                  backgroundColor: "#f5f5f5",
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #d9d9d9",
                }}
              >
                {description}
              </pre>
            </details>
          </div>
        }
        showIcon
      />
    </div>
  );
};

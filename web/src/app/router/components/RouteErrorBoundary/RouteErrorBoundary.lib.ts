import { isRouteErrorResponse } from "react-router";
import type { ErrorWithMessage } from "./RouteErrorBoundary.type";

export function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
  return (
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    typeof (error as Record<string, unknown>).message === "string"
  );
}

export function getErrorMessage(error: unknown): string {
  if (isErrorWithMessage(error)) return error.message;
  if (typeof error === "string") return error;
  return "Произошла неизвестная ошибка";
}

export function getErrorTitle(error: unknown): string {
  if (isRouteErrorResponse(error)) {
    return `${error.status} ${error.statusText}`;
  }

  if (isErrorWithMessage(error)) {
    if (error instanceof Error) {
      return error.name || "Ошибка";
    }
    return "Ошибка приложения";
  }

  return "Неизвестная ошибка";
}

export function getErrorDescription(error: unknown): string {
  if (isRouteErrorResponse(error)) {
    if (error.data) {
      if (typeof error.data === "string") return error.data;
      if (typeof error.data === "object") {
        return JSON.stringify(error.data, null, 2);
      }
    }
    return `HTTP ${error.status} - ${error.statusText}`;
  }

  if (error instanceof Error) {
    return error.stack || error.message;
  }

  if (typeof error === "string") {
    return error;
  }

  try {
    return JSON.stringify(error, null, 2);
  } catch {
    return "Не удалось сериализовать ошибку";
  }
}

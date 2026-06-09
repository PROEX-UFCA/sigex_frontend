import { describe, expect, it } from "vitest";
import { render, renderHook, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AuthProvider, useAuth } from "./AuthContext";

import { server } from "@/services/mswServer";
import { afterAll, afterEach, beforeAll } from "vitest";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const LoginButton = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const { login, role } = useAuth();
  return (
    <>
      <span data-testid="role">{role ?? "null"}</span>
      <button onClick={() => login({ email: email, password: password })}>
        Login instituição
      </button>
    </>
  );
};

describe("AuthContext Tests", () => {
  it("Should have role initialized as null", () => {
    render(
      <AuthProvider>
        <LoginButton email="admin@gmail.com" password="password" />
      </AuthProvider>,
    );
    expect(screen.getByTestId("role").textContent).toBe("null");
  });

  it("Should define role as 'Desenvolvimento' when given correct credentials", async () => {
    render(
      <AuthProvider>
        <LoginButton email="admin@gmail.com" password="password" />
      </AuthProvider>,
    );
    await userEvent.click(screen.getByText("Login instituição"));
    expect(screen.getByTestId("role").textContent).toBe("Desenvolvimento");
  });

  it("Should raise an error when given wrong credentials", async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <AuthProvider>{children}</AuthProvider>
    );

    const { result } = renderHook(() => useAuth(), { wrapper });

    await expect(() =>
      result.current.login({ email: "errado@gmail.com", password: "errada" }),
    ).rejects.toThrow("Login Inválido");
  });

  it("Should raise an error when used outside of AuthProvider", () => {
    const OutsideConsumer = () => {
      useAuth();
      return null;
    };
    expect(() => render(<OutsideConsumer />)).toThrow(
      "Erro de contexto: useAuth deve estar dentro de um AuthProvider",
    );
  });
});

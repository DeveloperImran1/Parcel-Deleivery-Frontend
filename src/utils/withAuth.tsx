import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import type { ComponentType } from "react";
import { Navigate } from "react-router";

const withAuth = (Component: ComponentType, requiredRole: string[] = []) => {
  return function AuthWrapper() {
    const { data: userInfo, isLoading } = useUserInfoQuery(undefined);

    const userEmail = userInfo?.data?.email;
    const userRole = userInfo?.data?.role;

    if (!isLoading && !userEmail) {
      return <Navigate to="/login"></Navigate>;
    }

    console.log(
      "requiredRole?.length",
      requiredRole,
      "isLoading",
      isLoading,
      "requiredRole.includes(userRole)",
      requiredRole?.includes(userRole)
    );

    if (
      requiredRole?.length > 0 &&
      !isLoading &&
      !requiredRole?.includes(userRole)
    ) {
      return <Navigate to="/unauthorized"></Navigate>;
    }
    return <Component></Component>;
  };
};

export default withAuth;

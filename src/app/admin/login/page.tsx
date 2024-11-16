import AdminLoginForm from "@/components/admin/pages/login/AdminLoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Root Education | Admin Login",
};

const AdminLoginPage = () => {
  return (
    <main>
      <div className="container flex min-h-screen flex-col items-center justify-center gap-10">
        <h1 className="text-center text-4xl font-bold text-primary">
          Admin Login
        </h1>
        <AdminLoginForm />
      </div>
    </main>
  );
};

export default AdminLoginPage;

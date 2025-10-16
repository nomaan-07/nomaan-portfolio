import "../_styles/globals.css";

export const metadata = {
  title: "نعمان ریگی",
  description: "وب سایت شخصی نعمان ریگی",
};

export default function FaLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}

import "../_styles/globals.css";

export const metadata = {
  title: "Nomaan Rigi",
  description: "Nomaan Rigi portfolio website",
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

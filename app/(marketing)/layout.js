import "../globals.css";

export const metadata = {
  title: "Next.js Page Routing & Rendering",
  description: "Learning how to route to different pages.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export const metadata = {
  title: "AI Ready School",
  description: "AI ecosystem for schools"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
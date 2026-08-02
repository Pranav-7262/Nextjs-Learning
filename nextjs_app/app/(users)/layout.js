import Navigation from "../../components/Navigation";
export const metadata = {
  title: {
    default: "Users Layout",
    template: "%s | Users Layout",
  },
  description: "This is users layout",
  keywords: ["users", "layout", "nextjs"],
  icon: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}

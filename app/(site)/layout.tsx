

import "../styles/globals.css";

import { fonts } from "../fonts/fonts";
import Navbar from "@/components/site/Navbars/Navbar";



export const metadata = {
  title: "Rasheed Tolulope",
  description: "",
};

export default  function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

    
  return (
    <html lang="en">
      <body
       className={`${fonts.calibreMedium} ${fonts.calibreBold} bg-primary-color text-secondary-color`}
      >
        {/* Header */}
        <main className=" font-calibre-medium max-w-6xl mx-auto px-4">
          <div className=" ">

            <Navbar />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}

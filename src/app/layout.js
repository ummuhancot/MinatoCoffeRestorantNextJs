
import "../styles/global.scss";
import { lexend, nunito, mooLahLah, barriecito } from "@/helpers/font";


export const metadata = {
  title: {
    template: `%s | AO 青`,
    default: "AO 青",
  },
  description: "coffe of  AO 青",

  /* icons: {
    icon: "/minato.png",
    shortcut: "/shortcut-icon.png",
    apple: "/minologo.jpg",
    other: {
      rel: "minoto",
      url: "/minologo.jpg",
    },
  }, */

  description: "coffee of AO 青",
  icons: {
    icon: "/minato/icon1.png",
    shortcut: "/minato/icon1.png",
    apple: "/minato/icon1.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${lexend.variable} ${nunito.variable} ${mooLahLah.variable} ${barriecito.variable}`}
    >
      <body className="minato">{children}</body>
    </html>
  );
}

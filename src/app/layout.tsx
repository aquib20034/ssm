// @ts-ignore
import "@/assets/styles/main.scss";
import { Poppins } from "next/font/google";
import { Providers } from "@/store/provider";
import Header from "@/components/Header/page";
import FooterS1 from "@/components/Footer/Style1/page";

export const metadata = {
  title: "Stores Promo code | Upto 70% Off | Free Shipping Super Saver Mama",
  description:
    "SSM promo codes & coupons, you can get the best prices on active brand offerings in a variety of categories. Now is the time to start saving from your valuable amount",
};

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-family-1",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const footerData = [
    {
      groupName: "Regularly Updated",
      storeList: [
        {
          name: "Store Name",
          path: "/",
        },
        {
          name: "Store Name",
          path: "/",
        },
        {
          name: "Store Name",
          path: "/",
        },
        {
          name: "Store Name",
          path: "/",
        },
        {
          name: "Store Name",
          path: "/",
        },
        {
          name: "Store Name",
          path: "/",
        },
        {
          name: "Store Name",
          path: "/",
        },
        {
          name: "Store Name",
          path: "/",
        },
        {
          name: "Store Name",
          path: "/",
        },
        {
          name: "Store Name",
          path: "/",
        },
        {
          name: "Store Name",
          path: "/",
        },
        {
          name: "Store Name",
          path: "/",
        },
      ],
    },
    {
      groupName: "Trending Stores",
      storeList: [
        {
          name: "Store Name",
          path: "/",
        },
        {
          name: "Store Name",
          path: "/",
        },
        {
          name: "Store Name",
          path: "/",
        },
        {
          name: "Store Name",
          path: "/",
        },
        {
          name: "Store Name",
          path: "/",
        },
        {
          name: "Store Name",
          path: "/",
        },
        {
          name: "Store Name",
          path: "/",
        },
        {
          name: "Store Name",
          path: "/",
        },
        {
          name: "Store Name",
          path: "/",
        },
        {
          name: "Store Name",
          path: "/",
        },
        {
          name: "Store Name",
          path: "/",
        },
        {
          name: "Store Name",
          path: "/",
        },
      ],
    },
    {
      groupName: "Related Stores",
      storeList: [
        {
          name: "Store Name",
          path: "/",
        },
        {
          name: "Store Name",
          path: "/",
        },
        {
          name: "Store Name",
          path: "/",
        },
        {
          name: "Store Name",
          path: "/",
        },
        {
          name: "Store Name",
          path: "/",
        },
        {
          name: "Store Name",
          path: "/",
        },
        {
          name: "Store Name",
          path: "/",
        },
        {
          name: "Store Name",
          path: "/",
        },
        {
          name: "Store Name",
          path: "/",
        },
        {
          name: "Store Name",
          path: "/",
        },
        {
          name: "Store Name",
          path: "/",
        },
        {
          name: "Store Name",
          path: "/",
        },
      ],
    },
  ];

  const footerRegions = [
    {
      name: "United States",
      path: "/",
    },
    {
      name: "Canada",
      path: "/",
    },
    {
      name: "Germany",
      path: "/",
    },
    {
      name: "Pakistan",
      path: "/",
    },
  ];

  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <Providers>
          <div className="container-fluid">
            <Header />
            <div>{children}</div>
            <FooterS1 data={footerData} regions={footerRegions} />
          </div>
        </Providers>
      </body>
    </html>
  );
}

import axios from "axios";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

function transformString(str, withAmpersand) {
  // Replace "-" with a space

  let transformedStr = str.replace(/-/g, ' ');

  if (withAmpersand) {
    // Replace "and" with "&"
    transformedStr = transformedStr.replace(/\band\b/g, '&');
  }

  // Capitalize the first letter of each word
  transformedStr = transformedStr.replace(/\b\w/g, char => char.toUpperCase());

  return transformedStr;
}

// const getSalon = async (salonId) => {
//   const id = salonId.split("-")[salonId.split("-").length-1]
//   try {
//     const res = await axios({
//       method: "get",
//       url: `${process.env.NEXT_PUBLIC_HOST}/api/v1/salonFamily/salonDetails?salonFamilyId=${id}`
//     })
//     return res.data.data.salons[0].salon_name
//   } catch (error) {
//     console.log(error.message);
//     return error.message
//   }
// }
export async function generateMetadata({ params }) {
  // read route params
  const salonName = params.salonName

  return {
    metadataBase: new URL('https://www.luzo.app'),

    title: `${transformString(salonName, true)} Salon | LUZO`,
    description: `Book your salon appointment at ${transformString(salonName, false)} and avail 40% OFF exclusively on LUZO. Check out 700+ salon and spa offers near you with LUZO.`,
  }
}

export default function SalonLayout({ children, params }) {



  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

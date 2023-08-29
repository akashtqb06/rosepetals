import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-gray-400 max-w-screen-xl bg-gray-900 px-4 py-5 mx-auto md:px-8">
      <div className="max-w-lg sm:mx-auto sm:text-center">
        <Image
          src="/logotext.svg"
          width={200}
          height={80}
          alt="logo"
          className="w-48 sm:mx-auto"
        />
        <p className="leading-relaxed mt-2 text-[15px] text-gray-400">
          Rosepetals Education and Research is dedicated to unlocking the
          inherent talents of our local community, igniting a path of growth and
          impact. Together, we're shaping a future where empowerment paves the
          way for collective success.{" "}
        </p>
      </div>
      <div className="mt-8 items-center justify-between sm:flex border-t-[1px] py-4 border-gray-400">
        <div className="mt-4 sm:mt-0">
          &copy; 2023 Rosepetals Education and Research Foundation. All rights
          reserved.
        </div>
        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center space-x-4">
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <Link href="https://www.linkedin.com/in/rosepetals-foundation-6339b128a/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/linkedinlogo.svg"
                  height={50}
                  width={50}
                  className="w-6 h-6 "
                  alt="instagram"
                />
              </Link>
            </li>

            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <Link href="https://twitter.com/rosepetals_f?t=R7slb-fxhlTJiKs9PHCZeA&s=09" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/xlogo.svg"
                  height={50}
                  width={50}
                  className="w-5 h-5 "
                  alt="instagram"
                />
              </Link>
            </li>

            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <Link href="https://instagram.com/rosepetals.foundation?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/instalogo.svg"
                  height={50}
                  width={50}
                  className="w-5 h-5 "
                  alt="instagram"
                />
              </Link>
            </li>

            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <Link href="https://www.facebook.com/profile.php?id=61550951272295" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/facebooklogo.svg"
                  height={50}
                  width={50}
                  className="w-6 h-6 "
                  alt="instagram"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

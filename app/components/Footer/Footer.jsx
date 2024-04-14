import Link from "next/link";
import Layouts from "../Layout/Layouts";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light">
      <Layouts className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center">
          Build with <span className="text-primary dark:text-primaryDark text-2xl px-1">&#9825;</span> by&nbsp;<Link href="/" target={"_blank"} className="underline underline-offset-2
          ">Waquar Mahboob</Link>
        </div>
        <Link href="/"  target={"_blank"} className="underline underline-offset-2
          ">Say Hello</Link>
      </Layouts>
    </footer>
  );
};

export default Footer;

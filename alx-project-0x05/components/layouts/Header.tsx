import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCount } from "@/context/CountContext";
import Button from "../common/Button";

const Header: React.FC = () => {

  const pathname = usePathname()
  const { count } = useCount()

  return (
    <header className="fixed w-full bg-white shadow-md p-8 z-50">
      <div className="container mx-auto flex justify-between items-center py-6 px-4 md:px-8">
        <Link href="/" className="text-4xl md:text-5xl font-bold list-none tracking-tight">
          Splash App
        </Link>

        {/* Button Group */}
        <div className="flex gap-4">
          {
            !["/counter-app"].includes(pathname) ? (
              <>
              <Button
            buttonLabel="Sign In"
            buttonBackgroundColor="red"
          />
          <Button
            buttonLabel="Sign Up"
            buttonBackgroundColor="blue"
          /></>
            ) : (
              <p className=" font-semibold text-lg">Current count : {count}</p>
            )
          }

        </div>
      </div>
    </header>
  );
};

export default Header;
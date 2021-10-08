import logo from "../images/logo.png";
export default function HeaderTailwind(props) {
  return (
    <div className="flex flex-row pl-10 h-600 w-screen  bg-blue-100 text-center font-semibold font-mono text-6xl p-5 ">
      <img
        className="justify-items-start pr-20"
        src={logo}
        alt="Logo"
        className="sm:h-10 sm:w-10 lg:h-20 lg:w-20"
      />
      <header className="pl-10 text-blue-800 sm:text-2xl sm:align-middle lg:text-6xl">
        {props.children}
      </header>
    </div>
  );
}

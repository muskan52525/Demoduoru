import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/svg/Header-logo.svg";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const navigate = useNavigate();

  const links = [
    { path: "/products", label: "produtos" },
    { path: "/infrastructure", label: "infraestruturas" },
    { path: "/sobre", label: "sobre" },
    { path: "/contact", label: "contactos" },
  ];

  const handleNavigate = (path, label) => {
    setActive(label);
    setMenuOpen(false);
    navigate(path);
  };

  useEffect(() => {
    const current = links.find((l) => l.path === window.location.pathname);
    if (current) setActive(current.label);
  }, []);

  return (
    <header className="bg-[#E5376B]">
      <div className="max-w-[1468px] w-full mx-auto flex items-center justify-between py-8 px-6">
  
        <div className="flex items-center justify-between w-full text-center">
          {links.slice(0, 2).map(({ path, label }) => (
            <button
              key={label}
              onClick={() => handleNavigate(path, label)}
              className={`text-white font-black text-[27px] hidden lg:block px-[18px] py-[2px] cursor-pointer ${
                active === label ? "active-link" : ""
              }`}
            >
              {label}
            </button>
          ))}
          <button onClick={() => handleNavigate("/", "")}>
            <img
              src={Logo}
              className="md:h-[167px] md:w-[150px] h-[100px] w-[50px] cursor-pointer"
              alt="Logo"
            />
          </button>

          {links.slice(2).map(({ path, label }) => (
            <button
              key={label}
              onClick={() => handleNavigate(path, label)}
              className={`text-white font-black text-[27px] w-[200px] hidden lg:block px-[18px] py-[2px] cursor-pointer ${
                active === label ? "active-link" : ""
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <IoMdClose color="white"  className="h-6 w-6"/> : <FaBars color="white" className="h-6 w-6"/>}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col items-center gap-4 bg-[#E5376B] pb-6">
          {links.map(({ path, label }) => (
            <button
              key={label}
              onClick={() => handleNavigate(path, label)}
              className={`font-black text-lg px-[18px] py-[2px] ${
                active === label ? "active-link" : "text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import MenuOverlay from "./MenuOverlay"

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState<boolean>(false)
  const [selectedSection, setSelectedSection] = React.useState<string>("Home")

  const closeNavbar = () => setNavbarOpen(false)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Noticias", href: "/" },
    { name: "Deportes", href: "/" },
    { name: "Videojuegos", href: "/" },
  ]

  return (
    <nav className="mx-auto border sticky left-0 right-0 top-0 z-30 bg-white bg-opacity-100 w-full">
      <div className="flex md:flex-col px-4 py-2 md:py-4 md:px- items-center justify-between w-full">
        <Link href="/">
          <h2 className="text-slate-900 font-medium md:font-semibold text-xl my-2 md:mb-4 md:mt-0">
            Noticias UAI
          </h2>
        </Link>
        <div className="w-full">
          <ul className="md:flex hidden gap-12 border-t w-full pt-2 items-center justify-center">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className={`regular-16 text-slate-700 flexCenter cursor-pointer pb-1.5 transition-all hover:text-black border-b-4 ${
                  selectedSection === link.name
                    ? "border-slate-500"
                    : "border-transparent"
                }`}
              >
                <Link
                  href={link.href}
                  onClick={() => setSelectedSection(link.name)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded"
            >
              <Bars3Icon className="h-5 w-5 text-slate-700" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded"
            >
              <XMarkIcon className="h-5 w-5 text-slate-700" />
            </button>
          )}
        </div>
      </div>

      {navbarOpen ? (
        <MenuOverlay navLinks={navLinks} closeNavbar={closeNavbar} />
      ) : null}
    </nav>
  )
}

export default Navbar

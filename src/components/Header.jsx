import React, { useState } from "react";
import MobileMenu from "./MobileMenu";
import SignInNav from "./SignInNav";
import logo from "../assets/svg/supershop_logo.svg";
import WomanListContainer from "./WomanListContainer";
import MenListContainer from "./MenListContainer";
import SearchBar from "./SearchBar";

export default function Layout() {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <div className="bg-white">
      <MobileMenu />
      <header className="relative bg-white hero-section">
        <p className="flex h-10 items-center justify-center bg-custom-red px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          FRETE GRÁTIS EM COMPRAS À PARTIR DE R$100
        </p>
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <div className="ml-4 flex lg:ml-0">
                <a href="#">
                  <img className="h-8 w-auto" src={logo} alt="SuperShop Logo" />
                </a>
              </div>
              <div className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {["Mulheres", "Homens"].map((tab) => (
                    <div key={tab} className="flex">
                      <button
                        className={`relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out ${
                          activeTab === tab
                            ? "border-custom-red text-custom-orange"
                            : "border-transparent text-gray-700 hover:text-gray-800"
                        }`}
                        aria-expanded={activeTab === tab}
                        onClick={() => setActiveTab(tab)}
                      >
                        {tab}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="ml-auto flex items-center">
                <SignInNav />
                <SearchBar />
              </div>
            </div>
            {/* Dynamic Content Rendering Based on Active Tab */}
            <div className="list-container">
              {activeTab === "Mulheres" && <WomanListContainer />}
              {activeTab === "Homens" && <MenListContainer />}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

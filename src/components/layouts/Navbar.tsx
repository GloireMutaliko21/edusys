"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HSThemeAppearance } from "@/utils/theme";
import { Theme } from "@/types/types";
import { ThemeToggle } from "../global/ThemeToggle";
import { UserProfileButton } from "../global/UserProfileButton";
import { ModeToggle } from "../toggle/theme";
const Navbar = () => {
  const [theme, setTheme] = useState<Theme>("default");
  useEffect(() => {
    HSThemeAppearance.init();
    const handleAppearanceChange = (e: any) => {
      setTheme(e.detail as Theme);
    };
    const $clickableThemes = document.querySelectorAll<HTMLElement>(
      "[data-hs-theme-click-value]"
    );
    const $switchableThemes = document.querySelectorAll<HTMLInputElement>(
      "[data-hs-theme-switch]"
    );
    $clickableThemes.forEach(($item) => {
      $item.addEventListener("click", () => {
        const themeValue =
          $item.getAttribute("data-hs-theme-click-value") || "";

        HSThemeAppearance.setAppearance(themeValue, true, !!$item);
      });
    });
    $switchableThemes.forEach(($item) => {
      $item.addEventListener("change", (e) => {
        const target = e.target as HTMLInputElement;
        HSThemeAppearance.setAppearance(target.checked ? "dark" : "default");
      });
      $item.checked = HSThemeAppearance.getAppearance() === "dark";
    });
    window.addEventListener("on-hs-appearance-change", (e: any) => {
      $switchableThemes.forEach(($item) => {
        $item.checked = e.detail === "dark";
      });
    });
    window.addEventListener("on-hs-appearance-change", handleAppearanceChange);

    return () => {
      window.removeEventListener(
        "on-hs-appearance-change",
        handleAppearanceChange
      );
    };
  }, []);
  useEffect(() => {}, []);
  return (
    <nav
      className="flex basis-full items-center w-full mx-auto px-4 sm:px-6 md:px-8"
      aria-label="Global"
    >
      <div className="flex items-center py-4 lg:hidden">
        <button
          type="button"
          className="text-gray-500 hover:text-gray-600"
          data-hs-overlay="#application-sidebar"
          aria-controls="application-sidebar"
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle Navigation</span>
          <svg
            className="w-5 h-5"
            width={16}
            height={16}
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
      </div>
      <div className="mr-5 lg:mr-0 lg:hidden">
        <Link
          className="flex-none text-xl font-semibold dark:text-white"
          href="#"
          aria-label="Brand"
        >
          ISDR/GL
        </Link>
      </div>
      <div className="w-full flex items-center justify-end ml-auto sm:justify-between sm:gap-x-3 sm:order-3">
        <div className="sm:hidden">
          <button
            type="button"
            className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
          >
            <svg
              className="w-3.5 h-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </div>
        <div className="hidden sm:block"></div>
        <div className="flex flex-row items-center justify-end gap-2">
          <ModeToggle />
          <UserProfileButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

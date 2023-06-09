import { ComponentProps, ReactNode } from "react";
import { Switch } from "react-aria-components";
import { useDarkMode } from "@/hooks/useDarkMode";

export default function DarkModeToggle({
  children,
  ...props
}: { children: ReactNode } & ComponentProps<typeof Switch>) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <Switch
      {...props}
      isSelected={darkMode}
      className="inline-flex items-center group touch-none"
      style={{ WebkitTapHighlightColor: "transparent" }}
      onChange={toggleDarkMode}
    >
      <span className="mr-2 text-gray-900 transition-all dark:text-white">
        {children}
      </span>
      <span className="group-data-[selected]:bg-green-500 group-data-[focus-visible]:ring-2 mr-4 h-6 w-9 cursor-pointer rounded-full border-2 border-transparent bg-zinc-600 ring-offset-2 ring-offset-zinc-900 transition duration-200">
        <span className="group-data-[selected]:ml-3 group-data-[selected]:group-data-[pressed]:ml-2 group-data-[pressed]:w-6 block h-5 w-5 origin-right rounded-full bg-white shadow transition-all duration-200" />
      </span>
    </Switch>
  );
}

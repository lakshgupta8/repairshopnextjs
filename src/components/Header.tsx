import { HomeIcon, File, UsersRound, LogOutIcon } from "lucide-react";
import { NavButton } from "@/components/NavButton";
import Link from "next/link";
import { ModeToggle } from "@/components/Modetoggle";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="top-0 z-20 sticky bg-background p-2 border-b h-12 animate-slide">
      <div className="flex justify-between items-center w-full h-8">
        <div className="flex items-center gap-2">
          <NavButton href="/home" label="Home" icon={HomeIcon} />
          <Link
            href="/home"
            className="flex justify-center items-center gap-2 ml-0"
            title="Home"
          >
            <h1 className="hidden sm:block m-0 mt-1 font-bold text-xl">
              Computer Repair Shop
            </h1>
          </Link>
        </div>
        <div className="flex items-center">
          <NavButton href="/tickets" label="Tickets" icon={File} />
          <NavButton href="/customers" label="Customers" icon={UsersRound} />
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-label="Logout"
            title="Logout"
            className="rounded-full"
            asChild
          >
            <LogoutLink>
              <LogOutIcon />
            </LogoutLink>
          </Button>
        </div>
      </div>
    </header>
  );
}

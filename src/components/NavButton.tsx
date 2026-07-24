import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
  icon: LucideIcon;
  label: string;
  href?: string;
};

export const NavButton = ({ icon: Icon, label, href }: Props) => {
  if (href) {
    return (
      <Button
        size="icon"
        variant="ghost"
        aria-label={label}
        title={label}
        className="rounded-full"
        asChild
      >
        {href ? (
          <Link href={href}>
            <Icon className="size-6" />
          </Link>
        ) : (
          <span>
            <Icon className="size-6" />
          </span>
        )}
      </Button>
    );
  }
};

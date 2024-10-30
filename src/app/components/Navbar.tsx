import { Dock, DockIcon } from "@/components/ui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 mx-auto mb-14 flex origin-bottom h-full max-h-14">
        <TooltipProvider>
            <Dock direction="middle">
            {DATA.navbar.map((item) => (
                <DockIcon key={item.label}>
                <Tooltip>
                    <TooltipTrigger asChild>
                    <Link
                        href={item.href}
                        aria-label={item.label}
                        className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-12 rounded-full",
                        )}
                    >
                        <item.icon className="size-4" />
                    </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                    <p>{item.label}</p>
                    </TooltipContent>
                </Tooltip>
                </DockIcon>
            ))}
            <Separator orientation="vertical" className="h-full" />
            {Object.entries(DATA.contact.social).map(([name, social]) => (
                <DockIcon key={name}>
                <Tooltip>
                    <TooltipTrigger asChild>
                    <Link
                        href={social.url}
                        aria-label={social.name}
                        className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-12 rounded-full",
                        )}
                    >
                        <social.icon className="size-4" />
                    </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                    <p>{name}</p>
                    </TooltipContent>
                </Tooltip>
                </DockIcon>
            ))}
            <Separator orientation="vertical" className="h-full py-2" />
            <DockIcon>
                <Tooltip>
                <TooltipTrigger asChild>
                    <ModeToggle />
                </TooltipTrigger>
                <TooltipContent>
                    <p>Theme</p>
                </TooltipContent>
                </Tooltip>
            </DockIcon>
            </Dock>
        </TooltipProvider>
    </div>
  );
}

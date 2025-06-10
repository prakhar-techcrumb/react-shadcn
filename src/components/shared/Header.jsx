
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/hooks/theme-toggle";

export function Header({ title, breadcrumbs, actionButton }) {
    return (
        <div className="flex items-center justify-between border-b border-border p-4">
            <div>
                <div className="flex items-center gap-1 mb-1">
                    {breadcrumbs.map((crumb, index) => (
                        <div key={crumb.href} className="flex items-center">
                            {index > 0 && <ChevronRight className="h-4 w-4 text-muted-foreground mx-2" />}
                            <Link
                                href={crumb.href}
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {crumb.name}
                            </Link>
                        </div>
                    ))}
                </div>
                <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
            </div>
            <div className="flex items-center gap-4">
                <div>
                    <ThemeToggle />
                </div>
                {actionButton && (
                    <Button variant="orange" onClick={actionButton.onClick}>
                        {actionButton.label}
                    </Button>
                )}
            </div>
        </div>
    );
}
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useState } from "react"


export function Modal({
  trigger,
  title,
  description,
  content,
  footer,
  maxWidth = "sm:max-w-[425px]"
}) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className={maxWidth}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && (
            <DialogDescription>{description}</DialogDescription>
          )}
        </DialogHeader>
        <div className="py-4">
          {content}
        </div>
        {footer ? (
          <DialogFooter>
            {footer}
          </DialogFooter>
        ) : (
          <DialogFooter>
            <div className="w-full flex justify-between">
                <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
                <Button className="bg-[#FF7A00] hover:bg-[#E86E00] text-white" onClick={() => setOpen(false)}>Save changes</Button>
            </div>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  )
}
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import LoginTemplate from "@/modules/account/templates/login-template"

interface SignInDialogProps {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
}

export const SignInDialog = ({ isOpen, onOpenChange }: SignInDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle></DialogTitle>
        <LoginTemplate />
      </DialogContent>
    </Dialog>
  )
}

export default SignInDialog 
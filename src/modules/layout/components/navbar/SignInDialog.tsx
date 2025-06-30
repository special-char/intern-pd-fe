import React from "react"

interface SignInDialogProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

const SignInDialog: React.FC<SignInDialogProps> = ({
  isOpen,
  onOpenChange,
}) => {
  if (!isOpen) return null
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "white",
          padding: 32,
          borderRadius: 8,
          minWidth: 300,
        }}
      >
        <h2>Sign In</h2>
        <p>This is a placeholder for the sign-in dialog.</p>
        <button onClick={() => onOpenChange(false)}>Close</button>
      </div>
    </div>
  )
}

export default SignInDialog

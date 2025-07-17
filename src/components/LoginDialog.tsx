import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { LoginForm } from './LoginForm';
import { useState } from 'react';

interface LoginDialogProps {
  children: React.ReactNode;
}

export const LoginDialog = ({ children }: LoginDialogProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <LoginForm onClose={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};
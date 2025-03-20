import { LoginModal } from "@/features/auth/components/login-modal.component";

export function Header() {
  return (<div className='flex justify-end text-font-bold p-5 border-b-slate-600 border-b bg-blue-700 text-white sticky top-0 z-10'>
      <LoginModal />
    </div>)
}
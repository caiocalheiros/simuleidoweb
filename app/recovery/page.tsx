import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/components/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { UserAuthForm } from "@/components/auth/user-auth-recovery"

export const metadata: Metadata = {
  title: "Recovery",
  description: "Recovery Account",
}

export default function AuthenticationPage() {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/authentication-light.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
        />
        <Image
          src="/examples/authentication-dark.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
        />
      </div>
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:px-0">
        <Link
          href="/login"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Login
        </Link>
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute left-4 top-4 md:left-8 md:top-8"
          )}
        >
          Home
        </Link>
        <div className="relative hidden h-full dark:border-r lg:flex">
          <div className="relative z-20 flex items-center text-lg font-medium">
          </div>
          <div className="relative z-20 mt-auto">
          </div>
        </div>
        <div className="lg:p-8">
          <div className="flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Recovery
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email to recovery your account
              </p>
            </div>
            <UserAuthForm />
          </div>
        </div>
      </div>
    </>
  )
}

/*   ____    _    ___ ___ _____ ___ _____ ___  
 / ___|  / \  |_ _/ _ \_   _|_ _|_   _/ _ \ 
| |     / _ \  | | | | || |  | |  | || | | |
| |___ / ___ \ | | |_| || |  | |  | || |_| |
 \____/_/   \_\___\___/ |_| |___| |_| \___/  */

 /*   ____    _    ___ ___ _____ ___ _____ ___  
 / ___|  / \  |_ _/ _ \_   _|_ _|_   _/ _ \ 
| |     / _ \  | | | | || |  | |  | || | | |
| |___ / ___ \ | | |_| || |  | |  | || |_| |
 \____/_/   \_\___\___/ |_| |___| |_| \___/  */

 /*   ____    _    ___ ___ _____ ___ _____ ___  
 / ___|  / \  |_ _/ _ \_   _|_ _|_   _/ _ \ 
| |     / _ \  | | | | || |  | |  | || | | |
| |___ / ___ \ | | |_| || |  | |  | || |_| |
 \____/_/   \_\___\___/ |_| |___| |_| \___/  */

 /*   ____    _    ___ ___ _____ ___ _____ ___  
 / ___|  / \  |_ _/ _ \_   _|_ _|_   _/ _ \ 
| |     / _ \  | | | | || |  | |  | || | | |
| |___ / ___ \ | | |_| || |  | |  | || |_| |
 \____/_/   \_\___\___/ |_| |___| |_| \___/  */

 /*   ____    _    ___ ___ _____ ___ _____ ___  
 / ___|  / \  |_ _/ _ \_   _|_ _|_   _/ _ \ 
| |     / _ \  | | | | || |  | |  | || | | |
| |___ / ___ \ | | |_| || |  | |  | || |_| |
 \____/_/   \_\___\___/ |_| |___| |_| \___/  */
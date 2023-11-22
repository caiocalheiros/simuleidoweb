import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <div>
        <Image
          className="darthvader"
          src="/darthvader.jpg"
          alt="darthlogo"
          width={900}
          height={60}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="http://localhost:3000/login"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold text-white`}>
            Login{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50  text-white`}>
          If you are already part of the dark side of the force
          </p>
        </a>

        <a
          href="http://localhost:3000/register"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold  text-white`}>
            Register{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-non">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50  text-white`}>
           Join the dark side of the force
          </p>
        </a>

        <a
          href='http://localhost:3000/recovery'
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold  text-white`}>
          Forgot your password?{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50  text-white`}>
          If you've forgotten who you are
          </p>
        </a>

        <a
          href="https://www.youtube.com/watch?v=7StrICb7EJ8"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold  text-white`}>
          Feel the power of the dark side{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50  text-white`}>
            The dark side!!!
          </p>
        </a>
      </div>
    </main>
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
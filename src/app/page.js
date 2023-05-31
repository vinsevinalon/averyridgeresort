import Image from 'next/image'

export default function Home() {
  return (
    <>
    <main className="flex flex-col h-screen w-full justify-center items-center">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/logo.png"
          alt="Avery Ridge"
          width={250}
          height={37}
          priority
        />
      </div>
      <div>
        <h2 className="flex place-items-center text-center text-lg font-semibold leading-8 text-gray-900 pt-7">Launching soon..</h2>
      </div>
    </main>
    </>
  )
}

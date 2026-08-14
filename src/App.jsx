import Random from "./components/Random";
import Tag from "./components/Tag";
export default function App() {
  return (
    <main className="background min-h-screen px-4 py-8 sm:px-6 sm:py-12">
      <h1 className="mx-auto w-full max-w-3xl rounded-2xl bg-white/90 px-5 py-4 text-center text-3xl font-extrabold tracking-tight text-slate-900 shadow-lg shadow-blue-900/10 backdrop-blur sm:text-4xl">
        Random GIF
      </h1>
      <div className="mx-auto mt-8 flex w-full max-w-3xl flex-col items-center gap-8 sm:mt-10">
        <Random/>
        <Tag/>
      </div>
    </main>
  )
}



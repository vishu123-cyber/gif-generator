import axios from "axios";
import React from "react";
import Spinner from "./Spinner";
const Random=()=>
{
    const[gif,setGif]=React.useState("");
    const[loading,setloading]=React.useState(false);
    const url='https://api.giphy.com/v1/gifs/random?api_key=kXYaX7wCACsfNka4VQudYPbSUeQ7V6bp';
     
    async function fetchdata()
    {
        setloading(true);
        const output=await axios.get(url);
        console.log(output);
        setGif(output.data.data.images.original.url);
        setloading(false);
    }
      function clickhandler()
    {
       fetchdata();
    }
    React.useEffect(()=>
    {
        fetchdata();
    },[])
  
    return(
     <section className="w-full overflow-hidden rounded-2xl border border-emerald-700/20 bg-emerald-500 p-4 shadow-xl shadow-emerald-900/15 sm:p-6">
            <div className="flex min-h-[26rem] flex-col items-center gap-5">
              <h2 className="text-center text-2xl font-bold text-slate-950">A Random GIF</h2>
              <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-xl bg-black/10 p-2">
                {
                loading?(<Spinner/>):(<img src={gif} alt="Random GIF" className="max-h-[280px] max-w-full rounded-lg object-contain shadow-md" />)
              }
              </div>
              <button onClick={clickhandler} className="w-full rounded-xl bg-white px-4 py-3 font-bold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-white/50 active:translate-y-0 sm:w-10/12">Generate</button>
            </div>
        </section>
    )
}
export default Random;
// output.data.data.images.original.url is path to fetch the particular gif in console

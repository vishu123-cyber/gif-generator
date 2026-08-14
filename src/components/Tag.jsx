import React from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/Usegif";
const Tag=()=>
{
   const[tag,setTag]=React.useState("");

    // const[gif,setGif]=React.useState("");
    // const[loading,setloading]=React.useState(false);
   
    // const url='https://api.giphy.com/v1/gifs/random?api_key=kXYaX7wCACsfNka4VQudYPbSUeQ7V6bp&tag=${encodeURIComponent(tag)}';
     
    // async function fetchdata()
    // {
    //     setloading(true);
    //     const output=await axios.get(url);
    //     console.log(output);
    //     setGif(output.data.data.images.original.url);
    //     setloading(false);
    // }
    //   function clickhandler()
    // {
    //    fetchdata();
    // }
    // React.useEffect(()=>
    // {
    //     fetchdata();
    // },[])
    const{gif,loading,fetchData}=useGif();
    function changehandler(e) {
      setTag(e.target.value);
    }

    function clickhandler() {
      fetchData(tag);
    }

    return(
     <section className="w-full overflow-hidden rounded-2xl border border-blue-700/20 bg-blue-500 p-4 shadow-xl shadow-blue-900/15 sm:p-6">
            <div className="flex min-h-[26rem] flex-col items-center gap-5">
              <h2 className="text-center text-2xl font-bold text-slate-950">A Random GIF</h2>
              <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-xl bg-black/10 p-2">
                {
                loading?(<Spinner/>):(<img src={gif} alt="Random GIF" className="max-h-[280px] max-w-full rounded-lg object-contain shadow-md" />)
              }
              </div>
              <input type="text" placeholder="Enter a tag" className="w-full rounded-xl border border-transparent bg-white px-4 py-3 font-medium text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-blue-900 focus:ring-4 focus:ring-white/50 sm:w-10/12" onChange={changehandler} value={tag}/>
              <button onClick={clickhandler} className="w-full rounded-xl bg-white px-4 py-3 font-bold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-white/50 active:translate-y-0 sm:w-10/12">Generate</button>
            </div>
        </section>
    )
}
export default Tag;
// output.data.data.images.original.url is path to fetch the particular gif in console
//the code written above the return must be less so we must use the custom hooks for the code

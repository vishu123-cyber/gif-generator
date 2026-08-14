import react from react;
const usegif=()=>{
    const[gif,setGif]=React.useState();
    const[loading,setloading]=React.useState(false);
    const randomurl='https://api.giphy.com/v1/gifs/random?api_key=kXYaX7wCACsfNka4VQudYPbSUeQ7V6bp';
    const tagurl='https://api.giphy.com/v1/gifs/random?api_key=kXYaX7wCACsfNka4VQudYPbSUeQ7V6bp&tag=${encodeURIComponent(tag)}';
     
    async function fetchdata(tag)
    {
        setloading(true);
        const output=await axios.get(tag?tagurl:randomurl);
        console.log(output);
        setGif(output.data.data.images.original.url);
        setloading(false);
    }
    React.useEffect(()=>
    {
        fetchdata();
    },[])
}
//if tag is true then tagurl else randomurl
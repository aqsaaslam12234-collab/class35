import { useLanguageStore } from "../store/StoreLanguage";

const LanguageComponent = () => {
    const {Language, setLanguage} = useLanguageStore();

    const addLanguage = (lang: string) => {
        setLanguage(lang);
    }  
  return (
    <>
    
   
    <div>

        <h2>Programming Languages: {Language}</h2>
        <button onClick={() => addLanguage("JavaScript")}>Add JavaScript</button>
        <button onClick={() => addLanguage("Python")}>Add Python</button>
        <button onClick={() => addLanguage("Java")}>Add Java</button>   
      
      
    </div>


    <select onChange={(e)=>{setLanguage(e.target.value)}} name="language" id="language">
        <option value="JavaScript">JavaScript</option>
        <option value="Python">Python</option>
        <option value="Java">Java</option>
    </select>
     </>
  )
}

export default LanguageComponent

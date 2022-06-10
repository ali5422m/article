import React,{useRef} from 'react'


function AddArticles({article,setArticle}) {
    const titleInput = useRef()
    const fileInput = useRef()
    const getContent =()=>{
        const title = titleInput.current.value
        const file = fileInput.current.files[0]
        setArticle([...article,{title,file:URL.createObjectURL(file)}])
    }
  return (
    <>
        
      <input type="text" placeholder="title" ref={titleInput} />
      <input type="file" accept="image/png image/jpg image/jpeg" ref={fileInput} />
      <button onClick={getContent} >submit</button>
    </>
  );
}

export default AddArticles
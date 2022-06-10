import React from 'react'

function Articles({article}) {
    console.log(article)
  return (
    <>
        {article.map((item)=>(
            <div>
                <img src={item.file} />
                <h1>{item.title}</h1>
            </div>
        )
        )}
    </>
  )
}

export default Articles
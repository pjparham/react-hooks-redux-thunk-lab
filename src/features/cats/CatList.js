import React from 'react'

export default function CatList({ catPics }) {
    const displayPics = catPics.map((pic) => {
        return <img src={pic.url} alt="cat" id={pic.id}/>
    })
  return (
    <div>{displayPics}</div>
  )
}

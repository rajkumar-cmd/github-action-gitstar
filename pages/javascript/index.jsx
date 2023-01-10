import React from 'react'
import Navbar from '../Components/Navbar'
import Image from 'next/image'

const Javascript = ({ items }) => {
  return (
    <div>
      <Navbar />
      <div style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"5px"}}>
        {items.map((item) => (
          <div key={item.id}>
            <div style={{ border: "1px solid black", padding: "1rem" }}>
              <Image src={item.owner.avatar_url} alt={item.id} width={100} height={100} />
              <h1>{item.name}</h1>
              <h2>{item.language}</h2>
              <h3>Fork:{item.forks}</h3>
              <h3>Watchers:{item.watchers}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  let r = await fetch("http://localhost:8090/items?language=JavaScript&_sort=id&_order=desc");
  let d = await r.json();
  return {
    props: {
      items: d,
    },
  };
}

export default Javascript
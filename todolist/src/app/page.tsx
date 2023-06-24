import React from 'react'

const Home = () => {
  return (
    <body>
    <header className="flex justify-between">
      <h1 className="text-2xl">Todos</h1>
      <a
         className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
         href="/new"
      >
        New
      </a>
    </header>
    <ul>
      <li> hi </li>
    </ul>
    </body>
  )
}

export default Home
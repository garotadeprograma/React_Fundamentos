import { useState } from 'react'
import Header from './Header'
import Home from './Home'
import Produtos from './Produtos'

const App = () => {

  const {pathname} = window.location;

  let Component = Home;

  if(pathname === '/produtos')
    Component = Produtos;
  else
    Component = Home;

  return (
    <section>
      <Header />
      <Component />
    </section>
  )
}

export default App

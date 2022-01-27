import { Container } from '@material-ui/core'
import React from 'react'
import ListaPost from '../components/ListPost'
import { UserRegistration } from './userRegistration'

const List = () => {

  return (
    <main>
      <ListaPost url={'/posts'} />
    </main>
  )
}

export default List

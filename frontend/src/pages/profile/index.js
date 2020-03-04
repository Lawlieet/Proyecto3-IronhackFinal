import React, { useEffect, useContext } from 'react'
import { MyContext } from '../../context'
import CardProfile from '../../components/CardProfile'
import { 
  Flex

} from '@chakra-ui/core'
//import { Link } from 'react-router-dom'




export default function Profile({ history }) {
  const context = useContext(MyContext)
  useEffect(() => {
    if (!context.state.isLogged) return history.push('/login')
  })
  return (
    <MyContext.Consumer>
      {context => {
        const { isLogged, loggedUser } = context.state
        if (isLogged)
          return (
            <React.Fragment>
              <Flex
                w="100vw"
                minH="100vh"
                flexWrap="wrap"
                direction="column"
                align="start"
              >

                <CardProfile user={loggedUser} history={history}/>
               
              </Flex>
              


            </React.Fragment>
          )
        else return <>Loading...</>
      }}
    </MyContext.Consumer>
  )
}
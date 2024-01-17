import React from "react"

interface Prop {
    children: React.ReactNode
}

const Container = ({children}: Prop) => {
  return (
    <div>
        <h2>Esse é o titulo do container.</h2>
        {children}
    </div>
  )
}

export default Container
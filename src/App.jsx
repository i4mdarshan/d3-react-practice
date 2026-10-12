import { useEffect, useRef } from 'react'
import * as d3 from 'd3'


const Svg = () => {

  return (
    <svg
      style={{
        border : "2px solid gold"
      }}
    ></svg>
  )
}

const Circle = () => {

  const ref = useRef();
  

  return (

    <svg ref={ref}></svg>
  )
}

export default function App() {

  return (
    <div>
      <h1>D3 + React</h1>
      <Svg />
    </div>
  )
}

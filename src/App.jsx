import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import Circle from './components/Circle'


const Svg = () => {

  return (
    <svg
      style={{
        border : "2px solid gold"
      }}
    ></svg>
  )
}

export default function App() {

  return (
    <div>
      <h1>D3 + React</h1>
      {/* <Svg /> */}
      <Circle />
    </div>
  )
}

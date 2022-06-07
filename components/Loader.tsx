import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { TailSpin } from  'react-loader-spinner'

const Loader = () => {
  return (
    <div className="flex items-center justify-center py-10">
      <TailSpin  color="#22d3ee" height={80} width={80} />
    </div>
  )
}

export default Loader
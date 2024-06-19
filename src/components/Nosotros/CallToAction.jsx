import React from 'react'
import { Link } from 'react-router-dom'

const CallToAction = () => {
  return (
    <div className="w-full min-h-[666px] py-[194px] bg-red-100 flex-col justify-center items-center gap-8 inline-flex">
    <div className="w-[734px] flex-col justify-center items-center gap-8 flex">
        <div className="w-[734px] grow shrink basis-0 text-center text-neutral-800 text-6xl font-medium font-['Helvetica Neue LT Std']">Diferenciate de la competencia</div>
        <div className="text-center text-neutral-800 text-base font-normal font-['Helvetica Neue LT Std']">Si queres potenciar tu negocio, ponete en contacto</div>
            <Link to={""} className="w-[238px]  h-[51px] rounded-md border border-neutral-800 flex-col justify-center items-center inline-flex overflow-hidden ">
                        <div className="w-full h-full bg-neutral-800 shadow-inner shadow-white/25 justify-center items-center gap-2.5 inline-flex text-white">
                        Impulsar mi negocio                        
                        </div>
            </Link>
    </div>
</div>
  )
}

export default CallToAction
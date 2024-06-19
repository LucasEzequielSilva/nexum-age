import React from 'react'


const QuienesSomos = () => {
  return (
    <div className="w-full min-h-[1368px] px-[120px] py-[194px] justify-center items-center gap-[146px] inline-flex">
        <div className="flex-col justify-center items-center gap-32 inline-flex">
            <div className="flex-col justify-center items-center gap-8 flex">
                <div className="text-center text-white h2-styled">Quienes somos</div>
                <div className="w-[986px] text-white text-base font-normal">En Nexum, somos el punto de encuentro entre lo creativo y lo inteligente. Nuestro equipo está compuesto por profesionales apasionados y expertos en diversas áreas, desde la estrategia de comunicación hasta la implementación de inteligencia artificial. Nos dedicamos a ofrecer soluciones integrales que conectan las ideas innovadoras con la tecnología de vanguardia, asegurando que cada proyecto refleje tanto la visión creativa como la eficiencia técnica.</div>
            </div>
            <img className="self-stretch h-[690px] rounded-md" src="assets/quienes-somos-1.png" />

        </div>
    </div>
  )
}

export default QuienesSomos
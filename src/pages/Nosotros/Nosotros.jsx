import React from 'react'
import Datos from '../../components/Nosotros/Datos'
import QuienesSomos from '../../components/Nosotros/QuienesSomos'
import NuestroEnfoque from '../../components/Nosotros/NuestroEnfoque'
import ComoTrabajamos from '../../components/Nosotros/ComoTrabajamos'
import CallToAction from '../../components/Nosotros/CallToAction'

const Nosotros = () => {
    return (
        <div className='min-h-screen flex flex-col gap-12 lg:gap-24 items-center text-center'>
            <section className='max-w-[735px] flex flex-col gap-8 min-h-[40vh] justify-center items-center'>
                <h3 className='h2-styled'>Tu negocio<br />en las mejores manos</h3>
                <p>Conoce nuestro enfoque, quienes somos y cómo trabajamos.</p>
            </section>
            <div className='flex flex-col bg-secondary w-full min-h-[40vh]'>
                <div className='min-h-[40vh] w-full relative overflow-hidden flex justify-center items-center spacing'>
                    <img className='absolute right-0 top-1/2 -translate-y-1/2 h-[600px] object-cover object-center' src="/assets/vector-transparent.png" alt="vector" />
                    <Datos/>
                </div>
                <QuienesSomos/>
                <NuestroEnfoque/>
                <ComoTrabajamos/>
                <CallToAction/>
            </div>
        </div>
    )
}

export default Nosotros
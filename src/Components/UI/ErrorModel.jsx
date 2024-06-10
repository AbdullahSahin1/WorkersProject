import React from 'react'
import Button from './Button'
import Card from './Card'
const ErrorModel = () => {
  return (
    <div className='Errormodal'>
      <div className='backdrop-blur-sm bg-white/30 fixed w-screen h-screen top-0'></div>
    <Card className="w-[36rem] p-0 z-20">
        <header 'bg-red-700 p-4 text-white rounded-t-xl' >
            <h2 className="text-center text-xl">İsim Alanı Zorunludur</h2>
        </header>
        <section>
            <span>Lütfen Bir İsim Giriniz</span>
        </section  className='p-4'>
        <footer  className='p-4 justify-end'>
            <Button className="w-32">Tamam</Button>
        </footer>
    </Card>
    </div>
  )
}

export default ErrorModel

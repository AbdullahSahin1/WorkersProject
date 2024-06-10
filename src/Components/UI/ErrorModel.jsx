import React from 'react'
import Button from './Button'
import Card from './Card'
const ErrorModel = () => {
  return (
    <div className='fixed mx-auto flex justify-center top-1/4 left-0 w-screen z-50'>
    <Card className="w-[36rem]">
        <header >
            <h2>İsim Alanı Zorunludur</h2>
        </header>
        <section>
            <span>Lütfen Bir İsim Giriniz</span>
        </section>
        <footer>
            <Button>Tamam</Button>
        </footer>
    </Card>
    </div>
  )
}

export default ErrorModel

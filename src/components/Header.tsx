import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='flex flex-col items-center space-y-5'>
        <div className='flex space-x-3 items-center'>
            <div>
            <Image src="https://links.papareact.com/jne" height={10} width={50} alt="logo"/>
            </div>
            <div>
            Welcome to meta messenger
        </div>
        </div>
        
    </div>
  )
}

export default Header
import React, { useState } from 'react'
import Navigation from '../components/Navigation/Navigation'
import { Outlet } from 'react-router-dom'
import BckgImage from '../assets/img/bg-1.png';
import Spinner from '../components/Spinner/Spinner';
import { useSelector } from 'react-redux';

const AuthenticationWrapper = () => {
	const isLoading = useSelector((state) => state?.commonState?.loading);
  return (
    <div>
      <Navigation variant="auth" />
			<div className="flex">
				<div className='hidden w-[60%] lg:w-[70%] md:inline py-2'>
					<img src={BckgImage} className='bg-cover w-full bg-center' alt='shoppingimag' />
				</div>
				<div>
					<Outlet />
				</div>
				{ isLoading && <Spinner /> }
			</div>
    </div>
  )
}

export default AuthenticationWrapper
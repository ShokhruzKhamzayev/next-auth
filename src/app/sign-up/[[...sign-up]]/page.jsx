import React from 'react'
import { SignUp } from '@clerk/nextjs'
import {metadata} from '../../layout'

export default function Page() {
    metadata.title = 'Sign Up | Shokhruz'
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <SignUp />
        </div>
    )
}

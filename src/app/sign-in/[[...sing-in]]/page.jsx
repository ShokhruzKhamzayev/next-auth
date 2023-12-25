import React from 'react'
import { SignIn } from '@clerk/nextjs'
import { metadata } from '../../layout.js'

export default function Page() {
    metadata.title = 'Sign In | Shokhruz '
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <SignIn />
        </div>
    )
}

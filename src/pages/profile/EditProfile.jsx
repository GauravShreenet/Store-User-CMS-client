import React from 'react'
import { MainLayout } from '../../component/layout/MainLayout'
import { UpdateProfile } from '../../component/user-profile/UpdateProfile'
import { UpdatePassword } from '../../component/user-profile/UpdatePassword'
import accountHero from '../../assets/accountHero.jpg'

export const EditProfile = () => {
    return (
        <MainLayout heroImage={accountHero} title='Account Detail'>
            <div className='flex justify-center'>
                <div>
                    <h3 className='text-4xl font-semibold mt-10'>Update Profile</h3>
                    <UpdateProfile />
                    <h3 className='text-4xl font-semibold mt-10'>Update Password</h3>
                    <UpdatePassword />
                </div>
                
            </div>
        </MainLayout>
    )
}

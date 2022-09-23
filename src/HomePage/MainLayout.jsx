import React from 'react'
import Card from './Card'

export default function MainLayout() {
    return (
        <div className='Main-Main'>
            {/* <div class="grid text-center"> */}
            <div class="g-col-6"><Card /></div>
            <div class="g-col-6"><Card /></div>

            <div class="g-col-6"><Card /></div>
            <div class="g-col-6"><Card /></div>
            {/* </div> */}
        </div>
    )
}

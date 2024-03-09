'use client';

import Navbar from '@/shared/widgets/Navbar/Navbar';
import Sidebar from '@/shared/widgets/Sidebar/Sidebar';

export default function Home() {
    return (
        <div className='wrapper'>
            <Navbar />
            <div className='content-page flex '>
                <Sidebar />
                <div>
                    content
                </div>
            </div>
        </div>
    );
}

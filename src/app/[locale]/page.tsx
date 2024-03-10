import { useTranslations } from 'next-intl';

import Navbar from '@/shared/widgets/Navbar/Navbar';
import Sidebar from '@/shared/widgets/Sidebar/Sidebar';

export default function Home() {
    const t = useTranslations();

    return (
        <div className='wrapper'>
            <Navbar />
            <div className='content-page flex '>
                <Sidebar />
                <div>{t('Контент')}</div>
            </div>
        </div>
    );
}

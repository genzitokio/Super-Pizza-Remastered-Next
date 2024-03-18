import { useTranslations } from 'next-intl';
import Sidebar from '@/widgets/Sidebar/Sidebar';
import Navbar from '@/widgets/Navbar/Navbar';
import { useDispatch } from 'react-redux';

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

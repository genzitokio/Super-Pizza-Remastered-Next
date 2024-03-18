'use client';

import React, { useState } from 'react';
import { PizzaIcon } from '@/shared/assets/icons/PizzaIcon';
import { ModeToggle } from '@/shared/ui/ModeToggle';
import { LanguageSwitcher } from '@/shared/ui/LanguageSwitcher';
import { ArrowIcon } from '@/shared/assets/icons/ArrowIcon';
import { useTranslations } from 'next-intl';


import './Sidebar.scss';


const Sidebar = () => {

    const [collapsed, setCollapsed] = useState(false);
    const t = useTranslations();



    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };


    return (
        <div
            className={`sidebar flex flex-col justify-between items-center bg-slate-300 p-4 w-64 rounded-3xl shadow-xl bg-opacity-50 mr-4 ml-3 ${collapsed ? 'collapsed' : ''}`}
            style={{ height: '90vh' }}>


            <div className='flex flex-col items-center gap-1.5'>
                <div>
                    <PizzaIcon />
                </div>
                <div className={`SidebarLinkBlock ${collapsed ? 'collapsed' : ''}`}>

                    <div
                        className={`SidebarLinkItem ${collapsed ? 'collapsed' : ''}`}
                    >
                        {t('Главная')}
                    </div>
                    <div
                        className={`SidebarLinkItem ${collapsed ? 'collapsed' : ''}`}

                    >
                        {t('О сайте')}
                    </div>
                    <div
                        className={`SidebarLinkItem ${collapsed ? 'collapsed' : ''}`}

                    >
                        {t('Каталог')}
                    </div>
                </div>
            </div>


            <button
                className={`SidebarButton relative left-20 bottom-16 ${collapsed ? 'collapsed' : ''} `}
                onClick={onToggle}>
                <div className='ArrowIconWrapper'>
                    <ArrowIcon />
                </div>

            </button>

            <div
                className={`SwitcherBlock ${collapsed ? 'collapsed' : ''}`}

            >

                <div className='flex gap-2 items-center'>
                    <ModeToggle />

                    <LanguageSwitcher variant={'outline'}
                    >EN</LanguageSwitcher>

                </div>
            </div>
        </div>
    );
};

export default Sidebar;

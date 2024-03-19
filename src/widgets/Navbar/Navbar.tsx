'use client'

import React, { useEffect, useState } from 'react';

import { useTranslations } from 'next-intl';
import { LoginModal } from "@/shared/ui/LoginModal";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/shared/ui/shadcn/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/shadcn/avatar";

const Navbar = () => {
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    const t = useTranslations();

    return (
        <div className='navbar h-8 bg-transparent pt-2'>
            <div className='flex justify-end mr-5 items-center'>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar>
                            <AvatarImage src='https://avatars.githubusercontent.com/u/147877141?s=400&u=1d050a378350cc9a61c6d9791762c949bd1a51ac&v=4' />
                            <AvatarFallback>avatar</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        {/* eslint-disable-next-line react/jsx-no-undef */}
                        <DropdownMenuLabel>{t('Мой профиль')}</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>{t('Профиль')}</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                {domLoaded && <LoginModal/>}


            </div>
        </div>
    );
};

export default Navbar;

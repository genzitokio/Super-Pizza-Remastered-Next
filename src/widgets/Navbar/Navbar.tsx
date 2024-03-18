'use client';

import React, { useCallback, useEffect, useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';
import { useTranslations } from 'next-intl';
import { LoginModal } from '@/features/AuthByUsername';
import LoginModalRedux from "@/features/AuthByUsername/ui/LoginModalRedux/LoginModalRedux";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "@/entities/User";

const Navbar = () => {
    const [domLoaded, setDomLoaded] = useState(false);

    // const [isAuthModal, setIsAuthModal] = useState(false);
    // const authData = useSelector(getUserAuthData);
    // const dispatch = useDispatch();
    //
    // const onCloseModal = useCallback(() => {
    //     setIsAuthModal(false);
    // }, []);
    //
    // const onShowModal = useCallback(() => {
    //     setIsAuthModal(true);
    // }, []);
    //
    // const onLogout = useCallback(() => {
    //     dispatch(userActions.logout());
    // }, [dispatch]);
    //
    //
    //
    //


    useEffect(() => {
        setDomLoaded(true);
    }, []);

    const t = useTranslations();

    return (
        <div className='navbar h-8  bg-transparent pt-2 '>
            <div className='flex justify-end mr-5 items-center '>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar>
                            <AvatarImage src='https://avatars.githubusercontent.com/u/147877141?s=400&u=1d050a378350cc9a61c6d9791762c949bd1a51ac&v=4' />
                            {/* eslint-disable-next-line i18next/no-literal-string */}
                            <AvatarFallback>avatar</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>{t('Мой профиль')}</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>{t('Профиль')}</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                {domLoaded && <LoginModal />}

                <LoginModalRedux

                //     isOpen={isAuthModal}
                />

            </div>
        </div>
    );
};

export default Navbar;

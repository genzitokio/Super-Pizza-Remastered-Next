import React from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/shared/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';

const Navbar = () => {
    return (
        <div className='navbar h-8  bg-transparent pt-2 '>
            <div className='flex justify-end mr-20 '>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar>
                            <AvatarImage
                                src='https://avatars.githubusercontent.com/u/147877141?s=400&u=1d050a378350cc9a61c6d9791762c949bd1a51ac&v=4' />
                            <AvatarFallback>avatar</AvatarFallback>
                        </Avatar></DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Мой профиль</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Профиль</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>
        </div>
    );
};

export default Navbar;

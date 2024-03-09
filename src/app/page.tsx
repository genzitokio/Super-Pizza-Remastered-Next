'use client';

import { ModeToggle } from '@/shared/ui/ModeToggle';
import { Toggle } from '@/shared/ui/toggle';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/shared/ui/dropdown-menu';
import { PizzaIcon } from '@/shared/assets/icons/PizzaIcon';


export default function Home() {
    return (
        <div className="wrapper">

            <div className="navbar h-8  bg-transparent pt-2 ">
                <div className='flex justify-end mr-20 '>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Avatar>
                                <AvatarImage
                                    src="https://avatars.githubusercontent.com/u/147877141?s=400&u=1d050a378350cc9a61c6d9791762c949bd1a51ac&v=4"/>
                                <AvatarFallback>avatar</AvatarFallback>
                            </Avatar></DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Мой профиль</DropdownMenuLabel>
                            <DropdownMenuSeparator/>
                            <DropdownMenuItem>Профиль</DropdownMenuItem>
                            <DropdownMenuItem>Billing</DropdownMenuItem>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuItem>Subscription</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>
            </div>


            <div className='content-page flex '>

                <div
                    className="sidebar flex flex-col justify-between items-center bg-slate-300 p-4 w-64 rounded-3xl shadow-xl bg-opacity-50  mr-4 ml-3 " style={{ height: '90vh' }}>


                    <div className="flex flex-col items-center gap-1.5">
                        <div>
                            <PizzaIcon/>
                        </div>
                        <div className='mt-2'>
                            Главная
                        </div>
                        <div>
                            О сайте
                        </div>
                        <div>
                            Каталог
                        </div>

                    </div>


                    <div className="flex items-center">
                        <ModeToggle/>

                        <Toggle
                        >EN</Toggle>

                    </div>
                </div>

                <div>
                    content
                </div>
            </div>

        </div>
    );
}


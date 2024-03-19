'use client';

import React, { ChangeEvent, useTransition } from 'react';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { Toggle } from '@/shared/ui/shadcn/toggle';

const LangSwitcher = () => {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localActive = useLocale();

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;
        startTransition(() => {
            router.replace(`/${nextLocale}`);
        });
    };


    return (
        <>
            <Toggle variant={'outline'}>EN</Toggle>


            <label className='border-2 rounded'>
                <p className='sr-only'>change language</p>
                <select
                    defaultValue={localActive}
                    className='bg-transparent py-2'
                    onChange={onSelectChange}
                    disabled={isPending}
                >
                    <option value='ru'>Русский</option>
                    <option value='en'>Английский</option>
                </select>
            </label>
        </>
    );
};

export default LangSwitcher;

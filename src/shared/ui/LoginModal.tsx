import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/shared/ui/alert-dialog';
import { Button } from '@/shared/ui/button';
import React from 'react';
import { useTranslations } from 'next-intl';
import { InputForm } from "@/shared/ui/InputForm";

export const LoginModal = () => {
    const t = useTranslations();

    return (
        <AlertDialog>
            <AlertDialogTrigger>
                <Button variant='ghost' className='ml-2'>
                    {t('Войти')}
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Форма авторизации</AlertDialogTitle>
                </AlertDialogHeader>

                <InputForm />

                <AlertDialogFooter>
                    <AlertDialogCancel>Отменить</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

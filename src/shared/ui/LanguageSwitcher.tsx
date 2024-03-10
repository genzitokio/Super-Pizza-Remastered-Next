'use client';

import * as React from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { cva, type VariantProps } from 'class-variance-authority';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

import { cn } from '@/lib/utils';

const toggleVariants = cva(
    'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground ',
    {
        variants: {
            variant: {
                default: 'bg-transparent',
                outline:
                'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
            },
            size: {
                default: 'h-10 px-3',
                sm: 'h-9 px-2.5',
                lg: 'h-11 px-5',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    },
);

const LanguageSwitcher = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>
>((props, ref) => {
    const router = useRouter();
    const localActive = useLocale();
    const [isActive, setIsActive] = React.useState(localActive === 'en');

    const onSelectChange = (nextLocale: string) => {
        router.replace(`/${nextLocale}`);
        setIsActive(nextLocale === 'en');
    };

    const handleToggleChange = () => {
        const nextLocale = localActive === 'en' ? 'ru' : 'en';
        onSelectChange(nextLocale);
    };

    return (
        <TogglePrimitive.Root
            ref={ref}
            className={cn(toggleVariants({ class: undefined, ...props }), { 'data-[state=on]': isActive })}
            onClick={handleToggleChange}
            aria-label={localActive === 'en' ? 'Switch to Russian' : 'Switch to English'}
        >
            {props.children}
        </TogglePrimitive.Root>
    );
});

LanguageSwitcher.displayName = TogglePrimitive.Root.displayName;

export { LanguageSwitcher, toggleVariants };

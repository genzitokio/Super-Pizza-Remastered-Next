import {Button} from "@/shared/ui/button";
import {ModeToggle} from "@/shared/ui/ModeToggle";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

            <Button
                className='Button'
                variant="outline">Button</Button>

            <ModeToggle/>

        </main>
    );
}

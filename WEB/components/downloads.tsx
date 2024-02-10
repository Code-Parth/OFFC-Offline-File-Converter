// imports
import Image from 'next/image';
import Link from 'next/link';

export default function Download() {
    return (
        <>
            <div className="space-y-4 my-10 pb-8 flex flex-col items-center gap-x-4">
                <h1 className="text-3xl md:text-4xl font-semibold text-center underline my-20 text-white">
                    Downloads
                </h1>
                <button className="bg-[#5F53E9] rounded-full flex items-center justify-center w-96 h-16 font-semibold text-2xl text-white gap-2">
                    <Link href="/">
                        <Image
                            alt="logo"
                            className="px-3"
                            src="/windows.svg"
                            height={70}
                            width={70}
                        />
                    </Link>Download For Windows
                </button>
            </div>
        </>
    );
}

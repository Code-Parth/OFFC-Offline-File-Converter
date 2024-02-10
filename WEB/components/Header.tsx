import Link from 'next/link'

export default function Header() {
    return (
        <>
            <div className="w-full border-b rounded-lg mb-5">
                <div className="max-w-[90%] w-full px-3 xl:p-0 my-5 mx-auto flex justify-between items-center">
                    <Link href="./" className='text-2xl'>OffC</Link>
                    <div className="flex items-center gap-5">
                        <Link href="#home" className='text-xl'>Home</Link>
                        <Link href="#download" className='text-xl'>Download</Link>
                        <Link href="#cli" className='text-xl'>CLI</Link>
                        <Link href="#contact" className='text-xl'>Contact Us</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

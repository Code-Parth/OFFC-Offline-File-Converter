import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Dropzone from '@/components/dropzone';
import Features from '@/components/Features';
import Download from '@/components/downloads';

export default function Home() {
    return (
        <>
            <Header />
            <div className="w-full min-h-[50vh] max-w-[90%] items-center mx-auto p-5 mb-5">
                <div className="grid grid-cols-2 gap-8 max-lg:grid-cols-1">
                    <div className="w-full min-w-50 min-h-50 p-5">
                        <div className='flex flex-row'>
                            <div className="grid grid-rows-3 h-full ">
                                <p className='text-4xl font-bold'>
                                    One Protocol,
                                    <br />
                                    Unlimited Conversions
                                </p>
                                <p className='mt-20 text-xl font-medium'>
                                    Ditch the cloud! Convert audio, video, and images directly on your device, offline & secure. Blazing speed, total privacy. Try Off C today!
                                </p>
                                <div className="flex flex-wrap justify-between mt-16">
                                    <div className="flex-1">
                                        <h2 className="text-xl font-semibold text-[#bd1e59]">25+</h2>
                                        <p className="mt-2 text-2xl font-bold">Formats</p>
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-xl font-semibold text-[#bd1e59]">100+</h2>
                                        <p className="mt-2 text-2xl font-bold">Users</p>
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-xl font-semibold text-[#bd1e59]">15+</h2>
                                        <p className="mt-2 text-2xl font-bold">Files At Once</p>
                                    </div>
                                    <div className="flex-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full min-w-50 min-h-50 p-5">
                        <Image src="./page.svg" height={512} width={512} alt='Home Illustrator' className='w-full max-h-[50vh] items-center mx-auto' />
                    </div>
                </div>
            </div>
            <div className='w-full max-w-[90%] items-center mx-auto p-5 mb-5'>
                <Dropzone />
            </div>
            <div className='w-full max-w-[90%] items-center mx-auto p-5 mb-5'>
                <Download />
            </div>
            <div className='w-full max-w-[90%] items-center mx-auto p-5 mb-5'>
                <Features />
            </div>
            <Footer />
        </>
    );
}

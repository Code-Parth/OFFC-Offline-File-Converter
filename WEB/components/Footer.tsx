import { Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <>
            <footer className="bg-black text-white">
                <div className="container mx-auto px-4 py-8 md:py-12 lg:flex lg:justify-between lg:items-start">
                    <div className="mb-6 lg:mb-0 lg:w-1/4">
                        <p className="mb-4 text-sm">+1 (763) 547-12-97</p>
                        <p className="text-sm">apexiacontact@gmail.com</p>
                    </div>
                    <div className="mb-6 lg:mb-0 lg:w-1/4">
                        <h5 className="mb-4 font-semibold">Quick Links</h5>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a className="hover:underline" href="#">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a className="hover:underline" href="#">
                                    Download on PC
                                </a>
                            </li>
                            <li>
                                <a className="hover:underline" href="#">
                                    Use CLI
                                </a>
                            </li>
                            <li>
                                <a className="hover:underline" href="#">
                                    Try Offline
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-6 lg:mb-0 lg:w-1/4">
                        <h5 className="mb-4 font-semibold invisible">Placeholder</h5>
                        <div className="flex justify-center lg:justify-end">
                            <img
                                alt="Hack This Fall"
                                className="h-15 w-40"
                                height="60"
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "200/60",
                                    objectFit: "cover",
                                }}
                                width="200"
                            />
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700">
                    <div className="container mx-auto px-4 py-4 flex flex-col items-center justify-between lg:flex-row">
                        <div className="flex space-x-4 mb-4 lg:mb-0">
                            <Linkedin className="text-white" />
                            <Facebook className="text-white" />
                            <Twitter className="text-white" />
                        </div>
                        <p className="text-xs text-center lg:text-left">A product from OffC</p>
                        <p className="text-xs text-center lg:text-right">©2024 OffC Pvt. Ltd.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
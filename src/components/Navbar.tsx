import Link from "next/link"
import Image from "next/image"
import MobileMenu from "./MobileMenu"
import { ClerkLoading, ClerkLoaded, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

const Navbar = () => {
    return (
        <div className='h-20 flex items-center justify-between'>
            {/* LEFT */}
            <div className='md:hidden lg:block w-[20%]'>
                <Link href="/" className="font-bold text-3xl font-poppins">
                    <span className="text-orange-500">collab</span>
                    <span className="text-blue-800">.ceb</span>
                </Link>
            </div>
            {/* CENTER */}
            <div className='hidden md:flex w-[50%] text-sm items-center justify-between'>
                {/* LINKS */}
                {/* <div className="flex gap-6 text-gray-600">
                     <Link href="/" className="flex items-center gap-2">
                        <Image src="/home.png" alt="Homepage" width={16} height={16} className="w-4 h-4" />
                        <span>Homepage</span>
                    </Link>
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/friends.png" alt="Friends" width={16} height={16} className="w-4 h-4" />
                        <span>Friends</span>
                    </Link>

                </div>*/}

                <div className="hidden xl:flex p-4 gap-1 bg-white items-center rounded-3xl w-72 h-10 border border-gray-300">
                    <Image src="/search.png" alt="" width={16} height={16} />
                    <input type="text" placeholder="Search NGOs, events, or causes..." className="bg-transparent outline-none" />
                </div>
            </div>
            {/* RIGHT */}
            <div className='w-[30%] flex items-center gap-4 xl:gap-8 justify-end'>
                <ClerkLoading>
                    <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
                </ClerkLoading>
                <ClerkLoaded>
                    <SignedIn>
                        <div className="cursor-pointer">
                            <Image src="/people.png" alt="" width={24} height={24} />
                        </div>
                        <div className="cursor-pointer">
                            <Image src="/messages.png" alt="" width={20} height={20} />
                        </div>
                        <div className="cursor-pointer">
                            <Image src="/notifications.png" alt="" width={20} height={20} />
                        </div>
                        <UserButton/>
                    </SignedIn>
                    <SignedOut>
                        <div className="flex items-center gap-2 text-sm">
                            <Image src="/stories.png" alt="" width={20} height={20} />
                            <Link href="/sign-in">Login/Register</Link>
                        </div>
                    </SignedOut>
                </ClerkLoaded>
                <MobileMenu />
            </div>
        </div>
    )
}

export default Navbar
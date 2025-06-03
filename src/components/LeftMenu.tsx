import Image from "next/image"
import Link from "next/link";
import ProfileCard from "./ProfileCard";

const LeftMenu = ({ type }: { type: "home" | "profile" }) => {
    return (
        <div className="flex flex-col gap-6">
            {type === "home" && <ProfileCard />}

            <div className='flex flex-col font-poppins p-4 rounded-lg text-sm gap-2'>
                <Link 
                    href="/"
                    className="flex items-center gap-4 py-2 px-6 rounded-lg hover:bg-orange-300"
                    >
                        <Image src="/home.png" alt="" width={20} height={20} />
                        <span>Home</span>
                </Link>
                <Link 
                    href="/"
                    className="flex items-center gap-4 py-2 px-6 rounded-lg hover:bg-orange-300"
                    >
                        <Image src="/people.png" alt="" width={20} height={20} />
                        <span>My Events</span>
                </Link>
                <Link 
                    href="/"
                    className="flex items-center gap-4 py-2 px-6 rounded-lg hover:bg-orange-300"
                    >
                        <Image src="/groups.png" alt="" width={20} height={20} />
                        <span>NGOs Directory</span>
                </Link>
                <Link 
                    href="/"
                    className="flex items-center gap-4 py-2 px-6 rounded-lg hover:bg-orange-300"
                    >
                        <Image src="/messages.png" alt="" width={20} height={20} />
                        <span>Messages</span>
                </Link>
                <Link 
                    href="/"
                    className="flex items-center gap-4 py-2 px-6 rounded-lg hover:bg-orange-300"
                    >
                        <Image src="/notification.png" alt="" width={20} height={20} />
                        <span>Notifications</span>
                </Link>
                <Link 
                    href="/"
                    className="flex items-center gap-4 py-2 px-6 rounded-lg hover:bg-orange-300"
                    >
                        <Image src="/settings.png" alt="" width={20} height={20} />
                        <span>Settings</span>
                </Link>
            </div>
        </div>
    )
}

export default LeftMenu;
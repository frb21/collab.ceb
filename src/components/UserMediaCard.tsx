import Link from "next/link";
import Image from "next/image";

const  UserMediaCard = ({ userId }: { userId: string }) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
            {/* TOP */}
            <div className="flex items-center justify-between font-medium">
                <span className="font-bold text-gray-800">User Media</span>
                <Link href="/" className="text-blue-500 text-xs">
                    See all
                </Link>
            </div>

            {/* BOTTOM */}
            <div className="flex gap-4 justify-between flex-wrap">
                <div className="relative w-1/5 h-24">
                    <Image src="https://images.pexels.com/photos/31734261/pexels-photo-31734261/free-photo-of-black-and-white-view-of-london-eye-ferris-wheel.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill className="object-cover rounded-md cursor-pointer" />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image src="https://images.pexels.com/photos/31734261/pexels-photo-31734261/free-photo-of-black-and-white-view-of-london-eye-ferris-wheel.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill className="object-cover rounded-md cursor-pointer" />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image src="https://images.pexels.com/photos/31734261/pexels-photo-31734261/free-photo-of-black-and-white-view-of-london-eye-ferris-wheel.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill className="object-cover rounded-md cursor-pointer" />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image src="https://images.pexels.com/photos/31734261/pexels-photo-31734261/free-photo-of-black-and-white-view-of-london-eye-ferris-wheel.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill className="object-cover rounded-md cursor-pointer" />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image src="https://images.pexels.com/photos/31734261/pexels-photo-31734261/free-photo-of-black-and-white-view-of-london-eye-ferris-wheel.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill className="object-cover rounded-md cursor-pointer" />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image src="https://images.pexels.com/photos/31734261/pexels-photo-31734261/free-photo-of-black-and-white-view-of-london-eye-ferris-wheel.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill className="object-cover rounded-md cursor-pointer" />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image src="https://images.pexels.com/photos/31734261/pexels-photo-31734261/free-photo-of-black-and-white-view-of-london-eye-ferris-wheel.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill className="object-cover rounded-md cursor-pointer" />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image src="https://images.pexels.com/photos/31734261/pexels-photo-31734261/free-photo-of-black-and-white-view-of-london-eye-ferris-wheel.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill className="object-cover rounded-md cursor-pointer" />
                </div>
            </div>
        </div>
    )
};

export default UserMediaCard;
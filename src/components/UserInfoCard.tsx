import Link from "next/link";
import Image from "next/image";

const  UserInfoCard = ({ userId }: { userId: string }) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
            {/* TOP */}
            <div className="flex justify-between items-center font-medium">
                <span className="font-bold text-gray-800">User Information</span>
                <Link href="/" className="text-blue-500 text-xs">
                    See all
                </Link>
            </div>

            {/* BOTTOM */}
            <div className="flex flex-col gap-4 text-gray-500">
                <div className="flex items-center gap-2">
                    <span className="text-xl">John McClane</span>
                    <span className="text-sm">@jomac</span>
                </div>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur quis quasi natus voluptas vero culpa quaerat rem accusantium eaque quidem vel, fugit rerum cum ex ullam magnam nostrum? Tempora, eos?
                </p>
                <div className="flex items-center gap-2">
                    <Image src="/map.png" alt="" width={16} height={16} />
                    <span>Living in <b>Cebu</b></span>
                </div>

                <div className="flex items-center gap-2">
                    <Image src="/school.png" alt="" width={16} height={16} />
                    <span>Went to <b>University of the Philippines</b></span>
                </div>

                <div className="flex items-center gap-2">
                    <Image src="/work.png" alt="" width={16} height={16} />
                    <span>Works at <b>Google</b></span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex gap-1 items-center">
                        <Image src="/link.png" alt="" width={16} height={16} />
                        <Link href="https://uvec.upcebu.edu.ph/" className="text-blue-500 font-medium">
                            UVEC
                        </Link>
                    </div>
                    <div className="flex gap-1 items-center">
                        <Image src="/date.png" alt="" width={16} height={16} />
                        <span>Joined February 2024</span>
                    </div>
                </div>
                <button className="bg-orange-500 text-white text-sm rounded-md py-2 hover:bg-orange-600">Follow</button>
                <span className="text-red-400 self-end text-small cursor-pointer">Block User</span>
            </div>
        </div>
    )
};

export default UserInfoCard;
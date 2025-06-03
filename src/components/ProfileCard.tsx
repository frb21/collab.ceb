import Image from "next/image";

const ProfileCard = () => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4 items-center text-center">
            <div className="relative">
                <Image 
                    src="/noAvatar.png"
                    alt=""
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full border border-gray-400 object-cover"
                />
            </div>

            <div className="flex flex-col gap-0 font-poppins">
                <span className="text-base font-bold text-black">Maria Santos</span>
                <span className="text-gray-500 font-medium">Volunteer</span>
            </div>
        </div>
    );
};

export default ProfileCard;
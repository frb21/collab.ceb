import Image from "next/image"

const LeftMenu = () => {
    return (
      <div>
        <div className='flex flex-col items-center bg-white rounded-md shadow-md p-4 space-y-4 space-x-4 ml-4 w-fit '>
            {/* PROFILE */}
            <Image src="/noAvatar.png" alt="" width={48} height={48} className='w-12 h-12 object-cover rounded-full border border-gray-400' />
            <span className='font-poppins text-base font-bold text-black'>Maria Santos</span>
            <span className='font-poppins font-medium'>Volunteer</span>
        </div>

        <div className='flex flex-col p-2 space-y-1 space-x-1 mt-3 ml-1 w-fit font-poppins'>
            {/* DROPDOWN MENU */}
            <button className="flex items-center gap-3 cursor-pointer px-4 py-2 rounded-md text-black hover:bg-orange-400 hover:font-semibold transition">
                <Image src="/home.png" alt="" width={18} height={18} />
                <span className="whitespace-nowrap">Home</span>
            </button>

            <button className="flex items-center gap-3 cursor-pointer px-4 py-2 rounded-md text-black hover:bg-orange-400 hover:font-semibold transition">
                <Image src="/people.png" alt="" width={18} height={18} />
                <span className="whitespace-nowrap">My Events</span>
            </button>

            <button className="flex items-center gap-3 cursor-pointer px-4 py-2 rounded-md text-black hover:bg-orange-400 hover:font-semibold transition">
                <Image src="/groups.png" alt="" width={18} height={18}/>
                <span className="whitespace-nowrap">NGOs Directory</span>
            </button>

            <button className="flex items-center gap-3 cursor-pointer px-4 py-2 rounded-md text-black hover:bg-orange-400 hover:font-semibold transition">
                <Image src="/messages.png" alt="" width={18} height={18}/>
                <span className="whitespace-nowrap">Messages</span>
            </button>

            <button className="flex items-center gap-3 cursor-pointer px-4 py-2 rounded-md text-black hover:bg-orange-400 hover:font-semibold transition">
                <Image src="/notification.png" alt="" width={18} height={18}/>
                <span className="whitespace-nowrap">Notifications</span>
            </button>
            
            <button className="flex items-center gap-3 cursor-pointer px-4 py-2 rounded-md text-black hover:bg-orange-400 hover:font-semibold transition">
                <Image src="/settings.png" alt="" width={18} height={18} />
                <span className="whitespace-nowrap">Settings</span>
            </button>
        </div>
      </div>
    )
}

export default LeftMenu;
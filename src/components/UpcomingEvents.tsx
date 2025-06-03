const UpcomingEvents = () => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
            {/* TOP */}
            <span className="font-bold text-gray-800">Upcoming Events</span>

            {/* EVENT */}
            <div className="flex flex-col gap-1">
                <span className="text-gray-800 font-medium">Community Health Fair</span>
                <span className="text-gray-500 text-xs">Apr 26</span>
            </div>

            {/* BOTTOM */}
            <div className="flex">
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm font-medium w-full">
                    RSVP
                </button>
            </div>
        </div>
    );
};

export default UpcomingEvents;
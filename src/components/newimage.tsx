export default function newimage() {
    return (


        <div className="relative h-full overflow-hidden">
            <img
                src="https://rino-pelle.com/cdn/shop/files/RinoPelle_10juni_2024_37952_copy.jpg?v=1737389160"
                alt="Fashion Collection"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />

            {/* Overlay background */}
            <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-30 transition-all duration-300"></div>

            {/* Text content: centered horizontally, aligned bottom */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white z-10 w-11/12 max-w-3xl text-justify">
                <h3 className="text-lg font-semibold tracking-wide mb-2">Spring Summer 25</h3>
                <h1 className="text-2xl md:text-4xl font-bold">Explore the latest lookbook</h1>
            </div>
        </div>

    );
}
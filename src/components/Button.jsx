const Button = ({ name, isBeam = false, containerClass }) => {
    return (
        <div className="flex flex-wrap justify-center gap-6">
            <a className="relative" href="/Contact">
                <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
                <span
                    className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:text-white hover:bg-black">{name}</span>
            </a>
        </div>

    );
};

export default Button;
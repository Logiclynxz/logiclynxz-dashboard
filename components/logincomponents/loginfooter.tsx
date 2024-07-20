export default function LoginFooter() {
    return (
        <footer className="   w-full  h-full p-4 bg-blue-400 ">
            <div className="flex lg:justify-between justify-center container">
                <div className="lg:flex gap-2 hidden ">
                    <div className="h-[20px] w-[20px] bg-green-300 rounded-full drop-shadow-lg"></div>
                    <div className="h-[20px] w-[20px] bg-red-300 rounded-full drop-shadow-lg"></div>
                    <div className="h-[20px] w-[20px] bg-blue-300 rounded-full drop-shadow-lg"></div>
                </div>
                <div className="flex justify-center lg:justify-end">
                    <div className="">Official website of <span className="font-bold">logiclynxz 2024</span></div>
                </div>
            </div>
        </footer>
    );
}
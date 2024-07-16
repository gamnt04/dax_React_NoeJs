const ListPage = () => {
    return (
        
            <div className="lg:w-full flex lg:flex-row mb:flex-col justify-between items-center lg:pt-6 pt-[18px] mb:gap-y-5 lg:gap-y-0">
                    <span className="lg:w-auto  mb:w-full text-[#717378] lg:text-sm mb:text-xs">Showing 1-30 of 393
                        results</span>

                    <div className="lg:w-auto mb:w-[342px] flex items-center justify-left *:w-9 *:h-9 *:rounded-[50%] *:grid *:place-items-center lg:gap-x-[9.5px] gap-x-1 text-xs lg:text-sm">
                        <button className="border">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" className="lucide lucide-chevron-left">
                                <path d="m15 18-6-6 6-6" />
                            </svg>
                        </button>

                        <button className="bg-[#F2F6F4]">1</button>
                        <button className="hover:bg-[#f2f6f4]">2</button>
                        <button className="hover:bg-[#f2f6f4]">3</button>
                        <button className="hover:bg-[#f2f6f4]">4</button>
                        <span className="hover:bg-[#f2f6f4]">...</span>
                        <button className="hover:bg-[#f2f6f4]">55</button>

                        <button className="border">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" className="lucide lucide-chevron-right">
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </button>
                    </div>
                </div>
       
    )
}
export default ListPage
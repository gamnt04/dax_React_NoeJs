const HeaderShop = () => {
    return (
       <>
        
                    <strong className="lg:text-2xl mb:text-base font-normal">Shop</strong>
                    <div className="flex gap-x-[10px]">
                        <div className="relative lg:hidden group w-[78px] flex place-items-center gap-x-2 h-[34px] border rounded-[100px] px-3 cursor-pointer border-gray-300 text-gray-700 text-xs tracking-[-0.5px]">
                            Filter <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-chevron-down group-hover:rotate-180 duration-300">
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                            <ul className="absolute hidden group-hover:block top-full bg-white shadow-xl p-3 *:mb-3 *:mx-2 *:whitespace-nowrap left-0 columns-2 *:duration-300">
                                <li className="hover:text-[#17AF26]">John Mayer</li>
                                <li className="hover:text-[#17AF26]">John Mayer</li>
                                <li className="hover:text-[#17AF26]">John Mayer</li>
                                <li className="hover:text-[#17AF26]">John Mayer</li>
                                <li className="hover:text-[#17AF26]">John Mayer</li>
                            </ul>
                        </div>
                        <div className="relative group flex lg:gap-x-3 gap-x-1.5 place-items-center py-2 border rounded-[100px] px-[14px] cursor-pointer border-gray-300 text-gray-700 lg:text-sm text-xs">
                            Short By Lates <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round"
                                className="lucide lucide-chevron-down group-hover:rotate-180 duration-300 lg:w-[22px] lg:h-[22px] w-[14px] h-[14px]">
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                            <ul
                                className="absolute hidden group-hover:block top-full right-0 bg-white shadow-xl py-2 px-3 *:my-2 *:whitespace-nowrap w-[50vw]">
                                <li>John Mayer</li>
                                <li>John Mayer</li>
                                <li>John Mayer</li>
                                <li>John Mayer</li>
                                <li>John Mayer</li>
                            </ul>
                        </div>
                    </div>
       </>
      
    )
}
export default HeaderShop
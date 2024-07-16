const FilterProduct = () => {
return (
    <>
    <div
      className="flex mb:flex-col md:flex-row md:items-center mb:gap-y-8 md:gap-y-0 lg:gap-x-[40px] lg:mt-16 lg:mb-0.5 mb:my-6">
      <span className="lg:text-2xl mb:text-base lg:tracking-[-0.5px]">Filter by Interest</span>
      <ul
        className="*:md:h-[48px] overflow-x-scroll lg:mt-0 mb:-mt-[7px] hidden_scroll_x *:border flex whitespace-nowrap *:grid *:place-items-center *:px-5 *:py-2 *:rounded-[100px] lg:gap-x-[24px] mb:gap-x-4 *:lg:text-base *:mb:text-sm *:cursor-pointer *:duration-200">
        <li className="hover:text-[#05422C] hover:bg-[#F2F6F4] bg-[#F2F6F4] text-[#05422C] hover:border-black border-black">
          Flowers</li>
        <li className="hover:text-[#05422C] hover:bg-[#F2F6F4] hover:border-black">Mushrooms</li>
        <li className="hover:text-[#05422C] hover:bg-[#F2F6F4] hover:border-black">Concentrate</li>
        <li className="hover:text-[#05422C] hover:bg-[#F2F6F4] hover:border-black">Edibles</li>
        <li className="hover:text-[#05422C] hover:bg-[#F2F6F4] hover:border-black">Shop All Weed</li>
      </ul>
    </div>
    </>
)
}
export default FilterProduct
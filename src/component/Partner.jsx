import react from "react"

const Child = ({ img }) => (
    <img src={img} alt="Partner Logo" className="max-w-xs max-h-xs md:max-w-md md:max-h-md lg:max-w-lg lg:max-h-lg xl:max-w-xl xl:max-h-xl" />
  )
  

const Partner = () => {
    
    const partners = [
        {img: "https://s.udemycdn.com/partner-logos/ou-v1/volkswagen.svg"},
        {img:"https://s.udemycdn.com/partner-logos/ou-v1/samsung.svg"},
        {img:"https://s.udemycdn.com/partner-logos/ou-v1/cisco.svg"},
        {img:"https://s.udemycdn.com/partner-logos/ou-v1/att.svg"},
        {img:"https://s.udemycdn.com/partner-logos/ou-v1/procter_gamble.svg"},
        {img: "https://s.udemycdn.com/partner-logos/ou-v1/hewlett_packard_enterprise.svg"},
        {img: "https://s.udemycdn.com/partner-logos/ou-v1/citi.svg"},
        {img:"https://s.udemycdn.com/partner-logos/ou-v1/ericsson.svg"}
    ];
    
    return(
        <div className="bg-gray-300 py-20 px-10 md:px-20 lg:px-32 xl:px-40 mt-10">
            <div className="text-center mb-10">
            <p className="text-xl md:text-2xl lg:text-3xl">
                Trusted by over 15,000 companies and millions of learners around the world
            </p>
            </div>
            <div className="flex justify-center items-center flex-wrap gap-4 md:gap-6 lg:gap-8 xl:gap-10">
            {partners.map((partner, index) => (
                <Child key={index} img={partner.img} />
            ))}
            </div>
        </div>
    )
}

export default Partner

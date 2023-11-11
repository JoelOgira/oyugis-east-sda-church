// import { IoLogoGooglePlaystore } from 'react-icons/io5';d

export default function Tithes() {
    return (
        <div className="px-3 py-20 md:px-0 md:container md:mx-auto md:w-5/6 lg:w-3/4">
            <div className="flex flex-col justify-center items-center space-y-8">
                <h2 className="text-2xl font-semibold text-primary">Tithes and Offerings</h2>
                <blockquote className="text-justify max-w-2xl text-sm md:text-base lg:max-w-4xl lg:leading-8">
                    Bring the whole tithe into the storehouse, that there may be food in my house. Test me in this,” says the LORD Almighty, “and see if I will not throw open the floodgates of heaven and pour out so much blessing that you will not have room enough for it.
                </blockquote>
                <p className='flex'>- Malachi 3:10</p>

                <hr className="border-2 border-tertiary w-full" />

                <p className="text-secondary text-xl text-center">
                    Members are encouraged to use CFMS App for tithes and Offerings
                </p>
                <div className="grid grid-cols gap-y-5 text-center font-semibold [&>p]:text-xl lg:grid-cols-2 lg:[&>p]:text-4xl">
                    <p>USSD: *392#</p>
                    <p>Church Code: 22111</p>
                </div>
                <a href="https://play.google.com/store/search?q=cfms+sda+app&c=apps" target="_blank"
                    className="flex space-x-3 items-center text-xl text-white bg-gradient-to-r from-primary to-darkBlue rounded-full py-2 px-4 hover:text-tertiary hover:scale-105 hover:duration-200 hover:ease-in-out">
                    <span className='text-base'>Download</span>
                    {/* <span ><IoLogoGooglePlaystore /></span> */}
                </a>
            </div>
        </div>
    )
}

export default function Button({ type, href, title }) {
    return (
        <div className="flex justify-center md:items-start md:justify-start">
            <button type={type} className='bg-gradient-to-r from-primary to-darkBlue px-6 py-2 rounded-full text-white hover:text-tertiary hover:scale-105 hover:ease-in-out hover:duration-200'>
                <a href={href} target='_blank' rel="noreferrer">
                    {title}
                </a>
            </button>
        </div>
    )
}

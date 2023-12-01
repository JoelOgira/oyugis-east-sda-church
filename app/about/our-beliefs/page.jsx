import { beliefs } from "../import"

export const metadata = {
    title: 'Oyugis East Sda Church | Beliefs',
    description: 'Our 28 fundamental beliefs that outline the core doctrines and beliefs of our denominations.',
}

export default function OurBeliefs() {
    return (
        <div className="w-full">
            <div className="bg-gray-100">
                <div className="px-5 py-8 md:px-0 md:container md:mx-auto md:w-5/6 lg:w-3/4">
                    <p className="leading-6 text-sm text-justify pb-8 lg:text-lg">
                        Seventh-day Adventists accept the Bible as our only creed and hold certain fundamental beliefs to be the teaching of the Holy Scriptures. These beliefs, as set forth here, constitute the church’s understanding and expression of the teaching of Scripture. Revision of these statements may be expected at a General Conference session when the church is led by the Holy Spirit to a fuller understanding of Bible truth or finds better language in which to express the teachings of God’s Holy Word.
                    </p>
                    <div className="grid grid-cols gap-5 [&>div>div]:bg-gray-300">
                        {(beliefs || []).map(belief => (
                            <div key={belief?.id} className="flex flex-col space-y-3">
                                <h2 className="font-bold text-2xl">
                                    {belief?.title}
                                </h2>
                                <div className="border border-l-8 border-l-tertiary p-6">
                                    <p className="leading-6 text-sm md:text-base">
                                        {belief?.belief}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

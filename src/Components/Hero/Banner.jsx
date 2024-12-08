import bannerImage from '../../../src/assets/assets/banner.jpg'
const Banner = () => {
    return (
    <div>
            <div className="hero bg-[#9538E2] relative py-16 rounded-xl  text-white ">
            <div className="hero-content text-center">
                <div className="max-w-4xl mb-24">
                    <h1 className="text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className="py-6">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                    <button className="btn text-[#9538E2] bg-white font-bold rounded-full px-8">Shop Now</button>
                </div>
            <div className='absolute bottom-0 bg-[#CB9EF1]  border-white border-2 p-4 rounded-t-2xl top-[68%]'>
                <img width={600} className=' rounded-2xl' src={bannerImage} alt="" />
            </div>
            </div>
    </div>
        </div>
    );
};

export default Banner;
import Image from "next/image";
import React from 'react';
import Dash from "./Dash";


const Feature = () => {
    return (
        <div className="container pt-40">
            <h2 className="text-6xl font-bold">Our</h2>
            <h2 className="text-6xl font-bold pt-2">
                Featured <span className="text-accent">Food</span>
            </h2>

            <p className="max-w-[550px] pt-10 text-gray-700">
                Our featured food showcases a blend of flavors from around the world, crafted to satisfy every palate.
                From hearty mains to decadent desserts,
                Enjoy an exceptional dining experience with every bite!
            </p>

            <Dash />

            <div className="grid md:grid-cols-[1fr,37%,1fr] gap-16 mt-10">
                <div className="w-fit mx-auto self-end">
                    <Image
                        className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
                        src="/grid__1.png"
                        width={300}
                        height={600}
                        alt="grid image"
                    />

                    <div className="space-y-4">
                        <Dash />
                        <h2 className="font-medium text-xl">Shrimp Salad</h2>
                        <p className="text-gray-700 text-[14px] xl:text-[16px]">
                            Our shrimp salad is a refreshing mix of succulent shrimp, crisp greens, and a zesty dressing for a light, flavorful delight.
                        </p>
                    </div>
                </div>
                <div className="w-fit mx-auto">
                    <Image
                        className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
                        src="/grid__2.png"
                        width={500}
                        height={900}
                        alt="grid image"
                    />

                    <div className="space-y-4">
                        <Dash />
                        <h2 className="font-medium text-xl">Baked apples</h2>
                        <p className="text-gray-700 text-[14px] xl:text-[16px]">
                            Indulge in our baked apple, a warm, cinnamon-spiced delight that perfectly balances sweetness and comfort in every bite.
                        </p>
                    </div>
                </div>
                <div className="w-fit mx-auto self-end">
                    <Image
                        className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
                        src="/grid__3.png"
                        width={300}
                        height={600}
                        alt="grid image"
                    />

                    <div className="space-y-4">
                        <Dash />
                        <h2 className="font-medium text-xl">Cherries chicken</h2>
                        <p className="text-gray-700 text-[14px] xl:text-[16px]">
                            Savor our cherries chicken, featuring tender chicken glazed with a rich cherry sauce, delivering a delightful blend of savory and sweet flavors.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature;
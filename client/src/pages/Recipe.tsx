import React from 'react';
import axios from 'axios';

import '../assets/scss/pages/recipe.scss';

declare const API_URL: string;

class Recipe extends React.Component {
    render = (): React.ReactNode => (
        <main className="tw-text-center tw-px-[10%] tw-h-fit tw-bg-[#FFFFFF]">
            <div className="tw-h-full tw-w-full tw-bg-white tw-p-8 tw-text-left">
                <h1 className="tw-w-full tw-font-bold tw-mt-10 tw-pl-1 tw-text-[40px]">Community-Backed Recipes</h1>
                <div className="tw-h-[2px] tw-w-full -tw-mt-2 tw-mb-3 tw-mx-2 tw-opacity-30 tw-bg-offblack"></div>
                <div className="tw-grid tw-gap-4 tw-overflow-auto tw-grid-cols-2 tw-sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                    {/* Recipe Card 1 */}
                    <div className="card tw-p-3 tw-flow-root">
                        <h1 className="tw-text-[24px]">Peking Duck</h1>
                        <p className="tw-mb-50">
                            Experience culinary excellence with our Peking Duck
                            – a masterpiece of Chinese cuisine. Picture
                            succulent, crispy duck skin, expertly carved at your
                            table and served with thin, delicate pancakes,
                            hoisin sauce, and fresh scallions. Each bite is a
                            symphony of flavors and textures, a tantalizing
                            journey through the heart of China&apos;s culinary
                            heritage. Savor the allure of Peking Duck, a
                            timeless dish that promises an unforgettable dining
                            experience.
                        </p>
                        <button className="tw-w-fit tw-px-2 tw-bg-offwhite tw-py-1 tw-rounded-full tw-float-right">Add to Cookbook</button>
                    </div>

                    {/* Recipe Card 2 */}
                    <div className="card tw-p-3 tw-flow-root">
                        <h1 className="tw-text-[24px]">Brownies</h1>
                        <p className="tw-mb-50">
                            Indulge in pure chocolatey bliss with our decadent
                            brownies. These fudgy, melt-in-your-mouth squares
                            are a cocoa lover&apos;s dream, offering an irresistible
                            blend of rich, velvety goodness in every bite.
                            Whether as a sweet treat for yourself or to share
                            with loved ones, our brownies are the ultimate
                            indulgence that will satisfy your cravings and leave
                            you craving for more.
                        </p>
                        <button className="tw-w-fit tw-px-2 tw-bg-offwhite tw-py-1 tw-rounded-full tw-float-right">Add to Cookbook</button>
                    </div>
                    {/* Recipe Card 3 */}
                    <div className="card tw-p-3 tw-flow-root">
                        <h1 className="tw-text-[24px]">Mansaf</h1>
                        <p className="tw-mb-50">
                            Savor the regal flavors of Mansaf, Jordan&apos;s national
                            dish. Picture tender, slow-cooked lamb, infused with
                            aromatic spices and served on a bed of fragrant,
                            saffron-infused rice. This iconic Jordanian
                            specialty, crowned with tangy yogurt sauce and
                            garnished with toasted almonds, is a royal feast for
                            the senses. Mansaf is not just a meal; it&apos;s a
                            cultural celebration, a taste of Jordan&apos;s heritage
                            that will transport you to a world of warm
                            hospitality and culinary magnificence.
                        </p>
                        <button className="tw-w-fit tw-px-2 tw-bg-offwhite tw-py-1 tw-rounded-full tw-float-right">Add to Cookbook</button>
                    </div>

                    {/* Recipe Card 4 */}
                    <div className="card tw-p-3 tw-flow-root">
                        <h1 className="tw-text-[24px]">Fu Qi Fei Pian</h1>
                        <p className="tw-mb-50">
                            Get ready to tantalize your taste buds with Fu Qi
                            Fei Pian! This classic Sichuan dish is a fiery
                            masterpiece featuring thinly sliced, tender beef or
                            offal, marinated in a mouthwatering blend of spicy
                            chili oil, garlic, and Sichuan peppercorns. Each
                            bite is a symphony of flavors, a spicy and numbing
                            sensation that&apos;s truly addictive. Fu Qi Fei Pian is
                            a fiery journey through the bold and unforgettable
                            flavors of Sichuan cuisine that will leave you
                            craving for more.
                        </p>
                        <button className="tw-w-fit tw-px-2 tw-bg-offwhite tw-py-1 tw-rounded-full tw-float-right">Add to Cookbook</button>
                    </div>

                    {/* Recipe Card 5 */}
                    <div className="card tw-p-3 tw-flow-root">
                        <h1 className="tw-text-[24px]">Ilish Macher Jhol</h1>
                        <p className="tw-mb-50">
                            Dive into a world of exquisite flavors with Ilish
                            Macher Jhol! This Bengali delicacy showcases the
                            richness of hilsa fish, gently simmered in a
                            fragrant broth of mustard seeds, green chilies, and
                            turmeric. The tender fish absorbs the vibrant
                            spices, creating a harmonious balance of heat and
                            tang. Ilish Macher Jhol is a culinary masterpiece
                            that invites you to savor the essence of Bengali
                            cuisine, a delightful journey of flavors that&apos;s both
                            comforting and invigorating.
                        </p>
                        <button className="tw-w-fit tw-px-2 tw-bg-offwhite tw-py-1 tw-rounded-full tw-float-right">Add to Cookbook</button>
                    </div>

                    {/* Recipe Card 6 */}
                    <div className="card tw-p-3 tw-flow-root">
                        <h1 className="tw-text-[24px]">Vegetable Samosas</h1>
                        <p className="tw-mb-50">
                            Delight your senses with our Vegetable Samosas – a
                            taste of India&apos;s vibrant flavors. These golden
                            parcels of flaky pastry embrace a medley of
                            hand-picked vegetables and aromatic spices, creating
                            a savory explosion in every bite. Experience the
                            essence of India&apos;s culinary heritage in these
                            delightful, crispy treats.
                        </p>
                        <button className="tw-w-fit tw-px-2 tw-bg-offwhite tw-py-1 tw-rounded-full tw-float-right">Add to Cookbook</button>
                    </div>

                    {/* Recipe Card 7 */}
                    <div className="card tw-p-3 tw-flow-root">
                        <h1 className="tw-text-[24px]">Galayet Bandora</h1>
                        <p className="tw-mb-50">
                            Indulge in the tantalizing flavors of Galayet
                            Bandora – a cherished Jordanian dish. Imagine ripe
                            tomatoes, simmered in olive oil, garlic, and secret
                            spices, served on crispy flatbread. This rustic
                            delight is a journey through Middle Eastern
                            traditions, a symphony of textures, and a taste of
                            warm hospitality. Experience the magic of Galayet
                            Bandora and savor the essence of Jordan on your
                            plate.
                        </p>
                        <button className="tw-w-fit tw-px-2 tw-bg-offwhite tw-py-1 tw-rounded-full tw-float-right">Add to Cookbook</button>
                    </div>

                    {/* Recipe Card 8 */}
                    <div className="card tw-p-3 tw-flow-root">
                        <h1 className="tw-text-[24px]">Apple Pie</h1>
                        <p className="tw-mb-50">
                            Indulge in the timeless comfort of our Apple Pie.
                            Picture a golden, flaky crust enveloping a luscious
                            filling of perfectly spiced, tender apples. Each
                            bite is a warm, cozy embrace of nostalgia and
                            home-baked goodness. Our apple pie is a slice of
                            pure Americana, a dessert that captures the essence
                            of homemade perfection. Savor the sweetness of
                            tradition with every forkful, and let the classic
                            aroma of cinnamon and apples transport you to a
                            world of delicious memories.
                        </p>
                        <button className="tw-w-fit tw-px-2 tw-bg-offwhite tw-py-1 tw-rounded-full tw-float-right">Add to Cookbook</button>
                    </div>

                    {/* Recipe Card 9 */}
                    <div className="card tw-p-3 tw-flow-root">
                        <h1 className="tw-text-[24px]">Fried Rice</h1>
                        <p className="tw-mb-50">
                            Elevate your taste buds with our delectable Fried
                            Rice! Imagine fluffy grains of rice wok-fried to
                            perfection, dancing in a symphony of flavors. Our
                            secret blend of savory soy sauce, crisp vegetables,
                            and tender protein creates a tantalizing medley
                            that&apos;s both satisfying and addictive. Fried rice is
                            more than just a dish; it&apos;s a culinary journey
                            through the heart of Asian cuisine, a harmonious
                            balance of textures and tastes that will leave you
                            craving another forkful.
                        </p>
                        <button className="tw-w-fit tw-px-2 tw-bg-offwhite tw-py-1 tw-rounded-full tw-float-right">Add to Cookbook</button>
                    </div>

                    {/* Recipe Card 10 */}
                    <div className="card tw-p-3 tw-flow-root">
                        <h1 className="tw-text-[24px]">Hummus</h1>
                        <p className="tw-mb-50">
                            Dive into the creamy delight of Hummus! Our
                            signature blend of chickpeas, tahini, garlic, and
                            lemon creates a velvety, flavor-packed dip that&apos;s
                            perfect for every occasion. Whether you&apos;re dipping
                            fresh pita bread or crisp veggies, each scoop is a
                            journey through the Mediterranean, a harmonious
                            fusion of textures and tastes. Hummus is not just a
                            dip; it&apos;s an invitation to explore the rich and
                            wholesome flavors of the Middle East, a culinary
                            adventure that&apos;s both satisfying and irresistible.
                        </p>
                        <button className="tw-w-fit tw-px-2 tw-bg-offwhite tw-py-1 tw-rounded-full tw-float-right">Add to Cookbook</button>
                    </div>
                </div>
            </div>
        </main>
    );

    componentDidMount = (): void => {
        void axios
            .get(`${API_URL}/api/${window.location.pathname}`)
            .then((res) => {
                return res.data;
            })
            .catch(() =>
                console.error(`[ACCOUNT SERVER]: Could not get recipe.`)
            );
    };
}

export default Recipe;

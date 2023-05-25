"use client";

import React, { useState } from "react";
import layoutStyles from "@/assets/styles/partials/twoColumnLayout.module.scss";
import styles from "./index.module.scss";

import HeadingS1 from "@/components/Typography/Heading/Style1/page";
import BreadcrumbS1 from "@/components/Breadcrumb/Style1/page";
import StoreInfoS1 from "@/components/StoreInfo/Style1/page";
import OfferListS1 from "@/components/OfferList/Style1/page";
import ContactListS1 from "@/components/ContactList/Style1/page";
import SocialLinkS2 from "@/components/SocialLink/Style2/page";
import CollapsableContentS1 from "@/components/CollapsableContent/Style1/page";
import CashbackBannerS1 from "@/components/CashbackBanner/Style1/page";
import TabS1 from "@/components/Tab/Style1/page";
import CouponCardS1 from "@/components/CouponCard/Style1/page";
import StoreCardS1 from "@/components/StoreCard/Style1/page";

import CheckCircleIcon from "@/assets/images/svg/check-circle-1.svg";
import TicketIcon1 from "@/assets/images/svg/ticket-1.svg";
import ThunderIcon from "@/assets/images/svg/thunder-1.svg";
import ClockIcon from "@/assets/images/svg/clock-1.svg";
import TicketIcon2 from "@/assets/images/svg/ticket-2.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProductCardS1 from "@/components/ProductCard/Style1/page";
import AboutStoreS1 from "@/components/AboutStore/Style1/page";
import FaqS1 from "@/components/FAQ/Style1/page";
import ReviewSummaryS1 from "@/components/Review/Summary/Style1/page";
import ReviewSubmitS1 from "@/components/Review/Submit/Style1/page";
import ReviewCardS1 from "@/components/Review/Card/Style1/page";
import NewsletterS1 from "@/components/Newsletter/Style1/page";

const GroupPage = () => {
  const [activeFilterIndex, setActiveFilterIndex] = useState(0);

  const breadCrumbRoutes = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Stores",
      path: "/store",
    },
    {
      title: "Amazon",
      path: "/",
    },
  ];

  return (
    <div>
      <div className={layoutStyles.twoColumnLayout}>
        <div className={layoutStyles.twoColumnLayout__wrapper}>
          {/* Wide Column (Right Column) */}
          <div className={layoutStyles.twoColumnLayout__right}>
            {/* Cashback Terms */}
            <section className="section">
              <CollapsableContentS1
                title="Cashback Terms"
                content="Exclusions: Furniture & Mattresses will earn 1.5% Cash Back. Cash
              Back is not available on orders placed through macyswineshop.com,
              the purchase of gift certificates, Books, Health/Fitness,
              adjustments, reorders, corporate gift cards, orders made by Macy's
              employees using a Macy's credit card, orders made from Market by
              Macy's, Rugs, Sports Fan Shop by Lids, Shoes by Finish Line,
              PUREBEAUTY Salon & Spa, Sunglasses by Sunglass Hut, and these
              brands: Apple, Birkenstock, BCBG, Motherhood Maternity, Hugo Boss,
              Mango, and Marc Jacobs. Posting Time: Cash Back will be
              automatically added to your Rakuten account within one week."
                headingLevel="h2"
              />
            </section>

            {/* Cashback Banner */}
            <section className="section">
              <CashbackBannerS1
                title="You have a $10 Cash Back waiting for you."
                description="Get your $10 Cash Back when you make qualifying purchases
              totaling $25 or more by 09/19/22"
                amount="$10"
                ctaTitle="Shop Now"
                ctaLink="#"
              />
            </section>

            {/* Coupon Filter Tabs */}
            <section className="section">
              <TabS1
                activeIndex={activeFilterIndex}
                setActiveIndex={setActiveFilterIndex}
                tabList={["All Offers", "Coupons", "Deals"]}
              />
            </section>

            {/* Coupon Cards Section */}
            <section className="section">
              <div className={styles.cardGrid}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) => {
                  return (
                    <CouponCardS1
                      key={`${index}`}
                      isVerified={true}
                      isCoupon={true}
                      usage="Used 8 Times"
                      title="Up to 50% off Back-To-School Gear + Extra 20% off"
                      validTil="Limited Time"
                      isBookmarked={true}
                      tooltipText="£65.00 minimum order value Applies to new customers Valid until Jun 27, 2021"
                      headingLevel="h3"
                      isDisabled={false}
                      clickHandler={() => {}}
                    />
                  );
                })}
              </div>
            </section>

            {/* Expired Coupons & Deals Section */}
            <section>
              <div className="section">
                <div className="mb-5">
                  <HeadingS1
                    text="Expired Coupons and Deals"
                    variant="medium"
                    headingLevel="h2"
                  />
                </div>

                <div>
                  <p className="body-1">
                    Here you can find the latest Amazon voucher codes
                  </p>
                </div>
              </div>

              <div className="section">
                <div className={styles.cardGrid}>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) => {
                    return (
                      <CouponCardS1
                        key={index}
                        isVerified={true}
                        isCoupon={true}
                        usage="Used 8 Times"
                        title="Up to 50% off Back-To-School Gear + Extra 20% off"
                        validTil="Limited Time"
                        isBookmarked={true}
                        tooltipText="£65.00 minimum order value Applies to new customers Valid until Jun 27, 2021"
                        headingLevel="h3"
                        isDisabled={true}
                        clickHandler={() => {}}
                      />
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Similar Brands Section */}
            <section>
              <div className="section">
                <HeadingS1
                  text="Similar Brands"
                  variant="medium"
                  headingLevel="h2"
                />
              </div>

              <div className="section">
                <div className={styles.cardGrid}>
                  {[1, 2, 3, 4, 5, 6].map((index) => {
                    return (
                      <StoreCardS1
                        key={index}
                        tagName={
                          index % 2 === 0
                            ? "Coupon Codes"
                            : index % 3 === 0
                            ? "Promo Codes"
                            : "Discount Codes"
                        }
                        variant={
                          index % 2 === 0
                            ? "green"
                            : index % 3 === 0
                            ? "secondary"
                            : "primary"
                        }
                        logoUrl="https://cdn.supersavermama.com/storage/141/511tactical-coupons.png"
                        logoAlt="Store Name"
                        title="Ashley Home Store"
                        couponCount={31}
                        ctaTitle="Visit Store"
                        headingLevel="h3"
                        ctaHandler={() => {}}
                      />
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Popular Products Section */}
            <section>
              <div className="section">
                <HeadingS1
                  text="Popular Products"
                  variant="medium"
                  headingLevel="h2"
                />
              </div>

              <div className="section">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={3.3}
                  breakpoints={{
                    // when window width is >= 0px
                    0: {
                      slidesPerView: 1.3,
                      spaceBetween: 20,
                    },
                    // when window width is >= 480px
                    480: {
                      slidesPerView: 1.6,
                      spaceBetween: 20,
                    },
                    // when window width is >= 769px
                    769: {
                      slidesPerView: 2.3,
                      spaceBetween: 20,
                    },
                    // when window width is >= 1201px
                    1201: {
                      slidesPerView: 2.3,
                      spaceBetween: 30,
                    },
                    // when window width is >= 1441px
                    1441: {
                      slidesPerView: 3.3,
                      spaceBetween: 30,
                    },
                  }}
                  // onSwiper={(swiper) => console.log(swiper)}
                  // onSlideChange={() => console.log("slide change")}
                >
                  {[1, 2, 3, 4, 5, 6].map((index) => {
                    return (
                      <SwiperSlide key={index}>
                        <ProductCardS1
                          productUrl="https://cdn.supersavermama.com/storage/6782/60110dd8a5772_how-to-pack-a-bowl_650x350-1.jpg"
                          productAlt="Product Name"
                          tagName={
                            index % 2 === 0
                              ? "Coupon Codes"
                              : index % 3 === 0
                              ? "Promo Codes"
                              : "Discount Codes"
                          }
                          variant={
                            index % 2 === 0
                              ? "green"
                              : index % 3 === 0
                              ? "secondary"
                              : "primary"
                          }
                          logoUrl="https://cdn.supersavermama.com/storage/141/511tactical-coupons.png"
                          logoAlt="Store Name"
                          title="20% discount on the entire collection (excluding exceptions) + Free delivery"
                          couponCount={31}
                          ctaTitle="Visit Store"
                          headingLevel="h3"
                          ctaHandler={() => {}}
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </section>

            {/* More About Store */}
            <section>
              <div className="section">
                <HeadingS1
                  text="More About Store"
                  variant="medium"
                  headingLevel="h2"
                />
              </div>

              <div className="section">
                <AboutStoreS1
                  data={[
                    {
                      title: "0 Lorem ipsum dolor sit amet.",
                      description:
                        "0 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab saepe provident nobis placeat? Neque dolores temporibus eligendi, blanditiis nihil veritatis dolorem facere eos quae necessitatibus minus ad fuga suscipit sed doloremque nisi nostrum provident molestias maxime perferendis quia rerum commodi quidem soluta! Laborum suscipit impedit, ipsum aspernatur eveniet sequi praesentium!",
                    },
                    {
                      title: "1 Lorem ipsum dolor sit amet.",
                      description:
                        "1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab saepe provident nobis placeat? Neque dolores temporibus eligendi, blanditiis nihil veritatis dolorem facere eos quae necessitatibus minus ad fuga suscipit sed doloremque nisi nostrum provident molestias maxime perferendis quia rerum commodi quidem soluta! Laborum suscipit impedit, ipsum aspernatur eveniet sequi praesentium!",
                    },
                    {
                      title: "2 Lorem ipsum dolor sit amet.",
                      description:
                        "2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab saepe provident nobis placeat? Neque dolores temporibus eligendi, blanditiis nihil veritatis dolorem facere eos quae necessitatibus minus ad fuga suscipit sed doloremque nisi nostrum provident molestias maxime perferendis quia rerum commodi quidem soluta! Laborum suscipit impedit, ipsum aspernatur eveniet sequi praesentium!",
                    },
                    {
                      title: "3 Lorem ipsum dolor sit amet.",
                      description:
                        "3 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab saepe provident nobis placeat? Neque dolores temporibus eligendi, blanditiis nihil veritatis dolorem facere eos quae necessitatibus minus ad fuga suscipit sed doloremque nisi nostrum provident molestias maxime perferendis quia rerum commodi quidem soluta! Laborum suscipit impedit, ipsum aspernatur eveniet sequi praesentium!",
                    },
                    {
                      title: "4 Lorem ipsum dolor sit amet.",
                      description:
                        "4 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab saepe provident nobis placeat? Neque dolores temporibus eligendi, blanditiis nihil veritatis dolorem facere eos quae necessitatibus minus ad fuga suscipit sed doloremque nisi nostrum provident molestias maxime perferendis quia rerum commodi quidem soluta! Laborum suscipit impedit, ipsum aspernatur eveniet sequi praesentium!",
                    },
                    {
                      title: "5 Lorem ipsum dolor sit amet.",
                      description:
                        "5 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab saepe provident nobis placeat? Neque dolores temporibus eligendi, blanditiis nihil veritatis dolorem facere eos quae necessitatibus minus ad fuga suscipit sed doloremque nisi nostrum provident molestias maxime perferendis quia rerum commodi quidem soluta! Laborum suscipit impedit, ipsum aspernatur eveniet sequi praesentium!",
                    },
                  ]}
                />
              </div>
            </section>

            {/* FAQS Section */}
            <section>
              <div className="section">
                <HeadingS1
                  text="FAQs From Store"
                  variant="medium"
                  headingLevel="h2"
                />
              </div>

              <div className="section">
                <div className={styles.cardGrid}>
                  {[1, 2, 3, 4, 5, 6].map((index) => {
                    return (
                      <FaqS1
                        key={index}
                        title="0 Lorem ipsum dolor sit amet."
                        description="0 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab saepe provident nobis placeat? Neque dolores temporibus eligendi, blanditiis nihil veritatis dolorem facere eos quae necessitatibus minus ad fuga suscipit sed doloremque nisi nostrum provident molestias maxime perferendis quia rerum commodi quidem soluta! Laborum suscipit impedit, ipsum aspernatur eveniet sequi praesentium!"
                      />
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Customer Reviews Statistics */}
            <section>
              <div className="section">
                <HeadingS1
                  text="Amazon Customer Reviews"
                  variant="medium"
                  headingLevel="h2"
                />
              </div>

              <div className="section">
                <div className={styles.cardGrid}>
                  <div className={styles.reviewSummary}>
                    <ReviewSummaryS1 />
                  </div>

                  <div className={styles.addReview}>
                    <ReviewSubmitS1 />
                  </div>
                </div>
              </div>
            </section>

            {/* Customer Reviews */}
            <section>
              <div className="section">
                <HeadingS1
                  text="Customer Reviews"
                  variant="medium"
                  headingLevel="h2"
                />
              </div>

              <div className="section">
                <div className={styles.cardGrid}>
                  {[1, 2, 3, 4, 5, 6].map((index) => {
                    return (
                      <ReviewCardS1
                        key={index}
                        avatarUrl="https://cdn.supersavermama.com/storage/201/flowerstation-coupons.jpg"
                        authorName="Dorrian John"
                        rating={3}
                        reviewText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex sapiente nostrum omnis exercitationem sunt dignissimos quisquam assumenda blanditiis mollitia ratione. Nisi tempora et amet architecto quo. Placeat nihil delectus optio libero, alias tempora sequi explicabo debitis in, odio, nemo nesciunt dolor corrupti. Repudiandae harum maiores, aliquid dignissimos facilis beatae architecto?"
                        images={[
                          "https://cdn.supersavermama.com/storage/488/g2a-coupons.jpg",
                          "https://cdn.supersavermama.com/storage/444/dealflicks-coupons.jpg",
                          "https://cdn.supersavermama.com/storage/528/nfl-comgamepass-coupons.png",
                          "https://cdn.supersavermama.com/storage/585/pinmart-coupons.jpg",
                          "https://cdn.supersavermama.com/storage/141/511tactical-coupons.png",
                        ]}
                      />
                    );
                  })}
                </div>
              </div>
            </section>
          </div>

          {/* Thin Column (Left Column) */}
          <div className={layoutStyles.twoColumnLayout__left}>
            {/* Sidebar - Breadcrumbs */}
            <div className="section onlyDesktop">
              <BreadcrumbS1 routes={breadCrumbRoutes} />
            </div>

            {/* Sidebar - Store Info Card */}
            <div className="section">
              <StoreInfoS1
                title="Amazon promo codes 2021"
                description="Amazon discount codes valid - May 2021"
                imageSrc="https://cdn.supersavermama.com/storage/141/511tactical-coupons.png"
                imageAlt="Store Logo"
              />
            </div>

            {/* Sidebar - About Store */}
            <div className="section">
              <div className="contentBox">
                <div className="mb-10">
                  <HeadingS1
                    text="About Amazon Promo Code"
                    variant="small"
                    headingLevel="h2"
                  />
                </div>

                <div>
                  <p className="body-1">
                    Here you can find the latest Amazon voucher codes
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar - Offers Overview */}
            <div className="section">
              <div className="contentBox">
                <div className="mb-20">
                  <HeadingS1
                    text="Offers Overview"
                    variant="small"
                    headingLevel="h2"
                  />
                </div>

                <OfferListS1
                  attributesList={[
                    {
                      icon: CheckCircleIcon,
                      key: "Best Discount",
                      value: "30% Off",
                    },
                    {
                      icon: TicketIcon1,
                      key: "Active Promo Codes",
                      value: "34",
                    },
                    {
                      icon: ThunderIcon,
                      key: "Verified Vouchers",
                      value: "61",
                    },
                    {
                      icon: ClockIcon,
                      key: "Last Updated",
                      value: "Today",
                    },
                    {
                      icon: TicketIcon2,
                      key: "Best Coupon",
                      value: "TM******BYI",
                    },
                  ]}
                />
              </div>
            </div>

            {/* Sidebar - Contact Information */}
            <div className="section">
              <div className="contentBox">
                <div className="mb-20">
                  <HeadingS1
                    text="Contact Information"
                    variant="small"
                    headingLevel="h2"
                  />
                </div>

                <ContactListS1
                  address="410 Terry Ave. North Seattle, WA 98109-5210"
                  phone="(888) 280-3321"
                  webUrl="https://www.amazon.com/"
                />
              </div>
            </div>

            {/* Sidebar - Follow Stores */}
            <div className="section">
              <div className="contentBox">
                <div className="contentBox__flexList contentBox__flexList--spaceBetween">
                  <div>
                    <HeadingS1
                      text="Follow Amazon"
                      variant="small"
                      headingLevel="h2"
                    />
                  </div>

                  <ul className="contentBox__flexList">
                    <li>
                      <SocialLinkS2
                        title="Facebook"
                        link="https://www.facebook.com"
                        icon="x_facebook-1"
                      />
                    </li>

                    <li>
                      <SocialLinkS2
                        title="Instagram"
                        link="https://www.instagram.com"
                        icon="x_instagram-1"
                      />
                    </li>

                    <li>
                      <SocialLinkS2
                        title="LinkedIn"
                        link="https://www.linkedin.com"
                        icon="x_linkedin-1"
                      />
                    </li>

                    <li>
                      <SocialLinkS2
                        title="Twitter"
                        link="https://www.twitter.com"
                        icon="x_twitter-1"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar - Cashback Facts */}
            <div className="section">
              <div className="contentBox">
                <div className="mb-10">
                  <HeadingS1
                    text="Cashback Facts"
                    variant="small"
                    headingLevel="h2"
                  />
                </div>

                <p className="body-1">
                  SuperSaverMama Members have been cashing in since 1999. Here's
                  what members have earned so far from Amazon's:
                </p>

                <div className="mt-10">
                  <HeadingS1
                    text="$91,543,831"
                    variant="large"
                    headingLevel="p"
                    color="secondary"
                    align="center"
                  />

                  <HeadingS1
                    text="Total Cash Backs to date"
                    variant="small"
                    headingLevel="p"
                    align="center"
                  />
                </div>
              </div>
            </div>

            {/* Sidebar - Summary */}
            <div className="section">
              <div className="contentBox">
                <div className="mb-10">
                  <HeadingS1 text="Summary" variant="small" headingLevel="h2" />
                </div>

                <ul className="contentBox__list">
                  <li>
                    <a href="#" className="anchorTagS1">
                      About Amazon
                    </a>
                  </li>

                  <li>
                    <a href="#" className="anchorTagS1">
                      Related Stores
                    </a>
                  </li>

                  <li>
                    <a href="#" className="anchorTagS1">
                      Popular Stores
                    </a>
                  </li>

                  <li>
                    <a href="#" className="anchorTagS1">
                      Reviews
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar - Popular Brands */}
            <div className="section">
              <div className="contentBox">
                <div className="mb-10">
                  <HeadingS1
                    text="Popular Brands"
                    variant="small"
                    headingLevel="h2"
                  />
                </div>

                <ul className="contentBox__flexList">
                  <li>
                    <a href="#" target="_blank" className="anchorTagS2">
                      Brand1
                    </a>
                  </li>

                  <li>
                    <a href="#" target="_blank" className="anchorTagS2">
                      Brand2
                    </a>
                  </li>

                  <li>
                    <a href="#" target="_blank" className="anchorTagS2">
                      Brand3
                    </a>
                  </li>

                  <li>
                    <a href="#" target="_blank" className="anchorTagS2">
                      Brand4
                    </a>
                  </li>

                  <li>
                    <a href="#" target="_blank" className="anchorTagS2">
                      Brand5
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section padding-bottom-none">
        <NewsletterS1 />
      </div>
    </div>
  );
};

export default GroupPage;

"use client";

import React, { ChangeEvent, useState } from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/Logo.webp";
import MobileLogo from "@/assets/images/responsive-logo.webp";
import Search from "./Search/page";
import ButtonS1 from "../Button/Style1/page";
import RegionSelector from "./RegionSelector/page";
import Navigation from "./Navigation/page";
import SocialLinkS1 from "../SocialLink/Style1/page";

const Header = () => {
  const [search, setSearch] = useState<string>("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setSearch(value);
  };

  return (
    <div className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={`${styles.header__top} container`}>
          <Link href="/" className={styles.header__logo}>
            <picture>
              <source
                media="(max-width: 1200px)"
                srcSet={MobileLogo.src}
              ></source>
              <Image
                src={Logo}
                alt="Picture of the author"
                blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
              />
            </picture>
          </Link>

          <div className={styles.header__search}>
            <Search
              name="headerSearch"
              placeholder="Find your favorite stores and categories"
              value={search}
              changeHandler={handleSearchChange}
            />
          </div>

          <div className={styles.header__cta}>
            <div className={styles.header__ctaBtns}>
              <div>
                <ButtonS1
                  type="button"
                  title="Sign In"
                  variant="light"
                  clickHandler={() => {}}
                />
              </div>

              <div>
                <ButtonS1
                  type="button"
                  title="Join Now"
                  clickHandler={() => {}}
                />
              </div>
            </div>

            <div>
              <RegionSelector />
            </div>
          </div>

          <div className={styles.header__mobileMenu}>
            <span className="x_menu-1"></span>
          </div>
        </div>

        <div className={styles.header__bottom}>
          <div className={`${styles.header__bottom__wrapper} container`}>
            <div className={styles.header__navigation}>
              <Navigation />
            </div>

            <div className={styles.header__socialLinks}>
              <SocialLinkS1
                title="twitter"
                link="https://www.twitter.com"
                icon="x_twitter-1"
              />
              <SocialLinkS1
                title="facebook"
                link="https://www.facebook.com"
                icon="x_facebook-1"
              />
              <SocialLinkS1
                title="instagram"
                link="https://www.instagram.com"
                icon="x_instagram-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

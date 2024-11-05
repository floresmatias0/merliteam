"use client"; 
import { useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import Swiper from "swiper";
import { Post } from "@prisma/client";
import { useLocale } from "next-intl";
import Link from "next/link";

type Props = {
  posts: Post[];
};

export default function Carousel({ posts }: Props) {
  useEffect(() => {
    const swiper = new Swiper(".centered-slide-carousel", {
      centeredSlides: true,
      spaceBetween: 30,
      autoplay: {
        delay: 3000, // Tiempo en milisegundos entre cada slide (3 segundos en este caso)
        disableOnInteraction: false, // Para que siga en autoplay aunque interactúes con el carrusel
      },
      pagination: {
        el: ".centered-slide-carousel .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        1920: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1028: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        990: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      },
    });

    return () => {
      if (swiper) swiper.destroy(); // Limpieza al desmontar el componente
    };
  }, []);

  const locale = useLocale();
  const idioma = locale === "es" ? "es" : "en";

  return (
    <div className="w-full relative">
      <div className="swiper centered-slide-carousel swiper-container relative">
        <div className="swiper-wrapper">
          {posts.map((post) => (
            <div className="swiper-slide" key={post.id}>
              <Link href={`/${idioma}/posts/${post.id}`} passHref>
                 
                  <div
                    className="rounded-2xl h-96 flex items-center justify-center bg-cover bg-center text-white relative"
                    style={{
                      backgroundImage: `url(${post.image})`,
                    }}
                  >
                    <div className="absolute bottom-0 left-0 w-full p-4 bg-black/50 rounded-b-2xl">
                      <h2 className="text-2xl font-semibold">{post.title}</h2>
                      <p className="text-md mt-1">
                        {post.content.slice(0, 20)}
                        {post.content.length > 20 ? "..." : ""}
                      </p>
                    </div>
                  </div>
               </Link>
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
}

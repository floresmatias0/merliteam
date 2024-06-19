'use client'

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react'

const delay = 4500;

type Images = {
  number: string
  logo: string,
  description: string
}

type Props = {
  images: Images[]
}

const Slideshow = ({ images }: Props) => {
  const [index, setIndex] = useState(0);
  const [gallery, setGallery] = useState(images[0]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  useEffect(() => {
    const foundImage = images.find((_, key) => key === index);

    if (foundImage) {
      setGallery(foundImage);
    }
  }, [index])

  return (
    <div className="mx-auto my-0 overflow-hidden max-w-[260px] md:max-w-[500px]">
      <div className={gallery.description ? 'min-h-[200px]' : 'min-h-[200px] flex items-center'}>
        <div className="transition ease-in-out delay-350">
            <div className="w-full inline-block mx-auto">
              <Image src={gallery?.logo} alt={gallery?.number} width={160} height={120} className={`object-cover mx-auto ${gallery.logo !== "/logojehoroller.png" ? "bg-white" : ""}`}/>
            </div>
        </div>

        {gallery?.description && (
          <div className="transition ease-in-out delay-350">
            <div className="w-full inline-block text-center mt-4">
              <p>{gallery?.description}</p>
            </div>
          </div>
        )}
      </div>

      <div className="text-center my-4">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`inline-block h-[20px] w-[20px] rounded-xl cursor-pointer ml-2 mb-0 bg-merli-purple-dark ${index === idx ? "bg-merli-purple-light" : ""}`}
            onClick={() => setIndex(idx)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow

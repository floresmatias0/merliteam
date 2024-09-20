import Image from 'next/image';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href='https://wa.me/+5491167032053'
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button fixed bottom-14 right-5 md:bottom-26 md:right-18 z-50 hover:scale-125 transition-transform duration-300"
    >
      <Image
        src="/logos_whatsapp-icon.svg"
        alt="WhatsApp"
        width={66}
        height={67}
      />
    </a>
  );
};

export default WhatsAppButton;
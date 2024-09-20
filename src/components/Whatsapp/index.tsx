import Image from 'next/image';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href='https://wa.me/+5491167032053'
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button fixed bottom-8 right-4 md:bottom-26 md:right-20 z-50"
    >
      <Image
        src="/logos_whatsapp-icon.svg"
        alt="WhatsApp"
        width={66}
        height={67}
        className="hover:opacity-80 transition-opacity duration-300"
      />
    </a>
  );
};

export default WhatsAppButton;
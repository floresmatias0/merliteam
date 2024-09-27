import Image from "next/image";

enum Orientation { left, right }

type Service = {
  number: string;
  title: string;
  description: string;
  imageMobile?: string;
  imageDesktop?: string;
  titleOrientation: Orientation;
  descriptionOrientation: Orientation;
  imageAlignment?: Orientation;
  textAlignmentMobile?: Orientation;
};

const Service: React.FC<Service> = ({ number, title, description, imageMobile, imageDesktop, titleOrientation, descriptionOrientation, imageAlignment, textAlignmentMobile }) => {
  const processText = (text: string) => {
    return text.split('\n').map((line, index) => {
      if (line.startsWith('- ')) {
        return <li key={index} className="list-disc ml-4">{line.substring(2)}</li>;
      } else if (line.includes('**')) {
        const parts = line.split('**').map((part, i) => 
          i % 2 === 1 ? <strong key={i}>{part}</strong> : part
        );
        return <p key={index}>{parts}</p>;
      } else if (line.trim() === '') {
        return <br key={index} />;
      } else {
        return <p key={index}>{line}</p>;
      }
    });
  };

  const getImageAlignmentClass = () => {
    switch (imageAlignment) {
      case Orientation.left:
        return 'mx-0 mr-auto md:mx-auto';
      case Orientation.right:
        return 'mx-0 ml-auto md:mx-auto';
      default:
        return 'mx-auto';
    }
  };

  const getTextAlignmentClass = () => {
    switch (textAlignmentMobile) {
      case Orientation.left:
        return 'text-left';
      case Orientation.right:
        return 'text-right';
      default:
        return 'text-right';
    }
  };

  return (
    <div className="text-merli-gray-light group mb-10 md:mb-16">
      <div className={`w-full flex items-center justify-between mb-8 text-2xl md:text-5xl ${titleOrientation === Orientation.right ? 'flex-row' : 'flex-row-reverse'}`}>
        <p className="">{number}</p>
        <div className="flex-1 border-2 border-merli-gray-light mx-6"></div>
        <h3 className={`text-merli-white ${descriptionOrientation === Orientation.right ? 'text-right' : 'text-left'}`}><strong>{title}</strong></h3>
      </div>
      <div className={`w-full flex items-center justify-between mb-6 gap-8 text-2xl md:text-5xl flex-col-reverse md:flex-row ${descriptionOrientation === Orientation.right ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        {(imageMobile || imageDesktop) ? (
          <div className="w-full md:w-3/5 md:px-0">
            {imageMobile && (
              <div className="block md:hidden">
                <Image src={imageMobile} alt={title} width={100} height={100} className={`m-auto h-full w-fit ${getImageAlignmentClass()}`} />
              </div>
            )}
            {imageDesktop && (
              <div className="hidden md:block">
                <Image src={imageDesktop} alt={title} width={100} height={100} className={`m-auto h-full w-fit ${getImageAlignmentClass()}`} />
              </div>
            )}
          </div>
        ) : (
          <div className="w-full md:w-3/5"></div>
        )}
        <div className={`w-full md:w-2/5 text-base md:text-2xl ${getTextAlignmentClass()} ${descriptionOrientation === Orientation.right ? 'md:text-right' : 'md:text-left'}`}>
          <ul className="list-inside">
            {processText(description)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Service;



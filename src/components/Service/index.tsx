import Image from "next/image"

enum Orientation { left, right }

type Service = {
  number: string
  title: string
  description: string
  image?: string
  titleOrientation: Orientation
  descriptionOrientation: Orientation
}

const Service: React.FC<Service> = ({ number, title, description, image, titleOrientation, descriptionOrientation }) => {
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

  return (
    <div id='services' className="text-merli-gray-light group mb-10 md:mb-16" >
      <div className={`w-full flex items-center justify-between mb-8 text-2xl md:text-5xl ${titleOrientation === Orientation.right ? 'flex-row' : 'flex-row-reverse'}`}>
        <p className="">{number}</p>
        <div className="flex-1 border-2 border-merli-gray-light mx-6"></div>
        <h3 className={`text-merli-white ${descriptionOrientation === Orientation.right ? 'text-right' : 'text-left'}`}><strong>{title}</strong></h3>
      </div>
      <div className={`w-full flex items-center justify-between mb-6 gap-8 text-2xl md:text-5xl flex-col-reverse md:flex-row ${descriptionOrientation === Orientation.right ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        {image ? (
          <div className="w-full px-4 m md:w-3/5 md:px-0">
            <Image src={image} alt={title} width={100} height={100} className="m-auto h-full w-fit" />
          </div>
        ) : (
          <div className="w-full md:w-3/5"></div>
        )}
        <div className={`w-full md:w-2/5 text-base md:text-2xl ${descriptionOrientation === Orientation.right ? 'text-right' : 'text-left'}`}>
          <ul className="list-inside">
            {processText(description)}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Service

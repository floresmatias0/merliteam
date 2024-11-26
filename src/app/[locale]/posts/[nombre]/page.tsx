import deleteBlog from "@/actions/blog/deleteBlog";
import getPostById from "@/actions/blog/findBlogById";
import DeleteButton from "@/components/DeleteButton";
import Header from "@/components/Header";
import Image from "next/image";
import { useSession } from "next-auth/react";
import UpdateButton from "@/components/UpdateButton";
import getPostByName from "@/actions/blog/findBlogByName";

interface Props {
  params: {
    nombre: string;
  };
}

export async function generateMetadata({ params }: Props) {
  const { nombre } = params;
  const name = decodeURIComponent(nombre); // Decodifica el nombre
  const nombreFormateado = name.split('-').join(' ');

  const result = await getPostByName(nombreFormateado);
  const { post } = result;

  // Si no hay post, define metadatos por defecto
  if (!post) {
    return {
      title: "Blog no encontrado",
      description: "El post solicitado no existe.",
    };
  }

  // Devuelve los metadatos dinámicos
  return {
    title: post.title,
    description: post.resumen,
    openGraph: {
      title: post.title,
      description: post.resumen,
      images: [
        {
          url: post.image,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function blogPage({ params }: Props) {
  const { nombre } = params;
  const name = decodeURIComponent(nombre); // Decodifica el nombre

  const nombreFormateado = name.split("-").join(" ");

  const result = await getPostByName(nombreFormateado);
  const { post } = result;

  return (
    <div>
      <Header
        btnLegendTitleResponsive="Merliteam"
        btnLegendCommunity="Community"
        btnLegendServices="Services"
        btnLegendClients="Clients"
        btnLegendAboutUs="About Us"
        btnLegendSpanishText="Spanish"
        btnLegendEnglishText="English"
        btnLegendContact="Contact"
        position="absolute"
        backgroundColor="transparent"
      />
      {post && (
        <div>
          {/* Hero Section */}
          <section className="relative">
            {/* Imagen de fondo */}
            <div className="absolute inset-0 z-0">
              <Image
                src={`${post!.image}`}
                alt="Fondo"
                className="w-full h-screen object-cover"
                width={1920}
                height={1080}
              />
            </div>

            {/* Fecha en la esquina inferior izquierda */}
            <div className="absolute bottom-4 left-4 z-10 text-white bg-black bg-opacity-70 px-4 py-2 rounded-md">
              <p className="text-sm font-medium">{post!.date.toDateString()}</p>
            </div>

            {/* Contenido de la imagen */}
            <div className="relative z-10 text-center text-white p-8 flex flex-col items-center justify-center h-screen bg-black bg-opacity-50">
              <h1 className="text-4xl md:text-6xl font-bold max-w-3xl mx-auto leading-tight tracking-wide mt-8">
                {post!.title}
              </h1>
              <p className="text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
                {post!.resumen}
              </p>
            </div>
          </section>

          {/* Sección Blanca */}
          <div className="bg-white py-16">
            <div className="max-w-[900px] mx-auto px-6">
              {/* Un único párrafo que acepta HTML */}
              <p
                className="text-black leading-loose text-[20px]"
                dangerouslySetInnerHTML={{ __html: post!.content }}
              ></p>
            </div>
            <div className="max-w-[900px] mx-auto px-6 flex gap-7 items-center py-4">
              <UpdateButton id={post.id} />
              <DeleteButton id={post.id} handleClick={deleteBlog} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

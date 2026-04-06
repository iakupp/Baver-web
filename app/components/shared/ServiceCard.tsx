interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard = ({ title, description }: ServiceCardProps) => {
  return (
    <div
      className="
        relative overflow-hidden
        bg-[var(--color-primary)] text-white
        rounded-2xl
        h-[200px]
        w-full max-w-[1168px] mx-auto px-6
        cursor-pointer
        group
        flex items-center
      "
    >
      {/* PREVIEW */}
      <div>
        <h3 className="text-lg lg:text-xl font-semibold mb-2">
          {title}
        </h3>
        <p className="text-sm max-w-[600px]">
          {description}
        </p>
      </div>

      {/* DETAIL */}
      {/* <div
        className="
          absolute inset-0 p-6
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          flex items-center
        "
      >
        <p className="text-sm leading-relaxed">
          {description}
        </p>
      </div> */}
    </div>
  );
};

export default ServiceCard;
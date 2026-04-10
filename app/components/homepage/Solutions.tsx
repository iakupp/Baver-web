import ServiceCard from "../shared/ServiceCard";
import { Solutions } from "@/app/messages/sk.json";
import {Section} from "../shared/SectionAnimation"


const { heading, titles, descriptions } = { ...Solutions };

const Solutionst = () => {
    return (
    <Section>
    <section
    id="sluzby"
    className="bg-[var(--color-white)]
        py-[34px] xl:py-[64px]
        w-full mx-auto lg:px-0
        mb-[54px]

        scroll-mt-[80px] md:scroll-mt-[100px] lg:scroll-mt-[120px] xl:scroll-mt-[150px]

        flex flex-col xl:items-start"
    >
        <div className="max-w-[1248px] mx-auto px-[16px] lg:px-[34px]">
        {/* TEXT */}
            <div
        className="mb-[32px]
        max-w-[1248px]">
        <h2
        className="
            text-[var(--text-dark)] font-medium
            text-[20px] md:text-[30px] lg:text-[40px]
            mb-[16px]
            xl:leading-[50px] uppercase">
            {heading}
        </h2>
            </div>

            <div className="">

  {/* HLAVNÁ SLUŽBA */}
    <div className="mb-[24px] cursor-pointer">
        <div className="bg-[var(--color-primary)] text-white rounded-2xl p-8 flex flex-col justify-center h-[200px]">
        <h2 className="text-lg xl:text-xl font-semibold mb-2">
            {titles.title_1}
        </h2>
        <p className="max-w-[700px] text-sm">
            {descriptions.description_1}
        </p>
        </div>
    </div>

  {/* GRID */}
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

    {/* Voda & kúrenie */}
    <ServiceCard title={titles.title_2} description={descriptions.description_2} />
    <ServiceCard title={titles.title_3} description={descriptions.description_3} />
    <ServiceCard title={titles.title_4} description={descriptions.description_4} />

    {/* Plyn */}
    <ServiceCard title={titles.title_5} description={descriptions.description_5} />
    <ServiceCard title={titles.title_6} description={descriptions.description_6} />

    {/* Optimalizácia */}
    <ServiceCard title={titles.title_7} description={descriptions.description_7} />

            </div>
            </div>
        </div>
    </section>
        </Section>
);
};

export default Solutionst;
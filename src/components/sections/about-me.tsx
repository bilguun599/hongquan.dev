import Image from "next/image";

import LewisFullPose from "/public/images/avatar.jpg";
import Tag from "@/components/data-display/tag";
import Container from "@/components/layout/container";
import Typography from "@/components/general/typography";
import Link from "@/components/navigation/link";
import { EXTERNAL_LINKS } from "@/lib/data";

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={LewisFullPose}
              alt="Fullpose of Lewis"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: "cover" }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Curious about me? Here you have it:
          </Typography>
          <Typography>
            I&apos;m Lewis Duong, a 21-year-old passionate developer who
            specializes in full stack development with technologies like .NET
            Core, ReactJS, NextJS, and NestJS. I am enthusiastic about bringing
            the technical and visual aspects of digital products to life. User
            experience, pixel perfect design, and writing clear, readable,
            highly performant code matters to me.
          </Typography>
          <Typography>
            I began my journey as a web developer in 2022, and since then,
            I&apos;ve continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            with 1 year of experience, I&apos;m building cutting-edge web
            applications using modern technologies such as Next.js, TypeScript,
            NestJS, TailwindCSS, Supabase, and much more.
          </Typography>
          <Typography>
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development. I can handle
            testing with automation testing (E2E) and unit testing.
          </Typography>

          <Typography>Finally, some quick bits about me.</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                Strongly about back-end development
              </Typography>
              <Typography component="li">Can lead team</Typography>
              <Typography component="li">
                Having knowledge about system architecture and flow system
              </Typography>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;

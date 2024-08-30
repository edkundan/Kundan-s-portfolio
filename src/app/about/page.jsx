"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();

  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });
  const educationRef = useRef();
  const isEducationRefInView = useInView(educationRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              //src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=800"
              src="/Kundan.png"
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              I'm Kundan Kumar, a dedicated website developer with a passion for turning ideas into functional, beautiful websites.
              With several years of experience in the industry, I specialize in creating responsive,
              user-friendly websites that not only look great but also perform exceptionally well.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              "Every line of code is a step towards bringing your vision to life.
              My goal is to create websites that are not just visually stunning but also built with precision and purpose." — Kundan Kumar
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
              <svg
                width="185"
                height="77"
                viewBox="0 0 370 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d=
                  "M0 0 C0.99 0.33 1.98 0.66 3 1 C2.27012195 13.6 2.27012195 13.6 0.9375 18.25 C-0.17405094 22.69620377 -0.14276702 26.43145536 0 31 C3.3 30.34 6.6 29.68 10 29 C9.87625 28.154375 9.7525 27.30875 9.625 26.4375 C10.14589268 21.66265043 12.57226077 19.2234957 16 16 C19.01324195 14.49337903 21.68286377 14.82229627 25 15 C27 17 27 17 27.1875 20.25 C27.02059174 23.58816523 26.6392895 26.72364133 26 30 C29.57560077 28.65022693 32.8852134 27.23394405 36 25 C37.22659738 22.07669963 37.10980859 20.23935341 37 17 C41.43908976 16.06545479 45.46527914 16 50 16 C50.08333357 20.8333472 49.95261487 25.23692563 49 30 C50.0725 29.38125 51.145 28.7625 52.25 28.125 C54.79780984 26.6676321 57.35259355 25.27075509 60 24 C59.9375 26.75 59.9375 26.75 59 30 C54.27239357 33.59298089 51.04291008 34.60429101 45 34 C44.67 33.67 44.34 33.34 44 33 C44.09002398 30.97591245 44.24641038 28.95455713 44.4375 26.9375 C44.53933594 25.83277344 44.64117187 24.72804688 44.74609375 23.58984375 C44.87177734 22.30787109 44.87177734 22.30787109 45 21 C41.66752182 27.1999082 41.66752182 27.1999082 40 34 C38.35 34 36.7 34 35 34 C35 33.01 35 32.02 35 31 C34.13375 31.495 33.2675 31.99 32.375 32.5 C28.84121396 34.07057157 26.80902261 34.42322473 23 34 C21.515 33.01 21.515 33.01 20 32 C19.01 32.66 18.02 33.32 17 34 C13.86926251 34.45000334 10.72223347 34.37028046 7.5625 34.375 C6.27375977 34.41173828 6.27375977 34.41173828 4.95898438 34.44921875 C-1.38538806 34.47875035 -1.38538806 34.47875035 -4.59765625 31.9765625 C-5.06042969 31.32429688 -5.52320313 30.67203125 -6 30 C-6.886875 30.680625 -7.77375 31.36125 -8.6875 32.0625 C-12 34 -12 34 -14.6875 33.75 C-15.450625 33.5025 -16.21375 33.255 -17 33 C-19.9254644 32.7763932 -19.9254644 32.7763932 -22 34 C-25.5625 34.125 -25.5625 34.125 -29 34 C-29.33 33.67 -29.66 33.34 -30 33 C-29.90997602 30.97591245 -29.75358962 28.95455713 -29.5625 26.9375 C-29.46066406 25.83277344 -29.35882813 24.72804688 -29.25390625 23.58984375 C-29.17011719 22.73519531 -29.08632812 21.88054687 -29 21 C-32.33247818 27.1999082 -32.33247818 27.1999082 -34 34 C-35.65 34 -37.3 34 -39 34 C-39 32.68 -39 31.36 -39 30 C-40.19625 30.495 -41.3925 30.99 -42.625 31.5 C-46.21500097 32.83670249 -49.13436094 33.55223415 -53 33 C-53.66 32.01 -54.32 31.02 -55 30 C-55.845625 30.66 -56.69125 31.32 -57.5625 32 C-61.44734778 34.26027507 -63.58401256 34.43293994 -68 34 C-69 33 -69 33 -69.3125 29.4375 C-69.25304049 23.92758558 -67.0558898 19.45487649 -63.55078125 15.26953125 C-62 14 -62 14 -59 14 C-58.75 16.1875 -58.75 16.1875 -59 19 C-60.32810215 20.67083819 -61.66172696 22.33729713 -63 24 C-63.79690838 27.18762109 -63.79690838 27.18762109 -64 30 C-58.82379675 27.19006109 -54.900196 24.27192323 -52.6875 18.6875 C-52.460625 17.800625 -52.23375 16.91375 -52 16 C-50.68 16 -49.36 16 -48 16 C-48.33 20.29 -48.66 24.58 -49 29 C-42.87377531 26.79033067 -42.87377531 26.79033067 -37 24 C-37 21.69 -37 19.38 -37 17 C-32.56091024 16.06545479 -28.53472086 16 -24 16 C-23.91666643 20.8333472 -24.04738513 25.23692563 -25 30 C-20.15572267 27.94075828 -20.15572267 27.94075828 -16.9375 24.0234375 C-16.45146622 22.63115323 -16.00457699 21.22433426 -15.60546875 19.8046875 C-15 18 -15 18 -13 16 C-10.8359375 15.3671875 -10.8359375 15.3671875 -8.375 14.875 C-7.55773437 14.70742188 -6.74046875 14.53984375 -5.8984375 14.3671875 C-5.27195312 14.24601562 -4.64546875 14.12484375 -4 14 C-3.79503906 13.07316406 -3.59007812 12.14632812 -3.37890625 11.19140625 C-3.10949219 9.99386719 -2.84007812 8.79632813 -2.5625 7.5625 C-2.29566406 6.36753906 -2.02882813 5.17257813 -1.75390625 3.94140625 C-1 1 -1 1 0 0 Z M-11.1875 20.625 C-13.46170299 23.60499012 -13.3327958 25.33924624 -13 29 C-9.64084842 27.56036361 -7.28375062 25.87583411 -5 23 C-5.13641377 20.78141747 -5.13641377 20.78141747 -6 19 C-9.05279952 18.701838 -9.05279952 18.701838 -11.1875 20.625 Z M17.4375 22.125 C14.78365704 25.25517374 14.28084572 26.97454466 14 31 C18.47088058 28.55728128 18.47088058 28.55728128 22 25 C22.25069913 22.37429296 22.25069913 22.37429296 22 20 C19.7017579 19.78722138 19.7017579 19.78722138 17.4375 22.125 Z " fill="#000000" transform="translate(271,49)"

                />
              </svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                WordPress
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Elementor
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Python
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Digitalocean
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MySQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Figma
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                HTML
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Woocommerce
              </div>

            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Website Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I am a Website developer {" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2020 - 2023
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    DGoals solution
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Technical Expert
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Technical Manager{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2021 - 2024{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    NetWorth.co.in
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Freelancer{" "}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I provided web solutions, applying a range of technologies
                    to address client requirements.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2021 - Current{" "}
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>

          {/* EDUCATION CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={educationRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isEducationRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EDUCATION
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isEducationRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Bachelor of Technology - Artificialntelligence and Machine Learning

                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    {" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2023 - 2027
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Galgotias University
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    High School
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    {" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2023{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    CBSE
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}

            </motion.div>
          </div>



        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>

    </motion.div>
  );
};

export default AboutPage;

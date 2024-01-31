import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
    const ref = useRef(null);
    const isInView = useInView(ref);
    useEffect(() => {
        console.log("Element is in view: ", isInView);
    }, [isInView]);
    return (
        <motion.div
            className="about"
            id="skills"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={{
                visible: { opacity: 1, y: -50 },
                hidden: { opacity: 0, y: 0 },
            }}
        >
            <div className="title">
                <h2>Skills I Have! </h2>
            </div>
            <div className="">
                <div className="flex justify-center items-center flex-wrap ">
                    <Image width={100} height={100} src="/assets/css.png" alt="css" />
                    <Image width={100} height={100} src="/assets/javascript.png" alt="css" />
                    <Image width={100} height={100} src="/assets/react.png" alt="css" />
                    <Image width={100} height={100} src="/assets/sass.png" alt="css" />
                    <Image width={100} height={100} src="/assets/typescript.png" alt="css" />
                    <Image width={100} height={100} src="/assets/redux.png" alt="css" />
                    <Image width={100} height={100} src="/assets/html.png" alt="css" />
                    <Image width={100} height={100} src="/assets/figma.png" alt="css" />
                    <Image width={100} height={100} src="/assets/git.png" alt="css" />
                    <Image width={100} height={100} src="/assets/api.png" alt="css" />
                    <Image width={100} height={100} src="/assets/bootstrap.png" alt="css" />
                    <Image width={100} height={100} src="/assets/tailwind.png" alt="css" />
                    <Image width={100} height={100} src="/assets/webpack.png" alt="css" />
                    <Image width={100} height={100} src="/assets/mu5.png" alt="css" />
                    <Image width={100} height={100} src="/assets/mongodb.png" alt="css" />
                    <Image width={100} height={100} src="/assets/nextjs.svg" alt="css" />

                </div>
            </div>
        </motion.div>
    );
};

export default About;

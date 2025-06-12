import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);


    useGSAP(() =>{
        const projects = [project1Ref.current, project2Ref.current , project3Ref.current];

        projects.forEach((card , index) => {
            gsap.fromTo(
                card,{
                    y:50,
                    opacity: 0,
                },{
                    y : 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.3,
                    scrollTrigger : {
                        trigger : card,
                        start: "top bottom-=100",
                    }
                }

            )
        })

        gsap.fromTo(sectionRef.current , {opacity : 0} ,
            {opacity: 1 , duration : 1.5});
    } , [])


    return (
        <div id="work" ref={sectionRef}  className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src="/images/Forever.png" alt="Shop Smarter Live Better - Forever" />
                        </div>
                        <div className="text-content">
                            <h2>
                                Effortless Shopping Starts Here with Forever — a Powerful, User-Friendly E-Commerce Experience
                            </h2>
                            <p className="text-white-50 md:text-xl">
                                A fast, modern, and user-friendly e-commerce website built with the
                                MERN Stack & TailwindCSS — crafted to deliver a seamless shopping experience with Forever.
                            </p>
                        </div>
                    </div>

                    <div className="project-list-wrapper overflow-hidden" >
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#FFEFDB]">
                                <img
                                    className=""
                                    src="/images/Blog.png"
                                    alt="The Balanced Blend - LamaBlog"
                                />
                            </div>
                            <h2>The Balanced Blend - LamaBlog</h2>
                        </div>

                        <div className="project" ref={project3Ref} >
                            <div className="image-wrapper bg-[#FFE7EB]">
                                <img src="/images/Webo.png" alt="YC Directory App" />
                            </div>
                            <h2>The Spacious | Elegant Furniture & Interior Designs </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppShowcase;
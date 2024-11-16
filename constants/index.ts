import { FaAddressBook, FaEnvelope, FaFax, FaMobile } from "react-icons/fa";
import heroAboutUs from "@/public/hero-about-us.png";
import heroOurProjects from "@/public/hero-our-projects.png";
import heroOurServices from "@/public/hero-our-services.png";
import bgFooter from "@/public/bg-footer.png";
import heroExecutiveSummary from "@/public/hero-executive-summary.png";
import heroBusinessProcess from "@/public/hero-business-process.png";
const projects = [
  {
    id: 1,
    title: "Shakhbout Villa 12",
    description: "Design and build full interior",
    imgUrlBefore: "/project01_before.png",
    imgUrlAfter: "/project01_after.png",
    date: new Date(),
  },
  {
    id: 2,
    title: "Vocational Training Centre Shakboot",
    description: "Epoxy, painting and landscaping works",
    imgUrlBefore: null,
    imgUrlAfter: "/project02_after.png",
    date: new Date(),
  },
  {
    id: 3,
    title: "Al Ain Business centre",
    description: "Waterproofing works",
    imgUrlBefore: null,
    imgUrlAfter: "/project03_after.png",
    date: new Date(),
  },
  {
    id: 4,
    title: "Emirates Center for Strategic Studies and Research (ECSSR)",
    description: "Curb stone and interlock works",
    imgUrlBefore: "/project04_before.png",
    imgUrlAfter: null,
    date: new Date(),
  },
  {
    id: 5,
    title: "Al Nahyan Villa",
    description: "Full interior design and build",
    imgUrlBefore: "/project05_before.jpg",
    imgUrlAfter: "/project05_after.jpg",
    date: new Date(),
  },
];

const titleServices = [
  {
    id: 1,
    title: "Interior design consultation",
  },
  {
    id: 2,
    title: "Custom furniture design",
  },
  {
    id: 3,
    title: "Space planning",
  },
  {
    id: 4,
    title: "3D modeling & rendering",
  },
  {
    id: 5,
    title: "Lighting solutions",
  },
  {
    id: 6,
    title: "Project management",
  },
  {
    id: 7,
    title: "Fit-out services",
  },
  {
    id: 8,
    title: "Kitchen & bathroom design",
  },
  {
    id: 9,
    title: "Flooring & wall finishes",
  },
  {
    id: 10,
    title: "Sustainable design",
  },
];

const services = [
  {
    title: "Service 0",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.  0",
    main_image_url: "service-0-main.jpg",
    main_image_shape: "oval",
    images: [
      {
        image_url: "Service 0-before-after.jpg",
        image_shape: "square",
      },
      {
        image_url: "service-1-image-1.jpg",
        image_shape: "hexagon",
      },
      {
        image_url: "service-1-image-2.jpg",
        image_shape: "hexagon",
      },
      {
        image_url: "service-1-image-3.jpg",
        image_shape: "hexagon",
      },
    ],
    processes: [
      {
        title: "Process 0 for Service 0",
        description: "Description for Process 0 of Service 0",
        image_url: "service-process-1-0.jpg",
        image_shape: "circle",
      },
      {
        title: "Process 1 for Service 0",
        description: "Description for Process 1 of Service 0",
        image_url: "service-process-1-1.jpg",
        image_shape: "circle",
      },
      {
        title: "Process 2 for Service 0",
        description: "Description for Process 2 of Service 0",
        image_url: "service-process-1-2.jpg",
        image_shape: "circle",
      },
      {
        title: "Process 3 for Service 0",
        description: "Description for Process 3 of Service 0",
        image_url: "service-process-1-3.jpg",
        image_shape: "circle",
      },
      {
        title: "Process 4 for Service 0",
        description: "Description for Process 4 of Service 0",
        image_url: "service-process-1-4.jpg",
        image_shape: "circle",
      },
      {
        title: "Initial Consultation",
        description:
          "We begin with a thorough consultation to understand your specific needs.",
        image_url: "consultation-process.jpg",
        image_shape: "rectangle",
      },
      {
        title: "Planning and Design",
        description:
          "Our experts create a detailed plan tailored to your requirements.",
        image_url: "planning-process.jpg",
        image_shape: "circle",
      },
      {
        title: "Implementation",
        description:
          "We execute the plan with precision and attention to detail.",
        image_url: "implementation-process.jpg",
        image_shape: "square",
      },
      {
        title: "Quality Assurance",
        description:
          "Rigorous quality checks ensure the highest standards are met.",
        image_url: "quality-assurance-process.jpg",
        image_shape: "triangle",
      },
      {
        title: "Final Review",
        description:
          "We conduct a final review with you to ensure complete satisfaction.",
        image_url: "final-review-process.jpg",
        image_shape: "hexagon",
      },
    ],
    details: [
      {
        title: "Detail 0 for Service 0",
        description: "Description for Detail 0 of Service 0",
        image_url: "service-detail-1-0.jpg",
        image_label: "Label for Detail 0",
        image_shape: "trapezoid",
        images: [
          {
            image_url: "Detail 0 for Service 0-detail-context.jpg",
            image_label:
              "Detail 0 for Service 0 shown in the context of the full service.",
            image_shape: "square",
          },
        ],
      },
      {
        title: "Detail 1 for Service 0",
        description: "Description for Detail 1 of Service 0",
        image_url: "service-detail-1-1.jpg",
        image_label: "Label for Detail 1",
        image_shape: "trapezoid",
        images: [
          {
            image_url: "Detail 1 for Service 0-detail-context.jpg",
            image_label:
              "Detail 1 for Service 0 shown in the context of the full service.",
            image_shape: "square",
          },
        ],
      },
      {
        title: "Detail 2 for Service 0",
        description: "Description for Detail 2 of Service 0",
        image_url: "service-detail-1-2.jpg",
        image_label: "Label for Detail 2",
        image_shape: "oval",
        images: [
          {
            image_url: "Detail 2 for Service 0-detail-context.jpg",
            image_label:
              "Detail 2 for Service 0 shown in the context of the full service.",
            image_shape: "square",
          },
        ],
      },
      {
        title: "Standard Service",
        description:
          "Our standard Service 0 package, covering essential needs.",
        image_url: "Service 0-standard.jpg",
        image_label: null,
        image_shape: "rectangle",
        images: [
          {
            image_url: "Standard Service-detail-context.jpg",
            image_label:
              "Standard Service shown in the context of the full service.",
            image_shape: "square",
          },
        ],
      },
      {
        title: "Premium Service",
        description:
          "Our premium Service 0 package, offering advanced solutions.",
        image_url: "Service 0-premium.jpg",
        image_label: null,
        image_shape: "circle",
        images: [
          {
            image_url: "Premium Service-detail-context.jpg",
            image_label:
              "Premium Service shown in the context of the full service.",
            image_shape: "square",
          },
        ],
      },
      {
        title: "Customized Service",
        description:
          "A tailored Service 0 package designed to meet specific requirements.",
        image_url: "Service 0-custom.jpg",
        image_label: null,
        image_shape: "square",
        images: [
          {
            image_url: "Customized Service-detail-context.jpg",
            image_label:
              "Customized Service shown in the context of the full service.",
            image_shape: "square",
          },
        ],
      },
    ],
    child_services: [
      {
        title: "Service 0",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.  0",
        main_image_url: "service-0-main.jpg",
      },
      {
        title: "Service 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.  1",
        main_image_url: "service-1-main.jpg",
      },
      {
        title: "Service 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.  2",
        main_image_url: "service-2-main.jpg",
      },
    ],
  },
  {
    title: "Service 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.  1",
    main_image_url: "service-1-main.jpg",
    main_image_shape: "trapezoid",
    images: [
      {
        image_url: "Service 1-before-after.jpg",
        image_shape: "square",
      },
      {
        image_url: "service-2-image-1.jpg",
        image_shape: "heart",
      },
      {
        image_url: "service-2-image-2.jpg",
        image_shape: "heart",
      },
      {
        image_url: "service-2-image-3.jpg",
        image_shape: "heart",
      },
      {
        image_url: "service-2-image-4.jpg",
        image_shape: "heart",
      },
    ],
    processes: [
      {
        title: "Process 0 for Service 1",
        description: "Description for Process 0 of Service 1",
        image_url: "service-process-2-0.jpg",
        image_shape: "oval",
      },
      {
        title: "Process 1 for Service 1",
        description: "Description for Process 1 of Service 1",
        image_url: "service-process-2-1.jpg",
        image_shape: "oval",
      },
      {
        title: "Process 2 for Service 1",
        description: "Description for Process 2 of Service 1",
        image_url: "service-process-2-2.jpg",
        image_shape: "oval",
      },
      {
        title: "Process 3 for Service 1",
        description: "Description for Process 3 of Service 1",
        image_url: "service-process-2-3.jpg",
        image_shape: "oval",
      },
      {
        title: "Process 4 for Service 1",
        description: "Description for Process 4 of Service 1",
        image_url: "service-process-2-4.jpg",
        image_shape: "oval",
      },
      {
        title: "Initial Consultation",
        description:
          "We begin with a thorough consultation to understand your specific needs.",
        image_url: "consultation-process.jpg",
        image_shape: "rectangle",
      },
      {
        title: "Planning and Design",
        description:
          "Our experts create a detailed plan tailored to your requirements.",
        image_url: "planning-process.jpg",
        image_shape: "circle",
      },
      {
        title: "Implementation",
        description:
          "We execute the plan with precision and attention to detail.",
        image_url: "implementation-process.jpg",
        image_shape: "square",
      },
      {
        title: "Quality Assurance",
        description:
          "Rigorous quality checks ensure the highest standards are met.",
        image_url: "quality-assurance-process.jpg",
        image_shape: "triangle",
      },
      {
        title: "Final Review",
        description:
          "We conduct a final review with you to ensure complete satisfaction.",
        image_url: "final-review-process.jpg",
        image_shape: "hexagon",
      },
    ],
    details: [
      {
        title: "Detail 0 for Service 1",
        description: "Description for Detail 0 of Service 1",
        image_url: "service-detail-2-0.jpg",
        image_label: "Label for Detail 0",
        image_shape: "hexagon",
        images: [
          {
            image_url: "Detail 0 for Service 1-detail-context.jpg",
            image_label:
              "Detail 0 for Service 1 shown in the context of the full service.",
            image_shape: "square",
          },
        ],
      },
      {
        title: "Detail 1 for Service 1",
        description: "Description for Detail 1 of Service 1",
        image_url: "service-detail-2-1.jpg",
        image_label: "Label for Detail 1",
        image_shape: "hexagon",
        images: [
          {
            image_url: "Detail 1 for Service 1-detail-context.jpg",
            image_label:
              "Detail 1 for Service 1 shown in the context of the full service.",
            image_shape: "square",
          },
        ],
      },
      {
        title: "Detail 2 for Service 1",
        description: "Description for Detail 2 of Service 1",
        image_url: "service-detail-2-2.jpg",
        image_label: "Label for Detail 2",
        image_shape: "hexagon",
        images: [
          {
            image_url: "Detail 2 for Service 1-detail-context.jpg",
            image_label:
              "Detail 2 for Service 1 shown in the context of the full service.",
            image_shape: "square",
          },
        ],
      },
      {
        title: "Detail 3 for Service 1",
        description: "Description for Detail 3 of Service 1",
        image_url: "service-detail-2-3.jpg",
        image_label: "Label for Detail 3",
        image_shape: "hexagon",
        images: [
          {
            image_url: "Detail 3 for Service 1-detail-context.jpg",
            image_label:
              "Detail 3 for Service 1 shown in the context of the full service.",
            image_shape: "square",
          },
        ],
      },
      {
        title: "Standard Service",
        description:
          "Our standard Service 1 package, covering essential needs.",
        image_url: "Service 1-standard.jpg",
        image_label: null,
        image_shape: "rectangle",
        images: [
          {
            image_url: "Standard Service-detail-context.jpg",
            image_label:
              "Standard Service shown in the context of the full service.",
            image_shape: "square",
          },
        ],
      },
      {
        title: "Premium Service",
        description:
          "Our premium Service 1 package, offering advanced solutions.",
        image_url: "Service 1-premium.jpg",
        image_label: null,
        image_shape: "circle",
        images: [
          {
            image_url: "Premium Service-detail-context.jpg",
            image_label:
              "Premium Service shown in the context of the full service.",
            image_shape: "square",
          },
        ],
      },
      {
        title: "Customized Service",
        description:
          "A tailored Service 1 package designed to meet specific requirements.",
        image_url: "Service 1-custom.jpg",
        image_label: null,
        image_shape: "square",
        images: [
          {
            image_url: "Customized Service-detail-context.jpg",
            image_label:
              "Customized Service shown in the context of the full service.",
            image_shape: "square",
          },
        ],
      },
    ],
    child_services: [],
  },
  {
    title: "Service 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.  2",
    main_image_url: "service-2-main.jpg",
    main_image_shape: "rectangle",
    images: [
      {
        image_url: "Service 2-before-after.jpg",
        image_shape: "square",
      },
      {
        image_url: "service-3-image-1.jpg",
        image_shape: "circle",
      },
      {
        image_url: "service-3-image-2.jpg",
        image_shape: "circle",
      },
      {
        image_url: "service-3-image-3.jpg",
        image_shape: "circle",
      },
    ],
    processes: [
      {
        title: "Process 0 for Service 2",
        description: "Description for Process 0 of Service 2",
        image_url: "service-process-3-0.jpg",
        image_shape: "diamond",
      },
      {
        title: "Process 1 for Service 2",
        description: "Description for Process 1 of Service 2",
        image_url: "service-process-3-1.jpg",
        image_shape: "diamond",
      },
      {
        title: "Process 2 for Service 2",
        description: "Description for Process 2 of Service 2",
        image_url: "service-process-3-2.jpg",
        image_shape: "diamond",
      },
      {
        title: "Initial Consultation",
        description:
          "We begin with a thorough consultation to understand your specific needs.",
        image_url: "consultation-process.jpg",
        image_shape: "rectangle",
      },
      {
        title: "Planning and Design",
        description:
          "Our experts create a detailed plan tailored to your requirements.",
        image_url: "planning-process.jpg",
        image_shape: "circle",
      },
      {
        title: "Implementation",
        description:
          "We execute the plan with precision and attention to detail.",
        image_url: "implementation-process.jpg",
        image_shape: "square",
      },
      {
        title: "Quality Assurance",
        description:
          "Rigorous quality checks ensure the highest standards are met.",
        image_url: "quality-assurance-process.jpg",
        image_shape: "triangle",
      },
      {
        title: "Final Review",
        description:
          "We conduct a final review with you to ensure complete satisfaction.",
        image_url: "final-review-process.jpg",
        image_shape: "hexagon",
      },
    ],
    details: [
      {
        title: "Detail 0 for Service 2",
        description: "Description for Detail 0 of Service 2",
        image_url: "service-detail-3-0.jpg",
        image_label: "Label for Detail 0",
        image_shape: "diamond",
        images: [
          {
            image_url: "Detail 0 for Service 2-detail-context.jpg",
            image_label:
              "Detail 0 for Service 2 shown in the context of the full service.",
            image_shape: "square",
          },
        ],
      },
      {
        title: "Detail 1 for Service 2",
        description: "Description for Detail 1 of Service 2",
        image_url: "service-detail-3-1.jpg",
        image_label: "Label for Detail 1",
        image_shape: "diamond",
        images: [
          {
            image_url: "Detail 1 for Service 2-detail-context.jpg",
            image_label:
              "Detail 1 for Service 2 shown in the context of the full service.",
            image_shape: "square",
          },
        ],
      },
      {
        title: "Standard Service",
        description:
          "Our standard Service 2 package, covering essential needs.",
        image_url: "Service 2-standard.jpg",
        image_label: null,
        image_shape: "rectangle",
        images: [
          {
            image_url: "Standard Service-detail-context.jpg",
            image_label:
              "Standard Service shown in the context of the full service.",
            image_shape: "square",
          },
        ],
      },
      {
        title: "Premium Service",
        description:
          "Our premium Service 2 package, offering advanced solutions.",
        image_url: "Service 2-premium.jpg",
        image_label: null,
        image_shape: "circle",
        images: [
          {
            image_url: "Premium Service-detail-context.jpg",
            image_label:
              "Premium Service shown in the context of the full service.",
            image_shape: "square",
          },
        ],
      },
      {
        title: "Customized Service",
        description:
          "A tailored Service 2 package designed to meet specific requirements.",
        image_url: "Service 2-custom.jpg",
        image_label: null,
        image_shape: "square",
        images: [
          {
            image_url: "Customized Service-detail-context.jpg",
            image_label:
              "Customized Service shown in the context of the full service.",
            image_shape: "square",
          },
        ],
      },
    ],
    child_services: [],
  },
];

const dataSummary = [
  {
    id: 1,
    title: "VISION",
    description:
      "Our vision is to be the leading interior design and fit-out company, renowned for our creativity, reliability, and excellence. We aim to set new standards in the industry by continuously evolving and embracing cutting-edge design trends and sustainable practices, thereby enhancing the lives of our clients and the communities we serve",
    children: [],
  },
  {
    id: 2,
    title: "MISSION",
    description:
      "Our vision is to be the leading interior design and fit-out company, renowned for our creativity, reliability, and excellence. We aim to set new standards in the industry by continuously evolving and embracing cutting-edge design trends and sustainable practices, thereby enhancing the lives of our clients and the communities we serve",
    children: [],
  },
  {
    id: 3,
    title: "CORE VALUES",
    description: null,
    children: [
      {
        id: 1,
        title: "CREATIVITY",
        description:
          "We embrace creativity and innovation to deliver unique and personalized design solutions.",
      },
      {
        id: 2,
        title: "SUSTAINABILITY",
        description:
          "We prioritize sustainable practices to create environmentally friendly and energy-efficient spaces.",
      },
      {
        id: 3,
        title: "INTEGRITY",
        description:
          "We conduct our business with honesty,transparency, and professionalism.",
      },
      {
        id: 4,
        title: "QUALITY",
        description:
          "We embrace creativity and innovation to deliver unique and personalized design solutions.",
      },
      {
        id: 5,
        title: "COLLABORATION",
        description:
          "We believe in the power of teamwork and collaboration, working closely with clients, partners, and our internal team to achieve outstanding results.",
      },
      {
        id: 6,
        title: "CLIENT-CENTRIC",
        description:
          "Our clients' needs and satisfaction are at the forefront of everything we do.",
      },
    ],
  },
];

const ourServices = [
  {
    id: 1,
    title: "DOORS & WINDOWS INSTALLATION WORK",
    description:
      "our skilled team leverages expertise and premium materials to deliver results that exceed expectations. Whether it's upgrading existing structures or outfitting new developments, our dedication to quality craftsmanship and customer satisfaction remains unwavering, making us the preferred choice for all doors and windows installation needs.",
  },
  {
    id: 2,
    title: "INSTALLATION OF FUUNATURE WORKS",
    description:
      "Our company specializes in Furniture Installation Works, offering precise setup services tailored for residential and commercial settings. Our dedicated team meticulously assembles and positions furniture, ensuring optimal functionality and visual appeal in every space.",
  },
  {
    id: 3,
    title: "TINGING AND PAINTING WORKS",
    description:
      "Our company specializes in Furniture Installation Works, offering precise setup services tailored for residential and commercial settings. Our dedicated team meticulously assembles and positions furniture, ensuring optimal functionality and visual appeal in every space",
    group: {
      title: "Wall finishing works",
      imgUrl: "",
      children: [
        {
          id: 1,
          title: "Wall Cladding Supply and Installation",
          description:
            "We offer a diverse range of wall cladding options and expert installation services to enhance the appearance and durability of your walls.",
        },
        {
          id: 2,
          title: "Painting Works: Our skilled painters",
          description:
            "provide high-quality painting services, using premium paints and techniques to achieve flawless finishes that breathe new life into your walls.",
        },
        {
          id: 3,
          title: "Decorative Special Painting",
          description:
            "Elevate your space with our specialized decorative painting services, including faux finishes, texture painting, murals, and other artistic techniques to add character and charm to your walls.",
        },
        {
          id: 3,
          title: "Wallpaper Supply and Installation",
          description:
            "Explore our extensive collection of wallpapers and let our experienced team handle the professional installation, transforming your walls with patterns, textures, and colors that suit your style",
        },
      ],
    },
  },
];

const servicesList = [
  {
    id: 1,
    title: "Doors & Windows Installation",
  },
  {
    id: 2,
    title: "Furniture Installation",
  },
  {
    id: 3,
    title: "Tiling and Painting",
  },
  {
    id: 4,
    title: "Wall Cladding Installation",
  },
  {
    id: 5,
    title: "Decorative Painting Services",
  },
  {
    id: 6,
    title: "Wallpaper Installation",
  },
  {
    id: 7,
    title: "Flooring Works",
  },
  {
    id: 8,
    title: "Swimming Pool Installation",
  },
  {
    id: 9,
    title: "Epoxy Flooring",
  },
  {
    id: 10,
    title: "Carpet Supply and Installation",
  },
];

const serviceSteps = [
  {
    number: "01",
    title: "Doors & Windows Installation Work",
    description:
      "our skilled team leverages expertise and premium materials to deliver results that exceed expectations. Whether it's upgrading existing structures or outfitting new developments, our dedication to quality craftsmanship and customer satisfaction remains unwavering, making us the preferred choice for all doors and windows installation needs.",
    groups: [],
    image: "/service-01.png",
  },
  {
    number: "02",
    title: "Installation of Furniture Works",
    image: "/services/service02.png",
    description:
      "Our company specializes in Furniture Installation Works, offering precise setup services tailored for residential and commercial settings. Our dedicated team meticulously assembles and positions furniture, ensuring optimal functionality and visual appeal in every space.",
    groups: [],
  },
  {
    number: "03",
    title: "Tiling and Painting Works",
    image: "/serve.png",
    description:
      "Our company specializes in Furniture Installation Works, offering precise setup services tailored for residential and commercial settings. Our dedicated team meticulously assembles and positions furniture, ensuring optimal functionality and visual appeal in every space",
    groups: [
      {
        title: "Wall Finishing Works",
        image: "/service-02.png",
        sections: [
          {
            title: "Wall Cladding Supply and Installation",
            content: {
              description:
                "We offer a diverse range of wall cladding options and expert installation services to enhance the appearance and durability of your walls.",
              list: [],
            },
            image: null,
            label: null,
          },
          {
            title: "Painting Works",
            content: {
              description:
                "Our skilled painters provide high-quality painting services, using premium paints and techniques to achieve flawless finishes that breathe new life into your walls.",
              list: [],
            },
            image: null,
            label: null,
          },
          {
            title: "Decorative Special Painting",
            content: {
              description:
                "Elevate your space with our specialized decorative painting services, including faux finishes, texture painting, murals, and other artistic techniques to add character and charm to your walls.",
              list: [],
            },
            image: null,
            label: null,
          },
          {
            title: "Wallpaper Supply and Installation",
            content: {
              description:
                " Explore our extensive collection of wallpapers and let our experienced team handle the professional installation, transforming your walls with patterns, textures, and colors that suit your style.",
              list: [],
            },
            image: null,
            label: null,
          },
        ],
      },
      {
        title: "Painting Works",
        image: null,
        sections: [
          {
            title: "Internal Paints",
            content: {
              description: null,
              list: [
                "Emulsion Paint.",
                "Enamel Paint.",
                "Acrylic Paint.",
                "Distemper Paint.",
              ],
            },
            image: null,
            label: null,
          },
          {
            title: "External Paints",
            content: {
              description: null,
              list: [
                "Exterior Emulsion.",
                "Masonry Paint.",
                "Acrylic Exterior Paint.",
                "Oil-Based Paint.",
              ],
            },
            image: null,
            label: null,
          },
        ],
      },
    ],
  },
  {
    number: "04",
    title: "floor wall tiling works",
    image: "/service-04.png",
    description: null,
    groups: [
      {
        title: "Flooring works",
        image: null,
        sections: [
          {
            title: "Flooring works:",
            content: {
              description: null,
              list: [
                "Porcelain,marble, ceramic, and tilling supply and installation.",
                "Carpet supply and installation.",
                "Epoxy works.",
                "Screed casting.",
                "Cast in situ flooring.",
                "Rubber flooring.",
              ],
            },
            image: null,
            label: null,
          },
        ],
      },
    ],
  },
  {
    number: "05",
    title: "Swimming Pool & Installation Works",
    image: "/service-05.png",
    description:
      "We are dedicated to designing and building swimming pools that turn your space into a personal paradise.",
    groups: [
      {
        title: "Our expertise includes:",
        image: null,
        sections: [
          {
            title: null,
            content: {
              description:
                "Our pools are well it, with smooth, non-slip surfaces, and no sharp edges. They feature easy access with walk-in steps and darker tile lines at the edges of steps and seats. We pay special attention to electrical safety and suction control, ensuring the highest standards of safety and functional ity.",
              list: [
                "Overflow Systems.",
                "Skimmer Systems Infinity Pools.",
                "Mirror Effect Pools.",
                "Bio-Design Pools.",
              ],
            },
            image: null,
            label: null,
          },
        ],
      },
    ],
  },
  {
    number: "06",
    title: "Wallpaper Fixing Works",
    image: "/service-04.png",
    description:
      "Create your dream home with Mood makers. With thousands of wallpaper designs available, you'll be sure to find your style.",
    groups: [],
  },
  {
    number: "07",
    title: "Buildings Maintenance",
    image: "/service-04.png",
    description:
      "Maintenance tasks may involve painting, lubricating, and replacing worn-out or damaged parts to prevent deterioration and ensure optimal performance. Additionally, building maintenance services often include emergency response and troubleshooting to address unforeseen issues promptly. By providing comprehensive maintenance solutions, these services help property owners maintain the value, efficiency, and longevity of their buildings while creating safe and comfortable environments for occupants.",
    groups: [],
  },
  {
    number: "08",
    title: "Gypsum Works",
    image: "/service-04.png",
    description:
      "Our proficient team utilizes their expertise and high-quality materials to achieve outcomes that surpass expectations. Whether enhancing current structures or outfitting new projects, our commitment to superior craftsmanship and client contentment remains steadfast, establishing us as the preferred option for all gypsum works installations.",
    groups: [],
  },
];

const progressStep = [
  {
    id: 1,
    number: "01",
    title: "Client meeting and brainstorming",
    description:
      "In this phase, we meet with the client to understand their needs, ideas, and vision for the project. We discuss project scope, objectives, and requirements to ensure alignment.",
    imgUrl: "/service-08.png",
  },
  {
    id: 2,
    number: "02",
    title: "Sketching client requirements",
    description:
      "We create preliminary sketches based on the client’s input to visualize the project’s layout and design. This helps identify the overall direction and design concept.",
    imgUrl: "/service-07.png",
  },
  {
    id: 3,
    number: "03",
    title: "Contract agreement",
    description:
      "After the initial discussions, we finalize the terms of the project with a contract that outlines timelines, scope, deliverables, and payment terms. This ensures both parties are on the same page before moving forward.",
    imgUrl: "/service-06.png",
  },
  {
    id: 4,
    number: "04",
    title: "Concept 2D & 3D presentation",
    description:
      "We present the initial design concepts in both 2D and 3D formats, helping the client visualize the project from different perspectives. This includes floor plans, elevations, and 3D renderings.",
    imgUrl: "/service-05.png",
  },
  {
    id: 5,
    number: "05",
    title: "Handing over of full concept (2D drawings & 3D perspectives)",
    description:
      "Once the concept is finalized, we hand over the complete package, including detailed 2D drawings, 3D perspectives, and any other required documentation for execution. This marks the completion of the design phase.",
    imgUrl: "/service-04.png",
  },
];

export const contactInfo = [
  {
    id: 1,
    icon: FaAddressBook,
    label: "Abu Dhabi Al Danah Khniser Street",
  },
  {
    id: 2,
    icon: FaEnvelope,
    label: "info@moodmakersdecor.com",
  },
  {
    id: 3,
    icon: FaMobile,
    label: "026396019",
  },
  {
    id: 4,
    icon: FaFax,
    label: "026506570",
  },
  {
    id: 5,
    icon: FaFax,
    label: "0501232546",
  },
];
export const coreValue = [
  {
    id: 1,
    title: "CREATIVITY",
    description:
      "We embrace creativity and innovation to deliver unique and personalized design solutions.",
  },
  {
    id: 2,
    title: "QUALITY",
    description:
      "We are committed to maintaining the highest standards of quality in all our projects.",
  },
  {
    id: 3,
    title: "SUSTAINABILITY",
    description:
      "We prioritize sustainable practices to create environmentally friendly and energy-efficient spaces",
  },
  {
    id: 4,
    title: "CLIENT-CENTRIC",
    description:
      "Our clients' needs and satisfaction are at the forefront of everything we do.",
  },
  {
    id: 5,
    title: "INTEGRITY",
    description:
      "We conduct our business with honesty, transparency, and professionalism",
  },
  {
    id: 6,
    title: "COLLABORATION",
    description:
      "We believe in the power of teamwork and collaboration, working closely with clients, partners, and our internal team to achieve outstanding results",
  },
];

export const executiveSummary = [
  {
    id: 1,
    title: "Vision",
    description:
      " Our vision is to be the leading interior design and fit-out company, renowned for our creativity, reliability, and excellence. We aim to set new standards in the industry by continuously evolving and embracing cutting-edge design trends and sustainable practices, thereby enhancing the lives of our clients and the communities we serve.",
  },
  {
    id: 2,
    title: "Mission",
    description:
      "Our mission is to reflect your dreams into your spaces through innovative and sustainable interior design solutions that reflect our clients' unique style and needs. We strive to deliver exceptional quality, creativity, and functionality in every project, ensuring client satisfaction and fostering lasting relationships.",
  },
];
export {
  progressStep,
  heroAboutUs,
  heroOurProjects,
  heroOurServices,
  bgFooter,
  projects,
  heroExecutiveSummary,
  titleServices,
  services,
  dataSummary,
  ourServices,
  servicesList,
  serviceSteps,
  heroBusinessProcess,
};

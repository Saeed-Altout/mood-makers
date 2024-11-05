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
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
    imgUrlBefore: "/project01_before.png",
    imgUrlAfter: "/project01_after.png",
    date: new Date(),
  },
  {
    id: 2,
    title: "Shakhbout Villa 12",
    description: "Design and build full interior",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
    imgUrlBefore: null,
    imgUrlAfter: "/project02_after.png",
    date: new Date(),
  },
  {
    id: 3,
    title: "Shakhbout Villa 12",
    description: "Design and build full interior",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
    imgUrlBefore: null,
    imgUrlAfter: "/project03_after.png",
    date: new Date(),
  },
  {
    id: 4,
    title: "Shakhbout Villa 12",
    description: "Design and build full interior",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
    imgUrlBefore: "/project04_before.png",
    imgUrlAfter: null,
    date: new Date(),
  },
  {
    id: 5,
    title: "Shakhbout Villa 12",
    description: "Design and build full interior",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
    imgUrlBefore: "/project05_before.jpg",
    imgUrlAfter: "/project05_after.jpg",
    date: new Date(),
  },
];

const titleServices = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet",
  },
  {
    id: 5,
    title: "Lorem ipsum dolor sit amet",
  },
  {
    id: 6,
    title: "Lorem ipsum dolor sit amet",
  },
  {
    id: 7,
    title: "Lorem ipsum dolor sit amet",
  },
  {
    id: 8,
    title: "Lorem ipsum dolor sit amet",
  },
  {
    id: 9,
    title: "Lorem ipsum dolor sit amet",
  },
  {
    id: 10,
    title: "Lorem ipsum dolor sit amet",
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
    title: "Lorem ipsum dolor sit amet",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet",
  },
  {
    id: 5,
    title: "Lorem ipsum dolor sit amet",
  },
  {
    id: 6,
    title: "Lorem ipsum dolor sit amet",
  },
  {
    id: 7,
    title: "Lorem ipsum dolor sit amet",
  },
  {
    id: 8,
    title: "Lorem ipsum dolor sit amet",
  },
  {
    id: 9,
    title: "Lorem ipsum dolor sit amet",
  },
  {
    id: 10,
    title: "Lorem ipsum dolor sit amet",
  },
];

const serviceSteps = [
  {
    number: "01",
    title: "Doors & Windows Installation Work",
    description:
      "our skilled team leverages expertise and premium materials to deliver results that exceed expectations. Whether it's upgrading existing structures or outfitting new developments, our dedication to quality craftsmanship and customer satisfaction remains unwavering, making us the preferred choice for all doors and windows installation needs",
    subsections: [],
    image: null,
  },
  {
    number: "02",
    title: "Installation of Furniture Works",
    image: "/serve.png",
    description:
      "Our company specializes in Furniture Installation Works, offering precise setup services tailored for residential and commercial settings. Our dedicated team meticulously assembles and positions furniture, ensuring optimal functionality and visual appeal in every space",
    subsections: [],
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
        image: "/serve.png",
        sections: [
          {
            title: "Wall Cladding Supply and Installation",
            content: {
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae libero malesuada feugiat. Integer sit amet velit nec nulla facilisis tincidunt.",
              list: [],
            },
            image: null,
            label: null,
          },
          {
            title: "Painting Works Our Skilled Painters",
            content: {
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae libero malesuada feugiat. Integer sit amet velit nec nulla facilisis tincidunt.",
              list: [],
            },
            image: null,
            label: null,
          },
          {
            title: "Decorative Special Painting",
            content: {
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae libero malesuada feugiat. Integer sit amet velit nec nulla facilisis tincidunt.",
              list: [],
            },
            image: null,
            label: null,
          },
          {
            title: "Wallpaper Supply and Installation",
            content: {
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae libero malesuada feugiat. Integer sit amet velit nec nulla facilisis tincidunt.",
              list: [],
            },
            image: null,
            label: null,
          },
        ],
      },
      {
        title: "Painting Works",
        image: "/serve.png",
        sections: [
          {
            title: "Internal Paints",
            content: {
              description: null,
              list: [
                "Emulsion Paint",
                "Enamel Paint",
                "Acrylic Paint",
                "Distemper Paint",
              ],
            },
            image: "/serve.png",
            label: null,
          },
          {
            title: "Painting Works Our Skilled Painters",
            content: {
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae libero malesuada feugiat. Integer sit amet velit nec nulla facilisis tincidunt.",
              list: [],
            },
            image: "/serve.png",
            label: null,
          },
          {
            title: "Decorative Special Painting",
            content: {
              description: null,
              list: [
                "Emulsion Paint",
                "Enamel Paint",
                "Acrylic Paint",
                "Distemper Paint",
              ],
            },
            image: "/serve.png",
            label: null,
          },
        ],
      },
    ],
  },
  {
    number: "04",
    title: "floor wall tiling works",
    image: null,
    description: null,
    groups: [
      {
        title: "Flooring works:",
        image: null,
        sections: [
          {
            title: "Wall Cladding Supply and Installation",
            content: {
              description: null,
              list: [
                "Porcelain, marble, ceramic, and tilling supply and installation",
                "carpet supply and installation",
                "Epoxy works",
                "screed casting",
                "Cast in situ flooring",
                "rubber flooring",
              ],
            },
            image: "/serve.png",
            label: null,
          },
        ],
      },
    ],
  },
  {
    number: "05",
    title: "swimming pool installation works",
    image: null,
    description: null,
    groups: [
      {
        title: "Flooring works:",
        image: null,
        sections: [
          {
            title: "",
            content: {
              description:
                "We are dedicated to designing and building swimming pools that turn your space into a personal paradise. Our includes:",
              list: [
                "Overflow Systems",
                "Skimmer Systems Infinity Pools",
                "Mirror Effect Pools",
                "Bio-Design Pools",
              ],
            },
            image: "/serve.png",
            label: null,
          },
        ],
      },
    ],
  },
  {
    number: "06",
    title: "Wallpaper Fixing Works",
    image: "/serve.png",
    description:
      "Create your dream home with Mood makers. With thousands of wallpaper designs available, you ll be sure to find your style.",
    groups: [],
  },
];

const progressStep = [
  {
    id: 1,
    number: "01",
    description: "CLIENT MEETING AND BRAINSTORMING",
    imgUrl: "/service-08.png",
  },
  {
    id: 2,
    number: "02",
    description: "SKETCHING CLIENT REQUIREMENTS",
    imgUrl: "/service-07.png",
  },
  {
    id: 3,
    number: "03",
    description: "CONTRACT AGREEMENT",
    imgUrl: "/service-06.png",
  },
  {
    id: 4,
    number: "04",
    description: "CONCEPT 2D & 3D PRESENTATION",
    imgUrl: "/service-05.png",
  },
  {
    id: 5,
    number: "05",
    description: "HANDING OVER OF FULL CONCEPT (2D DRAWINGS & 3D PERSPECTIVES)",
    imgUrl: "/service-04.png",
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

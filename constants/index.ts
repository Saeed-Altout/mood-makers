import heroAboutUs from "@/public/hero-about-us.png";
import heroOurProjects from "@/public/hero-our-projects.png";
import heroOurServices from "@/public/hero-our-services.png";
import bgFooter from "@/public/bg-footer.png";

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

export {
  heroAboutUs,
  heroOurProjects,
  heroOurServices,
  bgFooter,
  projects,
  titleServices,
  services,
};

import React, { createContext, useContext, ReactNode } from 'react';

interface Project {
  id: string;
  title: string;
  description: string;
  location: string;
  customerName: string;
  images: string[];
  keyFeatures: string[];
  projectType: string;
}

interface ProjectsContextProps {
  projects: Project[];
}

interface ProjectsProviderProps {
  children: ReactNode;
}

const ProjectsContext = createContext<ProjectsContextProps | undefined>(undefined);

export const ProjectsProvider: React.FC<ProjectsProviderProps> = ({ children }) => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'Project 1',
      description: 'Description of Project 1.',
      location: 'Location of Project 1',
      customerName: 'Customer of Project 1',
      projectType: 'renovation',
      images: [
        '/images/project8/0f1ca0ab-04c5-4a1b-9af7-496d6ad92715.jpeg.webp',
        '/images/project8/3e4eb8b9-0f3b-4413-ad8c-172c3d552ccc.jpeg.webp',
        '/images/project8/6c26863a-afcf-4afe-a3a0-210ac8c1486e.jpeg.webp',
        '/images/project8/7d32a26f-3f69-4702-8c8d-a6c9515e8317.jpeg.webp',
        '/images/project8/7e1a74e8-0fa9-4f78-9545-7801fb1ba428.jpeg.webp',
        '/images/project8/9c89872a-62d6-4c65-b8cc-fef2941a920f.jpeg.webp',
        '/images/project8/35cc5448-341c-4932-8ecb-6c57c4524a31.jpeg.webp',
        '/images/project8/553d17c1-e89d-4024-9a8a-ee64084ac08c.jpeg.webp',
        '/images/project8/676cbbd8-f638-4b6f-811e-c9ad0d74c37d.jpeg.webp',
        '/images/project8/c9d820fb-b3c5-4f68-a459-791e43242c6d.jpeg.webp',
        '/images/project8/d3d67df8-6bdf-45f8-991b-a4a0fa7c08c5.jpeg.webp',
        '/images/project8/d88585d1-272a-4dff-9488-ca8018bd1925.jpeg.webp',
        '/images/project8/eb7d91e0-b5af-43fd-98ca-f54b848148eb.jpeg.webp',
        '/images/project8/ebfe5759-3a9f-4e96-8dba-9473e64267c5.jpeg.webp',
      ],
      keyFeatures: [
        'Feature 1',
        'Feature 2',
        'Feature 3',
      ],
    },
    {
      id: '2',
      title: 'Burton Overy Bathroom Renovation',
      description: 'This project involved the complete renovation of a luxurious bathroom in a charming residence in Burton Overy. The transformation included the installation of modern fixtures, elegant tiling, and bespoke cabinetry, enhancing both functionality and aesthetic appeal. The serene ambiance and meticulous craftsmanship reflect our commitment to excellence in bathroom renovations.',
      location: 'Burton Overy, UK',
      customerName: 'John Doe',
      projectType: 'renovation',
      images: [
        '/images/Renovations/Full House Renovation Burton Overy/BurtonOvery3_01.jpg',
        '/images/Renovations/Full House Renovation Burton Overy/BurtonOvery3_02.jpg',
        '/images/Renovations/Full House Renovation Burton Overy/BurtonOvery3_03.jpg',
        '/images/Renovations/Full House Renovation Burton Overy/BurtonOvery3_04.jpg',
        '/images/Renovations/Full House Renovation Burton Overy/BurtonOvery3_05.jpg',
        '/images/Renovations/Full House Renovation Burton Overy/BurtonOvery3_06.jpg',
        '/images/Renovations/Full House Renovation Burton Overy/BurtonOvery3_07.jpg',
        '/images/Renovations/Full House Renovation Burton Overy/BurtonOvery3_09.jpg',
        '/images/Renovations/Full House Renovation Burton Overy/BurtonOvery3_10.jpg',
        '/images/Renovations/Full House Renovation Burton Overy/BurtonOvery3_11.jpg',
        '/images/Renovations/Full House Renovation Burton Overy/BurtonOvery3_12.jpg',
        '/images/Renovations/Full House Renovation Burton Overy/BurtonOvery3_14.jpg',
        '/images/Renovations/Full House Renovation Burton Overy/BurtonOvery3_15.jpg',
        '/images/Renovations/Full House Renovation Burton Overy/BurtonOvery3_16.jpg',
        '/images/Renovations/Full House Renovation Burton Overy/BurtonOvery3_17.jpg',
      ],
      keyFeatures: [
        'Modern Fixtures and Fittings',
        'Elegant and Functional Tiling',
        'Bespoke Cabinetry for Storage',
        'Serene and Luxurious Ambiance',
      ],
    },
    {
      id: '3',
      title: 'Great Glen Bathroom',
      description: 'A stunning bathroom renovation project in Great Glen...',
      location: 'Great Glen, UK',
      customerName: 'John Doe',
      projectType: 'renovation',
      images: [
        '/images/Renovations/Bathroom Great Glen/greatglen01.jpg',
        '/images/Renovations/Bathroom Great Glen/greatglen02.jpg',
        '/images/Renovations/Bathroom Great Glen/greatglen03.jpg',
        '/images/Renovations/Bathroom Great Glen/greatglen04.jpg',
        '/images/Renovations/Bathroom Great Glen/greatglen05.jpg',
      ],
      keyFeatures: [
        'Modern Fixtures',
        'Luxurious Bath',
        'Spa-like Ambience',
      ],
    },
    {
      id: '4',
      title: 'Bathroom Burton Overy',
      description: 'A beautiful bathroom renovation project in Burton Overy...',
      location: 'Burton Overy, Leicester, UK',
      customerName: 'Jane Doe',
      projectType: 'renovation',
      images: [
        '/images/Renovations/Bathroom Burton Overy/Bathroom01.jpg',
        '/images/Renovations/Bathroom Burton Overy/Bathroom02.jpg',
        '/images/Renovations/Bathroom Burton Overy/Bathroom03.jpg',
        '/images/Renovations/Bathroom Burton Overy/Bathroom04.jpg',
        '/images/Renovations/Bathroom Burton Overy/Bathroom05.jpg',
        '/images/Renovations/Bathroom Burton Overy/Bathroom06.jpg',
        '/images/Renovations/Bathroom Burton Overy/Bathroom07.jpg',
        '/images/Renovations/Bathroom Burton Overy/Bathroom08.jpg',
        '/images/Renovations/Bathroom Burton Overy/Bathroom09.jpg',
      ],
      keyFeatures: [
        'Modern Fixtures',
        'Luxurious Bath',
        'Spa-like Ambience',
      ],
    },
    {
      id: '5',
      title: 'Kitchen Extension Leicester',
      description: 'Extension and modernization of a kitchen space in Leicester...',
      location: 'Leicester, UK',
      customerName: 'AB Dixon',
      projectType: 'extension',
      images: [
        '/images/Renovations/Kitchen Extension Leicester/abdixon_kitchen1.jpg',
        '/images/Renovations/Kitchen Extension Leicester/abdixon_kitchen2.jpg',
        '/images/Renovations/Kitchen Extension Leicester/abdixon_kitchen3.jpg',
        '/images/Renovations/Kitchen Extension Leicester/abdixon_kitchen4.jpg',
        '/images/Renovations/Kitchen Extension Leicester/abdixon_kitchen5.jpg',
        '/images/Renovations/Kitchen Extension Leicester/abdixon_kitchen6.jpg',
        '/images/Renovations/Kitchen Extension Leicester/abdixon_kitchen7.jpg',
        '/images/Renovations/Kitchen Extension Leicester/abdixon_kitchen8.jpg',
        '/images/Renovations/Kitchen Extension Leicester/abdixon_kitchen10.jpg',
      ],
      keyFeatures: [
        'Spacious Layout',
        'Natural Light Integration',
        'Modern Appliances',
      ],
    },
    {
      id: '6',
      title: 'Ensuite Bathroom Renovation Crick',
      description: 'This ensuite bathroom renovation in Crick was designed to create a luxurious and modern space for relaxation. Our team carefully selected high-quality materials and fixtures to ensure both functionality and style. The renovation included new tiling, installation of a walk-in shower, and modern vanity units. The use of light colours and glass elements makes the bathroom feel spacious and inviting. Attention to detail in every aspect, from the lighting to the finishes, resulted in a stunning transformation that meets the clients needs and preferences.',
      location: 'Crick, UK',
      customerName: 'Jane Smith',
      projectType: 'renovation',
      images: [
        '/images/Renovations/Ensuite Bathroom 1 Crick/IMG_0937-1536x2048.jpg',
        '/images/Renovations/Ensuite Bathroom 1 Crick/IMG_0938-1536x2048.jpg',
        '/images/Renovations/Ensuite Bathroom 1 Crick/IMG_1784-1536x2048.jpg',
        '/images/Renovations/Ensuite Bathroom 1 Crick/IMG_1785-1536x2048.jpg',
        '/images/Renovations/Ensuite Bathroom 1 Crick/IMG_1786-1536x2048.jpg',
        '/images/Renovations/Ensuite Bathroom 1 Crick/IMG_1787-1536x2048.jpg',
        '/images/Renovations/Ensuite Bathroom 1 Crick/IMG_1789-1536x2048.jpg',
        '/images/Renovations/Ensuite Bathroom 1 Crick/IMG_1790-scaled-e1582373110154-1536x1134.jpg',
      ],
      keyFeatures: [
        'High-Quality Materials',
        'Walk-In Shower',
        'Modern Vanity Units',
      ],
    },
    {
      id: '7',
      title: 'Ensuite Bathroom Renovation 2 Crick',
      description: 'This project involved the renovation of a second ensuite bathroom in Crick. Our team focused on creating a sleek and modern bathroom space with high-quality finishes and fixtures. The renovation included new tiling, a modern shower installation, and custom cabinetry. The design aimed to maximize space while maintaining a clean and elegant look. By incorporating large mirrors and strategic lighting, the bathroom feels more spacious and inviting. This renovation not only enhances the aesthetic appeal of the home but also adds functionality and value.',
      location: 'Crick, UK',
      customerName: 'Jane Doe',
      projectType: 'renovation',
      images: [
        '/images/Renovations/Ensuite bathroom 2 crick/IMG_1775-scaled.jpg',
        '/images/Renovations/Ensuite bathroom 2 crick/IMG_1776-scaled.jpg',
        '/images/Renovations/Ensuite bathroom 2 crick/IMG_1777-scaled.jpg',
        '/images/Renovations/Ensuite bathroom 2 crick/IMG_1825-scaled.jpg',
        '/images/Renovations/Ensuite bathroom 2 crick/IMG_1826-scaled.jpg',
        '/images/Renovations/Ensuite bathroom 2 crick/IMG_1827-scaled.jpg',
        '/images/Renovations/Ensuite bathroom 2 crick/IMG_1828-scaled.jpg',
        '/images/Renovations/Ensuite bathroom 2 crick/IMG_1829-scaled.jpg',
      ],
      keyFeatures: [
        'Modern Shower Installation',
        'Custom Cabinetry',
        'Strategic Lighting',
      ],
    },
    {
      id: '8',
      title: 'Ensuite Bathroom Renovation 3 Crick',
      description: 'This project involved the renovation of a third ensuite bathroom in Crick. Our team focused on enhancing the functionality and aesthetic appeal of the space with high-quality finishes and modern fixtures. The renovation included new tiling, an upgraded shower installation, and bespoke cabinetry. The design aimed to maximize the available space while maintaining a clean and contemporary look. By incorporating large mirrors and strategic lighting, the bathroom feels more spacious and welcoming. This renovation not only improves the home’s value but also adds a touch of luxury to the living space.',
      location: 'Crick, UK',
      customerName: 'Sarah Johnson',
      projectType: 'renovation',
      images: [
        '/images/Renovations/Ensuite bathroom 3 crick/IMG_1836-scaled.jpg',
        '/images/Renovations/Ensuite bathroom 3 crick/IMG_1837-scaled.jpg',
        '/images/Renovations/Ensuite bathroom 3 crick/IMG_1838-scaled.jpg',
        '/images/Renovations/Ensuite bathroom 3 crick/IMG_1839-scaled.jpg',
        '/images/Renovations/Ensuite bathroom 3 crick/IMG_1841-scaled.jpg',
      ],
      keyFeatures: [
        'Upgraded Shower Installation',
        'Bespoke Cabinetry',
        'Enhanced Lighting',
      ],
    },
    {
      id: '9',
      title: 'Kitchen Diner Elmcroft Road',
      description: 'A complete renovation and modernization of a kitchen diner at Elmcroft Road. This project involved extensive remodeling to create a contemporary, open-plan space that is both functional and aesthetically pleasing. Key elements included the installation of new flooring, modern cabinetry, high-end appliances, and elegant lighting fixtures. The layout was designed to maximize space and enhance natural light, creating a warm and inviting environment for family gatherings and entertaining guests.',
      location: 'Elmcroft Road, UK',
      customerName: 'Jane Smith',
      projectType: 'renovation',
      images: [
        '/images/Renovations/Kitchen Diner Elmcroft Road/20190310_122229000_iOS.jpg',
        '/images/Renovations/Kitchen Diner Elmcroft Road/20190311_162042000_iOS-1.jpg',
        '/images/Renovations/Kitchen Diner Elmcroft Road/20190318_175228000_iOS.jpg',
        '/images/Renovations/Kitchen Diner Elmcroft Road/20190408_183826000_iOS.jpg',
        '/images/Renovations/Kitchen Diner Elmcroft Road/20190412_164942000_iOS.jpg',
        '/images/Renovations/Kitchen Diner Elmcroft Road/20190415_164300000_iOS.jpg',
        '/images/Renovations/Kitchen Diner Elmcroft Road/20190515_164552000_iOS.jpg',
        '/images/Renovations/Kitchen Diner Elmcroft Road/20190515_164604000_iOS-1.jpg',
        '/images/Renovations/Kitchen Diner Elmcroft Road/20190515_164612000_iOS.jpg',
        '/images/Renovations/Kitchen Diner Elmcroft Road/20190516_191803000_iOS.jpg',
        '/images/Renovations/Kitchen Diner Elmcroft Road/20190523_170557000_iOS.jpg',
        '/images/Renovations/Kitchen Diner Elmcroft Road/20190604_164512000_iOS-1.jpg',
        '/images/Renovations/Kitchen Diner Elmcroft Road/20190614_171431000_iOS.jpg',
        '/images/Renovations/Kitchen Diner Elmcroft Road/20190614_171451000_iOS.jpg',
        '/images/Renovations/Kitchen Diner Elmcroft Road/20190614_171507000_iOS.jpg',
        '/images/Renovations/Kitchen Diner Elmcroft Road/a9071091-bcd4-4533-99ad-b837722c65fc.jpg',
        '/images/Renovations/Kitchen Diner Elmcroft Road/IMG_1802-1536x2048.jpg',
      ],
      keyFeatures: [
        'Open-Plan Layout',
        'Modern Appliances',
        'Elegant Lighting',
      ],
    },
    {
      id: '10',
      title: 'Renovation Contract Leicester',
      description: 'This extensive renovation project in Leicester involved a full-scale makeover to modernize and enhance the functionality and aesthetics of the property. Our team undertook a comprehensive approach, from structural adjustments to interior design improvements. Key features included new flooring, updated plumbing and electrical systems, modern kitchen and bathroom installations, and high-quality finishes throughout. The result is a transformed space that offers both beauty and practicality, tailored to the client’s needs and preferences.',
      location: 'Leicester, UK',
      customerName: 'Michael Johnson',
      projectType: 'renovation',
      images: [
        '/images/Renovations/Renovation Contract Leicester/IMG_0461-1536x2048.jpg',
        '/images/Renovations/Renovation Contract Leicester/IMG_0462-1536x2048.jpg',
        '/images/Renovations/Renovation Contract Leicester/IMG_0463-1536x2048.jpg',
        '/images/Renovations/Renovation Contract Leicester/IMG_0465-1-1536x2048.jpg',
        '/images/Renovations/Renovation Contract Leicester/IMG_0466-1536x2048.jpg',
        '/images/Renovations/Renovation Contract Leicester/IMG_0467-1536x2048.jpg',
        '/images/Renovations/Renovation Contract Leicester/IMG_0468-1536x2048.jpg',
        '/images/Renovations/Renovation Contract Leicester/IMG_0632-1536x2048.jpg',
        '/images/Renovations/Renovation Contract Leicester/IMG_0709-1536x2048.jpg',
        '/images/Renovations/Renovation Contract Leicester/IMG_0748.jpg',
        '/images/Renovations/Renovation Contract Leicester/IMG_0749.jpg',
        '/images/Renovations/Renovation Contract Leicester/IMG_0751.jpg',
        '/images/Renovations/Renovation Contract Leicester/IMG_0754.jpg',
        '/images/Renovations/Renovation Contract Leicester/IMG_0996-1-1536x2048.jpg',
        '/images/Renovations/Renovation Contract Leicester/IMG_1078-1536x2048.jpg',
        '/images/Renovations/Renovation Contract Leicester/IMG_1079-1536x2048.jpg',
        '/images/Renovations/Renovation Contract Leicester/IMG_1080-1536x2048.jpg',
        '/images/Renovations/Renovation Contract Leicester/IMG_1081-1536x2048.jpg',
        '/images/Renovations/Renovation Contract Leicester/IMG_1084-1536x2048.jpg',
        '/images/Renovations/Renovation Contract Leicester/IMG_1085-1536x2048.jpg',
        '/images/Renovations/Renovation Contract Leicester/IMG_1086-1536x2048.jpg',
        '/images/Renovations/Renovation Contract Leicester/IMG_1088-1536x2048.jpg',
        '/images/Renovations/Renovation Contract Leicester/IMG_1089-1536x2048.jpg',
        '/images/Renovations/Renovation Contract Leicester/IMG_1090-1536x2048.jpg',
      ],
      keyFeatures: [
        'Modern Design',
        'Enhanced Functionality',
        'High-Quality Finishes',
      ],
    },
    {
      id: '11',
      title: 'Bathroom Renovation Billesdon',
      description: 'This bathroom renovation project in Billesdon involved transforming an outdated bathroom into a modern, stylish, and functional space. Our team focused on optimizing the layout to enhance usability and comfort. The renovation included the installation of new tiles, fixtures, and fittings, along with a contemporary bathtub and shower unit. High-quality materials and finishes were chosen to create a luxurious feel, ensuring durability and ease of maintenance. The result is a beautifully renovated bathroom that combines elegance with practicality.',
      location: 'Billesdon, UK',
      customerName: 'Jane Smith',
      projectType: 'renovation',
      images: [
        '/images/Renovations/Bathroom Billesdon/IMG_0446-1-2048x1536.jpg',
        '/images/Renovations/Bathroom Billesdon/IMG_0448-2048x1536.jpg',
        '/images/Renovations/Bathroom Billesdon/IMG_0450-2048x1536.jpg',
      ],
      keyFeatures: [
        'Optimized Layout',
        'High-Quality Materials',
        'Modern Fixtures and Fittings',
      ],
    },
    {
      id: '12',
      title: 'Kitchen Refurbishment Wigston Leicester',
      description: 'This kitchen refurbishment project in Wigston, Leicester involved updating and modernizing an old kitchen space. Our team focused on creating a more efficient and aesthetically pleasing layout. The refurbishment included installing new countertops, cabinets, and modern appliances. High-quality materials and contemporary finishes were selected to enhance the overall look and functionality of the kitchen. The result is a stylish and practical kitchen that meets the client’s needs and preferences.',
      location: 'Wigston, Leicester, UK',
      customerName: 'Michael Johnson',
      projectType: 'refurbishment',
      images: [
        '/images/Renovations/Kitchen Refurb Wigston Leicester/IMG_4031-1.jpg',
        '/images/Renovations/Kitchen Refurb Wigston Leicester/IMG_4032-1.jpg',
        '/images/Renovations/Kitchen Refurb Wigston Leicester/IMG_4033-1.jpg',
        '/images/Renovations/Kitchen Refurb Wigston Leicester/IMG_4034-1.jpg',
        '/images/Renovations/Kitchen Refurb Wigston Leicester/IMG_4035-1.jpg',
        '/images/Renovations/Kitchen Refurb Wigston Leicester/IMG_4036-1.jpg',
        '/images/Renovations/Kitchen Refurb Wigston Leicester/IMG_4037-1.jpg',
      ],
      keyFeatures: [
        'Efficient Layout',
        'Modern Appliances',
        'High-Quality Materials',
      ],
    },
  ];
  

  return (
    <ProjectsContext.Provider value={{ projects }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = () => {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error('useProjects must be used within a ProjectsProvider');
  }
  return context;
};
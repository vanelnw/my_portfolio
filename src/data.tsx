import medical from '../public/assets/images/medical.png'
import bookMyRide from '../public/assets/images/bookMyRide.png'
import dataTeller from '../public/assets/images/datateller.png'
import cryptoTracker from '../public/assets/images/cryptoTracker.png'
import devRecruit from '../public/assets/images/dev-recruit.png'
import selmart from '../public/assets/images/selmart.png'

export const projects = [

    {
      id:1,
      title: "Dev-Recruiting",
      subtitle: "React js, Node, ",
    stacks: ['React js', 'React js', 'Node','Docker', 'styled Component'],
      description:
        "Dev Recruit allows current and potential members to easily discover and learn about the projects they can join that aligns with their goals and experience.",
      image: devRecruit,
      link: "https://devlaunchers.org/join",
      github: "https://github.com/dev-launchers/dev-launchers-platform"
    },
    {
      id:2,
      title: "Selmart Electronic store",
      subtitle: "Frontend + API",
      stacks: ['React', 'Ruby on Rails','TaildwindCss'],
      description:
        "Cutting-Edge Electronics project, a dynamic and immersive web-based experience that encapsulates the essence of modern e-commerce for electronic gadgets and devices..",
      image:selmart,
      link: "https://selmart.netlify.app/",
      github: "https://github.com/vanelnw/Book-My-Ride-Backend"
    },
    {
      id:3,
      title: "Data-Tellers",
      subtitle: "React js + API",
      stacks: ['Javascript','React js', 'Ant Design', 'Node Js'],
      description:
        "A web-based application has been developed to facilitate appointment management for doctors. This application enables doctors to create or modify appointments according to their schedules, as well as check the status of each appointment. By using this tool, doctors can efficiently manage their appointments and ensure they meet their commitments.",
      image:dataTeller,
      link: "https://datatellers-test.onrender.com/",
      github: "https://github.com/vanelnw/medical-appointment-system"
    },

    {
      id:4,
      title: "Crypto Tracker",
      subtitle: "React js + API",
      stacks: ['Javascript','React js', 'Chart JS', 'Material UI'],
      image:cryptoTracker,
      link: "https://yabadev-crypto-tracker.netlify.app/",
      github: "https://github.com/vanelnw/Crypto-tracker-app",
      description: "This application provides users with the ability to search for information related to any cryptocurrency based on its name. Upon logging in, users can add their preferred currencies to a wishlist and stay up-to-date with the latest news about cryptocurrency. The app is built using the React Js framework and is hosted on Netlify."
    }
  ];

  export const skills = [
    {
      id: "1",
      subtitle: "HTML",
    },
    {
      id: "2",
      subtitle: "CSS",
    },
    {
      id: "3",
      subtitle: "Javascript",
    },
    {
      id: "4",
      subtitle: "React js",
    },
    {
      id: "5",
      subtitle: "Node js",
    },
    {
      id: "6",
      subtitle: "Ruby on Rails",
    },
    {
      id: "7",
      subtitle: "PostgreSQL",
    },
    {
      id: "8",
      subtitle: "MongoDB",
    },
    {
      id: "9",
      subtitle: "Git",
    },
    {
      id: "10",
      subtitle: "Github",
    },
  ];
  
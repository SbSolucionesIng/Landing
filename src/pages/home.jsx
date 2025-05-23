import React from "react";
import {
  Card,
  Typography,
  Button,
  Input,
  Textarea,
} from "@material-tailwind/react";
import {
  BriefcaseIcon,
  ChartBarIcon,
  PlayIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";


const contactData = [
  {
    title: "Excelent Services",
    icon: BriefcaseIcon,
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    title: "Grow Your Market",
    icon: ChartBarIcon,
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    title: "Launch Time",
    icon: PlayIcon,
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
];

export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 h-full w-full object-cover z-0"
        >
          <source src="/img/1.mp4" type="video/mp4" />
          Tu navegador no soporta el video HTML5.
        </video>
        <div className="absolute top-0 h-full w-full bg-black/60 z-10" />
        <div className="max-w-8xl container relative flex flex-col items-center gap-4 z-20">
          <img src="/img/logo.png" alt="Logo SB" className="w-24" />
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography variant="h1" color="white" className="mb-6 font-black">
                Your story starts with us.
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                We develop custom applications, websites, and web systems tailored to simplify your work and boost your business.
                We also provide professional repair and optimization services for computers and notebooks.
                At SB Soluciones Ingeniería, we are committed to offering reliable solutions and personalized support,
                always with friendly service and attention to your needs.
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <section className="relative bg-gray-100 py-24 px-4">
        <div className="container mx-auto">
          <div className="mx-auto w-full px-4 text-center lg:w-6/12">
            <Typography variant="lead" className="font-semibold">Co - Working</Typography>
            <Typography variant="h2" color="blue-gray" className="my-3">
              Build something
            </Typography>
            <Typography variant="lead" className="text-blue-gray-500">
              From the first idea to the final product,
              we're here to turn your vision into reality with smart, tailored solutions that fit your business.
            </Typography>
          </div>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          <div className="mx-auto w-full px-4 text-center lg:w-6/12">
            <Typography variant="lead" className="font-semibold">Contact Us</Typography>
            <Typography variant="h2" color="blue-gray" className="my-3">
              Want to work with us? <br />Contact the Team Behind the Code
            </Typography>
            <Typography variant="lead" className="text-blue-gray-500">
              Complete this form and we will get back to you in 24 hours.

            </Typography>
          </div>
          <form className="mx-auto w-full mt-12 lg:w-5/12">
            <div className="mb-8 flex gap-8">
              <Input variant="outlined" size="lg" label="Full Name" />
              <Input variant="outlined" size="lg" label="Email Address" />
            </div>
            <Textarea variant="outlined" size="lg" label="Message" rows={8} />
            <Button variant="gradient" size="lg" className="mt-8" fullWidth>
              Send Message
            </Button>
          </form>
        </div>
      </section>
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;

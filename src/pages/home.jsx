import React, { useState } from "react";
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
      "We provide top-quality technical support and custom software solutions to help your business grow smoothly.",
  },
  {
    title: "Grow Your Market",
    icon: ChartBarIcon,
    description:
      "Boost your business with digital solutions that expand your reach and improve efficiency.",
  },
  {
    title: "Launch Time",
    icon: PlayIcon,
    description:
      "We turn your ideas into reality quickly and efficiently, getting your product to market fast.",
  },
];

export function Home() {
  const [messageSent, setMessageSent] = useState(false);

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
          <source src="/img/2.mp4" type="video/mp4" />
          Tu navegador no soporta el video HTML5.
        </video>
        <div className="absolute top-0 h-full w-full bg-black/60 z-10" />
        <div className="max-w-8xl container relative flex flex-col items-center gap-4 z-20">
          <img src="/img/logo.png" alt="Logo SB" className="w-32" />
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography variant="h1" color="white" className="mb-6 font-black">
                Your story starts with us.
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                We develop custom applications, websites, and web systems tailored to simplify your work and boost your business.
                At SB Soluciones Ingeniería, we are committed to offering reliable solutions and personalized support,
                always with friendly service and attention to your needs.
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <section className="relative py-24 px-4">
        <div className="container mx-auto">
          <div className="mx-auto w-full px-4 text-center lg:w-6/12">
            <Typography variant="lead" className="font-semibold">Co - Working</Typography>
            <Typography variant="h2" color="#ffffff" className="my-3">
              Build something
            </Typography>
            <Typography variant="lead" className="text-gray-800">
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
                className="text-center text-gray-800"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-[#69b42d] shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-gray-800">
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
            <Typography variant="lead" className="text-gray-800">
              Complete this form and we will get back to you in 24 hours.
            </Typography>
          </div>

          <form
            className="mx-auto w-full mt-12 lg:w-5/12"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target;

              fetch("https://formsubmit.co/ajax/sb.soluciones.juy@gmail.com", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
                body: JSON.stringify({
                  name: form.name.value,
                  email: form.email.value,
                  message: form.message.value,
                }),
              })
                .then((response) => {
                  if (response.ok) {
                    setMessageSent(true);
                    form.reset();
                  }
                })
                .catch((error) => console.error("Error:", error));
            }}
          >
            <div className="mb-8 flex gap-8">
              <Input
                variant="outlined"
                size="lg"
                label="Full Name"
                name="name"
                required
              />
              <Input
                variant="outlined"
                size="lg"
                label="Email Address"
                name="email"
                type="email"
                required
              />
            </div>

            <Textarea
              variant="outlined"
              size="lg"
              label="Your Idea"
              rows={8}
              name="message"
              required
            />

            <Button
              className="bg-[#69b42d] text-white mt-8"
              variant="filled"
              size="lg"
              fullWidth
              type="submit"
            >
              Send Message
            </Button>

            {messageSent && (
              <p className="text-green-600 font-medium mt-4 text-center">
                ✅ Your message has been sent successfully!
              </p>
            )}
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;

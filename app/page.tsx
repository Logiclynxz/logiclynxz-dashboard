
import LoginFooter from "@/components/logincomponents/loginfooter";
import LoginForm from "@/components/logincomponents/loginform";
import LoginNav from "@/components/logincomponents/loginnav";
import { ModeToggle } from "@/components/ui/ModeToggle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative  w-full">
      <Image
      src="/greenpattern.png"
      alt="greenpattern"
      width={300}
      height={300}
      className="absolute lg:left-[30%] left-5 bottom-20 opacity-60 lg:bottom-[20%] -z-10"
      />
      <Image
      src="/redstar.png"
      alt="redstar"
      width={20}
      height={100}
      className="absolute lg:right-80 right-[15%] top-[10%] opacity-60 lg:top-10 lg:bottom-0 -z-10"
      />
      {/* <div className="absolute bg-blue-400 h-[400px] lg:h-[450px] w-full -z-10 -bottom-5 blur-[2px] " ></div> */}
      <div className="container w-full h-full">
        <LoginNav />
        <div className="flex w-full h-[100vh] items-center justify-center -mt-[15vh]">
          <LoginForm />
        </div>
      </div>
      <LoginFooter/>
    </main>
  );
}

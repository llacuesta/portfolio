"use client";

// Imports
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./SubmitBtn";

const Contact = () => {
  const { ref } = useSectionInView({ 
    sectionName: "contact", 
    threshold: 0.75
  });
  const { toast } = useToast();

  return (
    <section ref={ref} id="contact" className="md:m-16 my-16 mx-0 flex flex-col items-center md:w-[45%] w-4/5 scroll-mt-24">
      <h2 className="text-3xl font-medium capitalize mb-4">Contact</h2>

      <p className="text-center text-sm">I&apos;m open for work opportunities! Please contact me through this form or directly through my email at <a className="underline text-black" href="mailto:lllacuesta@up.edu.ph">lllacuesta@up.edu.ph</a>.</p>
      <form 
        className="md:w-[38rem] w-[100%] flex flex-col gap-2 m-8 mb-32 items-end" 
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast({
              variant: "destructive",
              title: "Uh oh! Something went wrong.",
              description: error,
            })
            return
          }

          toast({
            title: "Your message has been sent.",
            description: "Be on the lookout for a response. Thank you!",
          })
        }}
      >
        <Input type="email" placeholder="Your email" required maxLength={500} name="senderEmail"/>
        <Textarea className="h-36" placeholder="Your message" required maxLength={5000} name="message"/>
        <SubmitBtn />
      </form>
    
    </section>
  )
}

export default Contact

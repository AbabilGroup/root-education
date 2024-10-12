import Image from "next/image";

const TestimonialCard = () => {
  return (
    <div className="mx-2 my-6 space-y-3 rounded-b-[100px] rounded-t-lg border p-5 shadow-lg">
      <div>
        <Image
          src="/icons/comment.svg"
          alt="Testimonial"
          height={40}
          width={40}
        />
      </div>
      <div className="flex items-center justify-center gap-x-1">
        <Image src="/icons/star.svg" alt="Star" height={20} width={20} />
        <Image src="/icons/star.svg" alt="Star" height={20} width={20} />
        <Image src="/icons/star.svg" alt="Star" height={20} width={20} />
        <Image src="/icons/star.svg" alt="Star" height={20} width={20} />
        <Image src="/icons/star.svg" alt="Star" height={20} width={20} />
      </div>
      <p className="text-center text-sm font-medium">
        &quot;Root Education streamlined my study abroad journey with expert
        advice and support, making the process smooth and stress-free.&quot;
      </p>
      <div className="flex items-center justify-center">
        <Image
          src="/icons/client_photo.svg"
          alt="Client"
          height={70}
          width={70}
        />
      </div>
      <h5 className="text-center text-xl font-medium">John Smith</h5>
      <p className="text-center text-sm font-medium">Student</p>
    </div>
  );
};

export default TestimonialCard;

// bg-testimonial-card-bg min-h-[367px] bg-contain bg-center bg-no-repeat

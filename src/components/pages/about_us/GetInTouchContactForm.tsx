import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const GetInTouchContactForm = () => {
  return (
    <form className="space-y-5" action="">
      <Input
        className="focus:ring-primary rounded-sm"
        type="text"
        placeholder="Full name"
        required
      />
      <Input
        className="focus:ring-primary rounded-sm"
        type="email"
        placeholder="Email"
        required
      />
      <Input
        className="focus:ring-primary rounded-sm"
        type="tel"
        placeholder="Phone number"
        required
      />
      <Textarea
        className="focus:ring-primary rounded-sm"
        placeholder="Write your massage"
        rows={5}
      />
      <button
        className="flex items-center justify-center gap-x-2 rounded-sm bg-primary px-5 py-3 text-sm font-medium text-white duration-300 hover:bg-secondary hover:text-white"
        type="submit"
      >
        Send Message
      </button>
    </form>
  );
};

export default GetInTouchContactForm;

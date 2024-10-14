import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const GetInTouchContactForm = () => {
  return (
    <form className="space-y-5" action="">
      <Input
        className="rounded-sm focus:ring-primary"
        type="text"
        placeholder="Full name"
        required
      />
      <Input
        className="rounded-sm focus:ring-primary"
        type="email"
        placeholder="Email"
        required
      />
      <Input
        className="rounded-sm focus:ring-primary"
        type="tel"
        placeholder="Phone number"
        required
      />
      <Textarea
        className="rounded-sm focus:ring-primary"
        placeholder="Write your massage"
        rows={5}
        required
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

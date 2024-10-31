import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const Step11 = () => {
  const [faqFields, setFaqFields] = useState([
    { id: 1, questionPlaceholder: "Question 1", answerPlaceholder: "Answer 1" },
  ]);

  const addFaqField = () => {
    setFaqFields((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        questionPlaceholder: `Question ${prev.length + 1}`,
        answerPlaceholder: `Answer ${prev.length + 1}`,
      },
    ]);
  };

  const removeFaqField = (id: number) => {
    setFaqFields((prev) => prev.filter((field) => field.id !== id));
  };

  return (
    <TabsContent value="step11">
      <form className="w-1/2 space-y-5" action="">
        {/* Why study  */}
        <div>
          <Label>FAQ</Label>

          <Textarea className="mb-2" placeholder="Short brief" required />

          {faqFields.map((field, index) => (
            <div key={field.id} className="mb-2 space-y-2">
              <div className="flex items-center space-x-2">
                <Input
                  type="text"
                  placeholder={field.questionPlaceholder}
                  required
                />
                {field.id === faqFields.length && (
                  <button
                    type="button"
                    onClick={addFaqField}
                    className="rounded-full bg-blue-500 p-2 text-white"
                  >
                    <CiCirclePlus />
                  </button>
                )}
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => removeFaqField(field.id)}
                    className="rounded-full bg-red-500 p-2 text-white"
                  >
                    <CiCircleMinus />
                  </button>
                )}
              </div>
              <Textarea
                rows={5}
                placeholder={field.answerPlaceholder}
                required
              />
            </div>
          ))}
        </div>
        <Button type="submit">Post</Button>
      </form>
    </TabsContent>
  );
};

export default Step11;

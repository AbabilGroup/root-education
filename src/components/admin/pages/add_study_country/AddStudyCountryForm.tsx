"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/Button";

const AddStudyCountryForm = () => {
  const [countryName, setCountryName] = useState("");
  const [descriptions, setDescriptions] = useState([
    { id: 1, placeholder: "Paragraph 1" },
  ]);
  const [whyStudyFields, setWhyStudyFields] = useState([
    { id: 1, titlePlaceholder: "Title 1", contentPlaceholder: "Content 1" },
  ]);
  const [tuitionFeeFields, setTuitionFeeFields] = useState([
    { id: 1, titlePlaceholder: "Title 1", rangePlaceholder: "Range 1" },
  ]);
  const [livingCostFields, setLivingCostFields] = useState([
    { id: 1, titlePlaceholder: "Title 1", contentPlaceholder: "Content 1" },
  ]);
  const [jobFields, setJobFields] = useState([
    { id: 1, titlePlaceholder: "Title 1", contentPlaceholder: "Content 1" },
  ]);
  const [scholarshipFields, setScholarshipFields] = useState([
    {
      id: 1,
      namePlaceholder: "Name 1",
      criteriaPlaceholder: "Criteria 1",
      coveragePlaceholder: "Coverage 1",
      deadlinePlaceholder: "Deadline 1",
      processPlaceholder: "Process 1",
    },
  ]);

  const addDescriptionField = () => {
    setDescriptions((prev) => [
      ...prev,
      { id: prev.length + 1, placeholder: `Paragraph ${prev.length + 1}` },
    ]);
  };

  const removeDescriptionField = (id: number) => {
    setDescriptions((prev) => prev.filter((desc) => desc.id !== id));
  };

  const addWhyStudyField = () => {
    setWhyStudyFields((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        titlePlaceholder: `Title ${prev.length + 1}`,
        contentPlaceholder: `Content ${prev.length + 1}`,
      },
    ]);
  };

  const removeWhyStudyField = (id: number) => {
    setWhyStudyFields((prev) => prev.filter((field) => field.id !== id));
  };

  const addTuitionFeeField = () => {
    setTuitionFeeFields((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        titlePlaceholder: `Title ${prev.length + 1}`,
        rangePlaceholder: `Range ${prev.length + 1}`,
      },
    ]);
  };

  const removeTuitionFeeField = (id: number) => {
    setTuitionFeeFields((prev) => prev.filter((field) => field.id !== id));
  };

  const addLivingCostField = () => {
    setLivingCostFields((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        titlePlaceholder: `Title ${prev.length + 1}`,
        contentPlaceholder: `Content ${prev.length + 1}`,
      },
    ]);
  };

  const removeLivingCostField = (id: number) => {
    setLivingCostFields((prev) => prev.filter((field) => field.id !== id));
  };

  const addJobField = () => {
    setJobFields((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        titlePlaceholder: `Title ${prev.length + 1}`,
        contentPlaceholder: `Content ${prev.length + 1}`,
      },
    ]);
  };

  const removeJobField = (id: number) => {
    setJobFields((prev) => prev.filter((field) => field.id !== id));
  };

  const addScholarshipField = () => {
    setScholarshipFields((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        namePlaceholder: `Title ${prev.length + 1}`,
        criteriaPlaceholder: `Content ${prev.length + 1}`,
        coveragePlaceholder: `Deadline ${prev.length + 1}`,
        deadlinePlaceholder: `Process ${prev.length + 1}`,
        processPlaceholder: `Criteria ${prev.length + 1}`,
      },
    ]);
  };

  const removeScholarshipField = (id: number) => {
    setScholarshipFields((prev) => prev.filter((field) => field.id !== id));
  };

  return (
    <>
      <Tabs defaultValue="account" className="w-1/2">
        <TabsList className="flex items-center justify-start gap-x-2">
          <TabsTrigger className="border" value="step1">
            Step 1
          </TabsTrigger>
          <TabsTrigger className="border" value="step2">
            Step 2
          </TabsTrigger>
          <TabsTrigger className="border" value="step3">
            Step 3
          </TabsTrigger>
          <TabsTrigger className="border" value="step4">
            Step 4
          </TabsTrigger>
          <TabsTrigger className="border" value="step5">
            Step 5
          </TabsTrigger>
          <TabsTrigger className="border" value="step6">
            Step 6
          </TabsTrigger>
        </TabsList>

        <TabsContent value="step1">
          <form className="w-1/2 space-y-5" action="">
            {/* Country Name */}
            <div>
              <Label>Country Name</Label>
              <Input
                type="text"
                onChange={(e) => setCountryName(e.target.value)}
                required
              />
            </div>

            {/* flag */}
            <div>
              <Label>Upload flag</Label>
              <Input type="file" required />
            </div>
            <Button type="submit">Next</Button>
          </form>
        </TabsContent>
        <TabsContent value="step2">
          <form className="w-1/2 space-y-5" action="">
            {/* Title */}
            <div>
              <Label>Title</Label>
              <Input type="text" />
            </div>

            {/* Description */}
            <div>
              <Label>Description</Label>
              {descriptions.map((desc, index) => (
                <div key={desc.id} className="mb-2 flex items-center space-x-2">
                  <Textarea rows={5} placeholder={desc.placeholder} />
                  {desc.id === descriptions.length && (
                    <button
                      type="button"
                      onClick={addDescriptionField}
                      className="rounded-full bg-blue-500 p-2 text-white"
                    >
                      <CiCirclePlus />
                    </button>
                  )}
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => removeDescriptionField(desc.id)}
                      className="rounded-full bg-red-500 p-2 text-white"
                    >
                      <CiCircleMinus />
                    </button>
                  )}
                </div>
              ))}
            </div>
            <Button type="submit">Next</Button>
          </form>
        </TabsContent>
        <TabsContent value="step3">
          <form className="w-1/2 space-y-5" action="">
            {/* Why study  */}
            <div>
              <Label>Why study in {countryName}?</Label>

              <Textarea className="mb-2" placeholder="Short brief" />

              {whyStudyFields.map((field, index) => (
                <div key={field.id} className="mb-2 space-y-2">
                  <div className="flex items-center space-x-2">
                    <Input type="text" placeholder={field.titlePlaceholder} />
                    {field.id === whyStudyFields.length && (
                      <button
                        type="button"
                        onClick={addWhyStudyField}
                        className="rounded-full bg-blue-500 p-2 text-white"
                      >
                        <CiCirclePlus />
                      </button>
                    )}
                    {index > 0 && (
                      <button
                        type="button"
                        onClick={() => removeWhyStudyField(field.id)}
                        className="rounded-full bg-red-500 p-2 text-white"
                      >
                        <CiCircleMinus />
                      </button>
                    )}
                  </div>
                  <Textarea rows={5} placeholder={field.contentPlaceholder} />
                </div>
              ))}
            </div>
            <Button type="submit">Next</Button>
          </form>
        </TabsContent>
        <TabsContent value="step4">
          <form className="w-1/2 space-y-5" action="">
            {/* Why study  */}
            <div>
              <Label>Cost of Study and Living</Label>

              <Textarea className="mb-2" placeholder="Short brief" />

              <div>
                <Label>Tuition Fee</Label>

                {tuitionFeeFields.map((field, index) => (
                  <div key={field.id} className="mb-2 space-y-2">
                    <div className="flex items-center space-x-2">
                      <Input type="text" placeholder={field.titlePlaceholder} />
                      {field.id === tuitionFeeFields.length && (
                        <button
                          type="button"
                          onClick={addTuitionFeeField}
                          className="rounded-full bg-blue-500 p-2 text-white"
                        >
                          <CiCirclePlus />
                        </button>
                      )}
                      {index > 0 && (
                        <button
                          type="button"
                          onClick={() => removeTuitionFeeField(field.id)}
                          className="rounded-full bg-red-500 p-2 text-white"
                        >
                          <CiCircleMinus />
                        </button>
                      )}
                    </div>
                    <Textarea rows={5} placeholder={field.rangePlaceholder} />
                  </div>
                ))}
              </div>

              <div>
                <Label>Living Costs</Label>

                {livingCostFields.map((field, index) => (
                  <div key={field.id} className="mb-2 space-y-2">
                    <div className="flex items-center space-x-2">
                      <Input type="text" placeholder={field.titlePlaceholder} />
                      {field.id === livingCostFields.length && (
                        <button
                          type="button"
                          onClick={addLivingCostField}
                          className="rounded-full bg-blue-500 p-2 text-white"
                        >
                          <CiCirclePlus />
                        </button>
                      )}
                      {index > 0 && (
                        <button
                          type="button"
                          onClick={() => removeLivingCostField(field.id)}
                          className="rounded-full bg-red-500 p-2 text-white"
                        >
                          <CiCircleMinus />
                        </button>
                      )}
                    </div>
                    <Textarea rows={5} placeholder={field.contentPlaceholder} />
                  </div>
                ))}
              </div>
            </div>
            <Button type="submit">Next</Button>
          </form>
        </TabsContent>
        <TabsContent value="step5">
          <form className="w-1/2 space-y-5" action="">
            {/* Why study  */}
            <div>
              <Label>Job Opportunity</Label>

              <Textarea className="mb-2" placeholder="Short brief" />

              {jobFields.map((field, index) => (
                <div key={field.id} className="mb-2 space-y-2">
                  <div className="flex items-center space-x-2">
                    <Input type="text" placeholder={field.titlePlaceholder} />
                    {field.id === jobFields.length && (
                      <button
                        type="button"
                        onClick={addJobField}
                        className="rounded-full bg-blue-500 p-2 text-white"
                      >
                        <CiCirclePlus />
                      </button>
                    )}
                    {index > 0 && (
                      <button
                        type="button"
                        onClick={() => removeJobField(field.id)}
                        className="rounded-full bg-red-500 p-2 text-white"
                      >
                        <CiCircleMinus />
                      </button>
                    )}
                  </div>
                  <Textarea rows={5} placeholder={field.contentPlaceholder} />
                </div>
              ))}
            </div>
            <Button type="submit">Next</Button>
          </form>
        </TabsContent>
        <TabsContent value="step6">
          <form className="w-1/2 space-y-5" action="">
            {/* Why study  */}
            <div>
              <Label>Scholarships</Label>

              <Textarea className="mb-2" placeholder="Short brief" />

              {scholarshipFields.map((field, index) => (
                <div key={field.id} className="my-2 mb-10 space-y-2">
                  <div className="flex items-center space-x-2">
                    <Input type="text" placeholder={field.namePlaceholder} />
                    {field.id === scholarshipFields.length && (
                      <button
                        type="button"
                        onClick={addScholarshipField}
                        className="rounded-full bg-blue-500 p-2 text-white"
                      >
                        <CiCirclePlus />
                      </button>
                    )}
                    {index > 0 && (
                      <button
                        type="button"
                        onClick={() => removeScholarshipField(field.id)}
                        className="rounded-full bg-red-500 p-2 text-white"
                      >
                        <CiCircleMinus />
                      </button>
                    )}
                  </div>
                  <Input type="text" placeholder={field.criteriaPlaceholder} />
                  <Input type="text" placeholder={field.coveragePlaceholder} />
                  <Input type="text" placeholder={field.deadlinePlaceholder} />
                  <Input type="text" placeholder={field.processPlaceholder} />
                </div>
              ))}
            </div>
            <Button type="submit">Next</Button>
          </form>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default AddStudyCountryForm;

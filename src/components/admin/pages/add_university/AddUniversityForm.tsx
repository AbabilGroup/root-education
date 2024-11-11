"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/Button";

const AddUniversityForm = () => {
  return (
    <form className="w-1/2 space-y-8" action="">
      <div>
        <Label>University Name</Label>
        <Input type="text" required />
      </div>

      <div>
        <Label>Description</Label>
        <Textarea rows={5} required />
      </div>

      <div>
        <Label>Country</Label>
        <Input type="text" required />
      </div>

      <div>
        <Label>University Type</Label>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Choose type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="public">Public</SelectItem>
            <SelectItem value="private">Private</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label>Total Students</Label>
        <Input type="number" required />
      </div>

      <div>
        <Label>Launch Year</Label>
        <Input type="number" required />
      </div>

      <div>
        <Label>Video</Label>
        <Input type="file" required />
      </div>

      <div>
        <Label>Video Thumbnail</Label>
        <Input type="file" required />
      </div>

      <div>
        <Label>Logo</Label>
        <Input type="file" required />
      </div>

      <div>
        <Label>About University</Label>
        <div className="space-y-5">
          <div className="space-y-2">
            <Input type="text" placeholder="Title" required />
            <Textarea rows={5} placeholder="Content" required />
          </div>
          <div className="space-y-2">
            <Input type="text" placeholder="Title" required />
            <Textarea rows={5} placeholder="Content" required />
          </div>
          <div className="space-y-2">
            <Input type="text" placeholder="Title" required />
            <Textarea rows={5} placeholder="Content" required />
          </div>
          <div className="space-y-2">
            <Input type="text" placeholder="Title" required />
            <Textarea rows={5} placeholder="Content" required />
          </div>
        </div>
      </div>

      <div>
        <Label>University Programs</Label>
        <div className="space-y-2">
          <Input type="text" placeholder="Title" required />
          <Input type="text" placeholder="Title" required />
          <Input type="text" placeholder="Title" required />
          <Input type="text" placeholder="Title" required />
        </div>
      </div>

      <div>
        <Label>Postgraduate Programs</Label>
        <div className="space-y-2">
          <Input type="text" placeholder="Title" required />
          <Input type="text" placeholder="Title" required />
          <Input type="text" placeholder="Title" required />
          <Input type="text" placeholder="Title" required />
        </div>
      </div>

      <div>
        <Label>Doctoral Programs</Label>
        <div className="space-y-2">
          <Input type="text" placeholder="Title" required />
          <Input type="text" placeholder="Title" required />
          <Input type="text" placeholder="Title" required />
          <Input type="text" placeholder="Title" required />
        </div>
      </div>

      <div className="space-y-5">
        <div>
          <Label>Scholarship</Label>
          <Textarea placeholder="Short brief" required />
        </div>

        <div>
          <Label>Table</Label>
          <div className="space-y-5">
            <div className="space-y-2">
              <Input type="text" placeholder="Scholarship Name" required />
              <Input type="text" placeholder="Amount" required />
              <Input type="text" placeholder="Eligibility Criteria" required />
              <Input type="text" placeholder="Provider" required />
            </div>
            <div className="space-y-2">
              <Input type="text" placeholder="Scholarship Name" required />
              <Input type="text" placeholder="Amount" required />
              <Input type="text" placeholder="Eligibility Criteria" required />
              <Input type="text" placeholder="Provider" required />
            </div>
            <div className="space-y-2">
              <Input type="text" placeholder="Scholarship Name" required />
              <Input type="text" placeholder="Amount" required />
              <Input type="text" placeholder="Eligibility Criteria" required />
              <Input type="text" placeholder="Provider" required />
            </div>
          </div>
        </div>

        <div>
          <Label>Notes:</Label>

          <div className="space-y-2">
            <Input type="text" placeholder="Title" required />
            <Input type="text" placeholder="Title" required />
            <Input type="text" placeholder="Title" required />
            <Input type="text" placeholder="Title" required />
          </div>
        </div>
      </div>

      <div>
        <Label>Applicaiton Guide</Label>

        <div className="space-y-5">
          <Input type="text" placeholder="Short brief" required />

          <div className="space-y-5">
            <div className="space-y-2">
              <Input type="text" placeholder="Title" required />
              <Textarea placeholder="Content" required />
            </div>
            <div className="space-y-2">
              <Input type="text" placeholder="Title" required />
              <Textarea placeholder="Content" required />
            </div>
            <div className="space-y-2">
              <Input type="text" placeholder="Title" required />
              <Textarea placeholder="Content" required />
            </div>
            <div className="space-y-2">
              <Input type="text" placeholder="Title" required />
              <Textarea placeholder="Content" required />
            </div>
          </div>
        </div>
      </div>

      <Button type="submit">Add University</Button>
    </form>
  );
};

export default AddUniversityForm;

"use client";

import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";

const people = [
  { id: 1, name: "Tom Cook" },
  { id: 2, name: "Wade Cooper" },
  { id: 3, name: "Tanya Fox" },
  { id: 4, name: "Arlene Mccoy" },
  { id: 5, name: "Devon Webb" },
];

export default function Search() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(people[1]);

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className="mt-5 w-full">
      <Combobox
        value={selected}
        onChange={(value: { id: number; name: string }) => setSelected(value)}
        onClose={() => setQuery("")}
      >
        <div className="relative">
          <ComboboxInput
            className="w-full rounded-lg border px-3 py-3 text-sm shadow-sm"
            placeholder="Search here..."
            onChange={(event) => setQuery(event.target.value)}
          />
          <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
            <IoSearch className="text-xl" />
          </ComboboxButton>
        </div>

        <ComboboxOptions
          anchor="bottom"
          transition
          className="mt-2 inline-block w-full rounded-lg border bg-white"
        >
          {filteredPeople.map((person) => (
            <ComboboxOption key={person.id} value={person}>
              <p>{person.name}</p>
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
    </div>
  );
}

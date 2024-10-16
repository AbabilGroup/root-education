import Image from "next/image";

const BlogCard = () => {
  return (
    <div className="rounded-lg border shadow-lg">
      <div className="relative min-h-[170px] w-full">
        <Image
          className="h-full w-full"
          src="/images/pages/blogs/blog_thumbnail.svg"
          alt="The Best Study Abroad Experiences with Root Education"
          fill
        />
      </div>
      <div className="mx-10 flex items-center justify-between rounded-md border bg-white px-3 py-2 text-sm font-medium text-primary shadow-sm">
        <div className="flex items-center justify-start gap-x-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.86333 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V4.66667C2 4.31304 2.14048 3.97391 2.39052 3.72386C2.64057 3.47381 2.97971 3.33333 3.33333 3.33333H11.3333C11.687 3.33333 12.0261 3.47381 12.2761 3.72386C12.5262 3.97391 12.6667 4.31304 12.6667 4.66667V7.33333H2M12 9.33333V12H14.6667M12 9.33333C12.7072 9.33333 13.3855 9.61428 13.8856 10.1144C14.3857 10.6145 14.6667 11.2928 14.6667 12M12 9.33333C11.2928 9.33333 10.6145 9.61428 10.1144 10.1144C9.61428 10.6145 9.33333 11.2928 9.33333 12C9.33333 12.7072 9.61428 13.3855 10.1144 13.8856C10.6145 14.3857 11.2928 14.6667 12 14.6667C12.7072 14.6667 13.3855 14.3857 13.8856 13.8856C14.3857 13.3855 14.6667 12.7072 14.6667 12M10 2V4.66667M4.66667 2V4.66667"
              stroke="#F37329"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h6>08th August, 2024</h6>
        </div>
        <div className="flex items-center justify-start gap-x-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.33333 5.99996H10.6667M5.33333 8.66663H9.33333M12 2.66663C12.5304 2.66663 13.0391 2.87734 13.4142 3.25241C13.7893 3.62749 14 4.13619 14 4.66663V9.99996C14 10.5304 13.7893 11.0391 13.4142 11.4142C13.0391 11.7892 12.5304 12 12 12H8.66667L5.33333 14V12H4C3.46957 12 2.96086 11.7892 2.58579 11.4142C2.21071 11.0391 2 10.5304 2 9.99996V4.66663C2 4.13619 2.21071 3.62749 2.58579 3.25241C2.96086 2.87734 3.46957 2.66663 4 2.66663H12Z"
              stroke="#F37329"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h6>Comments (03)</h6>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

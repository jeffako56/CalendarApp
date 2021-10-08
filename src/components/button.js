export default function ButtonAddTailwind({ onClick, isButton, title }) {
  return (
    isButton && (
      <button
        onClick={onClick}
        className={
          "bg-blue-700 border-2 font-bold text-gray-200 px-4 lg:py-2 sm:py-1 lg:absolute lg:top-40 lg:right-20 rounded-2xl sm:ml-10 sm:mt-2 "
        }
      >
        {title}
      </button>
    )
  );
}

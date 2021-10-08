export default function ButtonSearchTailwind({ onClick, isButton, title }) {
  return (
    isButton && (
      <button
        onClick={onClick}
        className="bg-blue-700 border-2 font-bold text-gray-200 px-4 py-2 absolute top-40 right-60 rounded-2xl"
      >
        {title}
      </button>
    )
  );
}

type TagProp = {
  value: string | string[];
}

export const Tags = (props: TagProp) => {
  const { value } = props;
  return (
    <div className="mt-10 bg-gradient-to-r from-pink-300 to-blue-800 p-1 
    rounded-2xl baseline  dark:bg-gray-800 shadow-md shadow-blue-900 dark:shadow-blue-400">
      <div className="flex justify-center items-center font-semibold p-3 text-cyan-900 dark:text-zinc-300 px-6 
      rounded-xl baseline dark:bg-gray-800 bg-blue-200">
        {value}
      </div>
    </div>
  );
};

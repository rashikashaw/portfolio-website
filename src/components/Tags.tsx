type TagProp = {
  value: string | string[];
}

export const Tags = (props: TagProp) => {
  const { value } = props;
  return (
    <div className="mt-10 bg-gradient-to-r from-cyan-300 to-cyan-800 p-1 
    rounded-2xl baseline  dark:bg-gray-800 shadow-md shadow-cyan-900/50 dark:shadow-cyan-400/50">
      <div className="flex justify-center items-center font-semibold p-3 text-cyan-900 dark:text-cyan-200 px-6 
      rounded-xl baseline dark:bg-gray-800 bg-blue-200">
        {value}
      </div>
    </div>
  );
};

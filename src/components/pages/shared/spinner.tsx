const Spinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className=" flex justify-center items-center animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-blue-500">
        <p className="text-primary-500 text-sm">Loading...</p>
      </div>
    </div>
  );
};

export default Spinner;

const InputField = ({ label, type, placeholder }) => {
  return (
    <div className="flex flex-col">
      <label className="text-gray-700 font-medium">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>
  );
};

export default InputField;

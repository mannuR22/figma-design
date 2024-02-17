

function Breadcrumb({ items }){
    return <nav className="text-gray-400 text-sm py-[1rem] mt-[2rem]">
    {items.map((item, index) => (
      <span key={index}>
        {item}
        {index < items.length - 1 && ' > '}
      </span>
    ))}
  </nav>
};

export default Breadcrumb;

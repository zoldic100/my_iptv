import './container.css'
const Container = (props) => {
  return (
    
    <div className="">

        <div className="my-container mx-auto  max-w-7xl px-2 sm:px-6 lg:px-8  py-9 sm:py-7 lg:py-12  rounded-[25px]">

        {props.children}
      </div>
    </div>
  )
}

export default Container
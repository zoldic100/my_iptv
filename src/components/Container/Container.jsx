
const Container = (props) => {
  return (
    
    <div className="bg-gray-800">

        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">

        {props.children}
      </div>
    </div>
  )
}

export default Container
const Input = ({icon:Icon, ...props}) => {
  return (
    <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Icon className="size-5 text-primary"></Icon>
        </div>
        <input {...props} className="w-full pl-10 pr-3 py-2 bg-accent-4 rounded-seven border border-accent-1 
        focus:border-green-500 focus:ring-2 focus:ring-green-500 text-white placeholder-accent-5 transition duration-200" />
    </div>
  )
}

export default Input

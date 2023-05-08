type InputProps = {
    className?: string;
    label:string;
    type: string;
    onChange: (value:string) => void
}

export const Input =({className,type,label, onChange}: InputProps)=>{
    return(
        <div className={`${className} w-full flex flex-col`}>
            <label className="text-grey font-poppins text-xl font-medium capitalize">{label}</label>
              <input className="w-full mt-2 radius p-3 font-poppins text-lg outline-none bg-gray-dark bg-opacity-30 text-black radius rounded-lg" 
              type={type}
              onChange={(event) => onChange(event.target.value)}
               />
        </div>
      
    )
}
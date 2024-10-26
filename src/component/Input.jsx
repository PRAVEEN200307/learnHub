import PropTypes from 'prop-types';


export default function Input( {labelName,name,placeHolderName,type="text"} ) {
    return (
        <div className=" flex flex-col gap-2   ">
            <label htmlFor={name} className=" font-bold text-3xl  text-lime-400">{labelName} :</label>
            <input type={type} name={name} id={name} className=" p-4 rounded" placeholder={placeHolderName}  required />
        </div>
    )
}

Input.propTypes  ={
     labelName : PropTypes.string,
     name: PropTypes.string,
     placeHolderName: PropTypes.string,
     type : PropTypes.string
}
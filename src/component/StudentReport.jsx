import PropTypes from 'prop-types';


export default function StudentReport({ studentlabel, value }) {
    return (
        <div className=' flex flex-col items-center gap-2'>
            <h1 className=' w-fit px-3 rounded  bg-lime-400 text-black font-semibold'>{studentlabel}</h1>
            <span className=' text-5xl'>{value}</span>
        </div>
    )
}
StudentReport.propTypes = {
    studentlabel: PropTypes.string,
    value: PropTypes.number
}
import { useField } from "formik"
import './Select.css'

const Select = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    return (
        <div className='campo' >
            <label>{label}</label>
            <select {...field} {...props} className="select" />
            {meta.touched && meta.error 
             ? <div>{meta.error}</div> : null}
        </div>
    )
}

export default Select
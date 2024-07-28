import { useField } from "formik";
import './Checkbox.css'

const Checkbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox'})
    return (
        <div className="container">
            <label>
                <input className="checkbox" type='checkbox' {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ?
             <div>{meta.error}</div> : null}
        </div>
    )
}

export default Checkbox
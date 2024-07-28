import { useField } from "formik";
import './Radio.css'

const Radio = ({ label, ...props}) => {
    const [field] = useField({ ...props, type: 'radio' })
    return (
        <div className='radio' >
            <label>
                <input type='radio' {...field} {...props} className='radioclick' />
                {label}
            </label>
        </div>
    )
}

export default Radio
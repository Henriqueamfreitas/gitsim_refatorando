import { forwardRef } from "react"

export const Input = forwardRef(({ select, label, error, ...rest }, ref) => {
    return (
        <div>
            <label>{label}</label>
            {
                select ?
                    <select ref={ref} {...rest}>
                        <option value="">Select your course</option>
                        <option value="Introduction to Python Programming">Introduction to Python Programming</option>
                        <option value="Java Programming Fundamentals">Java Programming Fundamentals</option>
                        <option value="JavaScript for Beginners: From Zero to Hero">JavaScript for Beginners: From Zero to Hero</option>
                        <option value="iOS App Development with Swift">iOS App Development with Swift</option>
                        <option value="Android App Development: Kotlin Basics">Android App Development: Kotlin Basics</option>
                    </select> :
                <input ref={ref} {...rest} />            
            }
            {error}
        </div>
    )
})
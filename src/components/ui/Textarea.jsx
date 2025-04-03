import React from 'react'

/**
 * A customizable textare component using DaisyUI with dark mode support.
 *
 *
 * @param {string} props.type - The type of the textarea field (e.g., "text", "email", "password").
 * @param {string} [props.id] - The unique identifier for the textarea field.
 * @param {string} [props.name] - The name attribute used for form submission.
 * @param {string} [props.className] - Additional CSS classes for styling.
 * @param {string} [props.placeholder] - The placeholder text for the input field.
 * @param {string} props.value - The current value of the textarea field (controlled component).
 * @param {function} props.onChange - Callback function triggered when the textarea value changes.
 * @param {string} [props.variant] - DaisyUI styling variant (`"primary"`, `"secondary"`, `"accent"`, `"info"`, `"success"`, `"warning"`, `"error"`).
 * @param {string} [props.size] - Textarea size (`"lg"`, `"md"`, `"sm"`, `"xs"`).
 * @param {boolean} [props.fullWidth] - If true, makes the input take full width.
 *
 * @returns {JSX.Element} The customized DaisyUI textarea component.
 */
export const Textarea = ({   
    className,
    onChange,
    variant = "primary",
    size = "md",
    fullWidth = false,
    ...props
}) => {
    return (
        <textarea
            {...props}          
            className={`textarea w-full min-h-36  textarea-${variant} textarea-${size} ${fullWidth ? "w-full" : ""
                } ${className} bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:border-teal-500`}
                   />
    )
}

import React from 'react'

/**
 * A customizable label component using DaisyUI with dark mode support.
 *
 * @param {string} [props.id] - The unique identifier for the label field.
 * @param {JSX.Element | string} [props.children] - Elements wrapped by label tag.
 * @param {string} [props.className] - Additional CSS classes for styling.
 * @param {string} [props.htmlFor] - input class rconnected to label.
 * @param {string} [props.variant] - DaisyUI styling variant (`"primary"`, `"secondary"`, `"accent"`, `"info"`, `"success"`, `"warning"`, `"error"`).
 * @param {string} [props.size] - Input size (`"lg"`, `"md"`, `"sm"`, `"xs"`).
 * @param {boolean} [props.fullWidth] - If true, makes the input take full width.
 *
 * @returns {JSX.Element} The customized DaisyUI label component.
 * 
 */
export const Label = ({ className, children, fullWidth, ...props }) => {
    return (
        <label {...props} className={`label   ${fullWidth ? "w-full" : ""
            } ${className}  block text-sm font-medium text-gray-700 dark:text-white `}
        >{children}</label>
    )
}






/**
 * A customizable input component using DaisyUI with dark mode support.
 *
 *
 * @param {string} props.type - The type of the input field (e.g., "text", "email", "password").
 * @param {string} [props.id] - The unique identifier for the input field.
 * @param {string} [props.name] - The name attribute used for form submission.
 * @param {string} [props.className] - Additional CSS classes for styling.
 * @param {string} [props.placeholder] - The placeholder text for the input field.
 * @param {string} props.value - The current value of the input field (controlled component).
 * @param {function} props.onValueChange - Callback function triggered when the input value changes.
 * @param {string} [props.variant] - DaisyUI styling variant (`"primary"`, `"secondary"`, `"accent"`, `"info"`, `"success"`, `"warning"`, `"error"`).
 * @param {string} [props.size] - Input size (`"lg"`, `"md"`, `"sm"`, `"xs"`).
 * @param {boolean} [props.fullWidth] - If true, makes the input take full width.
 *
 * @returns {JSX.Element} The customized DaisyUI input component.
 */

export const Input = ({
    type,
    id,
    name,
    className,
    placeholder,
    value,
    onValueChange,
    variant = "primary",
    size = "md",
    fullWidth = false,
}) => {
    return (
        <input
            type={type}
            id={id}
            name={name}
            className={`input input-bordered input-${variant} input-${size} ${fullWidth ? "w-full" : ""
                } ${className} bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:border-teal-500`}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onValueChange(e.target.value)}
        />
    );
};

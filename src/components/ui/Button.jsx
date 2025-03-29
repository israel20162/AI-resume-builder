

/**
 * A customizable button component using DaisyUI with dark mode support.
 *
 * @param {string} [props.type="button"] - The type attribute for the button.
 * @param {string} [props.className=""] - Additional Tailwind CSS classes for styling.
 * @param {string} [props.variant="primary"] - DaisyUI variant (e.g., "primary", "secondary", "accent", "info", "success", "warning", "error").
 * @param {string} [props.size="md"] - DaisyUI size (e.g., "lg", "md", "sm", "xs").
 * @param {boolean} [props.disabled=false] - If true, disables the button.
 * @param {function} props.onClick - Callback function triggered on button click.
 * @param {React.ReactNode} props.children - The content inside the button.
 *
 * @returns {JSX.Element} The customized DaisyUI button component.
 */
export const Button = ({
  type = "button",
  className = "",
  variant = "",
  size = "md",
  disabled = false,
  onClick,
  children,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`btn btn-${variant} btn-${size}  border-0 bg-teal-500 hover:bg-teal-600 disabled:opacity-50 dark:bg-teal-800 hover:dark:bg-teal-700 dark:text-white  !${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

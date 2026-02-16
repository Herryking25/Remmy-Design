import { motion } from 'framer-motion';

const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "px-6 py-3 rounded-lg font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background";

    const variants = {
        primary: "bg-primary text-primary-foreground hover:bg-blue-600 focus:ring-blue-500",
        outline: "border-2 border-primary text-primary hover:bg-primary/10 focus:ring-blue-500",
        ghost: "text-secondary hover:text-white hover:bg-white/5 focus:ring-gray-500",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;

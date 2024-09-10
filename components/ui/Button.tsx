type ButtonProps = {
    children: React.ReactNode;
    bg?: string;           
    textColor?: string;     
    uppercase?: boolean;    
    rounded?: string;       
    additionalClasses?: string; 
  }
  
  const Button = ({
    children,
    bg = "bg-cta",           
    textColor = "text-primary", 
    uppercase = true,        
    rounded = "rounded",     
    additionalClasses = "",  
  }: ButtonProps) => {
    return (
      <button
        className={`${bg} ${textColor} ${uppercase ? "uppercase" : ""} font-bold py-2 px-4 ${rounded} hover:opacity-80 ${additionalClasses}`}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  
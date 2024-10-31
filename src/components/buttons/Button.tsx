type Props = {
  bgColor: string;
  textColor: string;
  text: string;
  file?: string;
};

const Button = ({ bgColor, textColor, text, file }: Props) => {
  const fileButtonClick = () => {
    if (file) {
      const a = document.createElement('a');
      a.href = file;
      a.download = 'CV - Borneel';
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <button
      className={`bg-${bgColor} text-${textColor} my-10 py-3 px-7 rounded-md shadow-lg hover:bg-blue-950 hover:text-white transition ease-in-out`}
      onClick={fileButtonClick}
    >
      {text}
    </button>
  );
};

export default Button;

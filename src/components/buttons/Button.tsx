import React from 'react';

type Props = {
  bgColor: string;
  textColor: string;
  text: string;
  file?: string;
};

const Button = ({ bgColor, textColor, text, file }: Props) => {
  const fileButtonClick = () => {
    if (file) {
      // Create an anchor element to trigger the file download
      const a = document.createElement('a');
      a.href = file;
      a.download = 'Curriculum Vitae - Borneel'; // Specify the file name here
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <button
      className={`bg-${bgColor} text-${textColor} my-10 py-3 px-7 rounded-md shadow-lg hover:bg-blue-950 hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300`}
      onClick={fileButtonClick}
    >
      {text}
    </button>
  );
};

export default Button;

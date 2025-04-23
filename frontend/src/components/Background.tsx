import { ReactNode } from 'react';

type Props = {
  imageUrl: string;
  children?: ReactNode;
};

export default function Background({ imageUrl, children }: Props) {
  return (
    <div className="relative min-h-screen w-full">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="relative z-10 flex items-center justify-center text-white h-full">
        {children}
      </div>
    </div>
  );
}

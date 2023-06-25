import Code from '@/components/app/Code';
import CopyCode from './CopyCode';
import { Lang } from 'shiki';

type CodeBlockProps = {
  code: string;
  lang: Lang;
  fileName?: string;
};

const CodeBlock: React.FC<CodeBlockProps> = ({ code, lang, fileName }) => {
  return (
    <div className='relative overflow-x-auto rounded-md border border-neutral-800 p-4'>
      {fileName ? (
        <div className='absolute left-4 top-4'>
          <span className='text-sm text-gray-400'>{fileName}</span>
        </div>
      ) : null}
      <div className='absolute right-4 top-4'>
        <CopyCode code={code} />
      </div>
      <div className='pt-10'>
        <Code code={code} lang={lang} />
      </div>
    </div>
  );
};

export default CodeBlock;

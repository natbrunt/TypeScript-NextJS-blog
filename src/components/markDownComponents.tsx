interface CodeProps {
    inline?: boolean; // `inline` is optional and can be a boolean
    [key: string]: any; // This allows other props to pass through
  }

const markDownComponents = {
    h1: ({ ...props }) => <h1 className="text-3xl font-bold mb-4" {...props} />,
    h2: ({ ...props }) => <h2 className="text-2xl font-bold mb-3" {...props} />,
    h3: ({ ...props }) => <h3 className="text-xl font-bold mb-2" {...props} />,
    p: ({ ...props }) => <p className="mb-4" {...props} />,
    ul: ({ ...props }) => <ul className="list-disc pl-5 mb-4" {...props} />,
    ol: ({ ...props }) => <ol className="list-decimal pl-5 mb-4" {...props} />,
    li: ({ ...props }) => <li className="mb-1" {...props} />,
    a: ({ ...props }) => <a className="text-blue-500 hover:underline" {...props} />,
    blockquote: ({ ...props }) => <blockquote className="border-l-4 border-gray-300 pl-4 italic mb-4" {...props} />,
    pre: ({ ...props }) => (
      <pre className="whitespace-pre-wrap break-words" {...props}/>
    ),
    code: ({ inline, ...props }: CodeProps) =>
      inline
        ? <code className="bg-secondary rounded px-1" {...props} />
        : <code className="block bg-secondary rounded p-2 mb-4" {...props} />,
  }

export default markDownComponents
export default function DocumentsPage() {
  const documents = [
    {
      id: 1,
      name: "Project Proposal.pdf",
      type: "PDF",
      size: "2.4 MB",
      modified: "Feb 4, 2026",
    },
    {
      id: 2,
      name: "Financial Report Q4.xlsx",
      type: "Excel",
      size: "1.8 MB",
      modified: "Feb 3, 2026",
    },
    {
      id: 3,
      name: "Marketing Strategy.docx",
      type: "Word",
      size: "856 KB",
      modified: "Feb 2, 2026",
    },
    {
      id: 4,
      name: "Brand Guidelines.pdf",
      type: "PDF",
      size: "5.2 MB",
      modified: "Jan 28, 2026",
    },
    {
      id: 5,
      name: "Meeting Notes.txt",
      type: "Text",
      size: "12 KB",
      modified: "Jan 25, 2026",
    },
  ];

  const getFileIcon = (type: string) => {
    switch (type) {
      case "PDF":
        return "📄";
      case "Excel":
        return "📊";
      case "Word":
        return "📝";
      default:
        return "📋";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Documents</h1>
          <p className="mt-2">Manage and organize your files.</p>
        </div>
        <button className="btn-primary flex items-center gap-2 self-start">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
            />
          </svg>
          Upload
        </button>
      </div>

      {/* Folder Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <FolderCard name="Projects" count={12} />
        <FolderCard name="Reports" count={8} />
        <FolderCard name="Marketing" count={24} />
        <FolderCard name="Archive" count={156} />
      </div>

      {/* Recent Documents */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Recent Documents</h2>
        <div className="card-themed rounded-xl divide-y divide-border-primary">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="flex items-center justify-between p-4 hover:bg-interactive-bg transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">{getFileIcon(doc.type)}</span>
                <div>
                  <p className="font-medium">{doc.name}</p>
                  <p className="text-sm text-text-muted">
                    {doc.type} • {doc.size}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-text-tertiary hidden sm:block">
                  {doc.modified}
                </span>
                <button className="p-2 rounded-lg hover:bg-interactive-bg-hover transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface FolderCardProps {
  name: string;
  count: number;
}

function FolderCard({ name, count }: FolderCardProps) {
  return (
    <div className="card-themed rounded-xl p-4 cursor-pointer hover:-translate-y-1 transition-all duration-200">
      <div className="flex items-center gap-3">
        <svg
          className="w-10 h-10 text-accent-primary"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M10 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2h-8l-2-2z" />
        </svg>
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-text-muted">{count} files</p>
        </div>
      </div>
    </div>
  );
}

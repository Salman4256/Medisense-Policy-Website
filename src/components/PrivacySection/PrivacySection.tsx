import React, { useState } from 'react';
import { Hash, Check } from 'lucide-react';
import { SectionContent } from '../../data/privacyPolicyContent';
import NoticeCard from '../NoticeCard/NoticeCard';
import './PrivacySection.css';

export interface PrivacySectionProps {
  section: SectionContent;
}

export const PrivacySection: React.FC<PrivacySectionProps> = ({ section }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyAnchor = () => {
    const url = new URL(window.location.href);
    url.hash = section.id;
    navigator.clipboard.writeText(url.toString());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderFormattedText = (text: string) => {
    const parts = text.split(/(https?:\/\/[^\s]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g);
    if (parts.length === 1) return text;

    return parts.map((part, index) => {
      if (part.startsWith('http://') || part.startsWith('https://')) {
        return (
          <a key={index} href={part} target="_blank" rel="noopener noreferrer">
            {part}
          </a>
        );
      }
      if (part.includes('@') && /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(part)) {
        return (
          <a key={index} href={`mailto:${part}`}>
            {part}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <section id={section.id} className="privacy-section" aria-labelledby={`heading-${section.id}`}>
      <div className="section-header">
        <h2 id={`heading-${section.id}`} className="section-title">
          {section.title}
        </h2>
        <button
          type="button"
          onClick={handleCopyAnchor}
          className="anchor-link-btn"
          aria-label={`Copy link to ${section.title}`}
          title="Copy direct section link"
        >
          {copied ? <Check size={16} className="text-emerald" /> : <Hash size={16} />}
        </button>
      </div>

      {section.callout && (
        <NoticeCard
          type={section.callout.type}
          title={section.callout.title}
          message={section.callout.message}
        />
      )}

      <div className="section-body">
        {section.content.map((paragraph, idx) => (
          <p key={idx} className="section-paragraph">
            {renderFormattedText(paragraph)}
          </p>
        ))}

        {section.subsections && section.subsections.length > 0 && (
          <div className="subsections-container">
            {section.subsections.map((sub, sIdx) => (
              <div key={sIdx} className="subsection-block">
                <h3 className="subsection-title">{sub.subtitle}</h3>
                <ul className="subsection-list">
                  {sub.points.map((point, pIdx) => (
                    <li key={pIdx} className="subsection-item">
                      {renderFormattedText(point)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {section.tableData && (
          <div className="table-wrapper">
            <table className="policy-table">
              <thead>
                <tr>
                  {section.tableData.headers.map((header, hIdx) => (
                    <th key={hIdx} scope="col">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.tableData.rows.map((row, rIdx) => (
                  <tr key={rIdx}>
                    {row.map((cell, cIdx) => {
                      const isUrl = cell.startsWith('http://') || cell.startsWith('https://');
                      return (
                        <td key={cIdx}>
                          {isUrl ? (
                            <a
                              href={cell}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="table-external-link"
                            >
                              {cell}
                            </a>
                          ) : (
                            cell
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

export default PrivacySection;

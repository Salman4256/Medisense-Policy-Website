import React, { useState, useEffect } from 'react';
import { List, Search, ChevronRight, X } from 'lucide-react';
import { SectionContent } from '../../data/privacyPolicyContent';
import './TableOfContents.css';

export interface TableOfContentsProps {
  sections: SectionContent[];
  activeId: string;
  onSelectSection?: (id: string) => void;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  sections,
  activeId,
  onSelectSection
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Filter sections based on search query
  const filteredSections = sections.filter((s) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      s.title.toLowerCase().includes(q) ||
      (s.shortTitle && s.shortTitle.toLowerCase().includes(q)) ||
      s.content.some((c) => c.toLowerCase().includes(q))
    );
  });

  // Close mobile drawer when scrolling or resizing
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setIsMobileOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLinkClick = (id: string) => {
    if (onSelectSection) {
      onSelectSection(id);
    }
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Floating Drawer Toggle */}
      <button
        type="button"
        className="mobile-toc-toggle print-hide"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        aria-expanded={isMobileOpen}
        aria-label="Toggle Table of Contents"
      >
        <List size={18} />
        <span>Table of Contents ({sections.length})</span>
      </button>

      {/* Backdrop for mobile drawer */}
      {isMobileOpen && (
        <div
          className="toc-backdrop print-hide"
          onClick={() => setIsMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Main Table of Contents Sidebar */}
      <nav
        className={`toc-sidebar ${isMobileOpen ? 'mobile-open' : ''} print-hide`}
        aria-label="Table of contents"
      >
        <div className="toc-header">
          <div className="toc-title-row">
            <div className="toc-icon-badge">
              <List size={18} />
            </div>
            <div className="toc-title-block">
              <h3 className="toc-heading">Table of Contents</h3>
              <span className="toc-count">{sections.length} Sections</span>
            </div>
          </div>
          {isMobileOpen && (
            <button
              type="button"
              className="toc-close-btn"
              onClick={() => setIsMobileOpen(false)}
              aria-label="Close Table of Contents"
            >
              <X size={20} />
            </button>
          )}
        </div>

        {/* Search / Filter Input */}
        <div className="toc-search-box">
          <Search size={15} className="search-icon" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter sections..."
            className="toc-search-input"
            aria-label="Filter policy sections"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="clear-search-btn"
              aria-label="Clear filter"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Section List */}
        <div className="toc-list-container">
          {filteredSections.length === 0 ? (
            <div className="toc-no-results">
              <p>No matching sections found for "{searchQuery}"</p>
            </div>
          ) : (
            <ul className="toc-list">
              {filteredSections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <li key={section.id} className="toc-item">
                    <a
                      href={`#${section.id}`}
                      onClick={() => handleLinkClick(section.id)}
                      className={`toc-link ${isActive ? 'active' : ''}`}
                      aria-current={isActive ? 'location' : undefined}
                    >
                      <span className="toc-link-text">
                        {section.shortTitle || section.title}
                      </span>
                      <ChevronRight size={14} className="toc-arrow" />
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default TableOfContents;

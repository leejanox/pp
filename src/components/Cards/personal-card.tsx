import '@styles/PersonalCard.scss'
import React, { useState } from 'react'
import { Github } from 'lucide-react'
import { Link } from 'react-router-dom'

interface PersonalCardProps {
  title: string
  description: string
  image: string
  link: string
  demoLink: string
  tags: string[]
  modalContent?: React.ReactNode
}

const PersonalCard: React.FC<PersonalCardProps> = ({ title, description, image, link, demoLink, tags, modalContent }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="personal-card" onClick={() => setOpen(true)}>
        <div className="personal-card__image">
          <img src={image} alt={title} />
        </div>
        <div className="personal-card__content">
          <h3>{title}</h3>
          <p className="personal-card__description">{description}</p>
          <div className="personal-card__tags">
            {tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
        <div className="personal-card__footer">
          <Link to={demoLink} target="_blank" className="personal-card__link" onClick={(e) => e.stopPropagation()}>
            <span>Preview</span>
          </Link>
          <Link to={link} target="_blank" className="personal-card__link" onClick={(e) => e.stopPropagation()}>
            <Github size={16} />
            <span>View on GitHub</span>
          </Link>
        </div>
      </div>

      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal__close" onClick={() => setOpen(false)}>×</button>
            <div className="modal__content">
              {modalContent || <p>No detailed content provided.</p>}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PersonalCard
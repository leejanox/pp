import React, { useState } from 'react'
import '@styles/ProjectCard.scss'
import { Github } from 'lucide-react'
import { Link } from 'react-router-dom'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
  tags: string[]
  modalContent?: React.ReactNode
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link, tags, modalContent }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="project-card" onClick={() => setOpen(true)}>
        <div className="project-card__image">
          <img src={image} alt={title} />
        </div>
        <div className="project-card__content">
          <h3>{title}</h3>
          <p className="project-card__description">{description}</p>
          <div className="project-card__tags">
            {tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
        <div className="project-card__footer">
          <Link to={link} target="_blank" className="project-card__link" onClick={(e) => e.stopPropagation()}>
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

export default ProjectCard
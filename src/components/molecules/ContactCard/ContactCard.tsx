import React from 'react';
import styles from './ContactCard.module.scss';
import type { Contact } from '../../../types/Contact';
import { BASE_URL_IMAGE } from '../../../constants';

import { FaGithub, FaLinkedin, FaTelegramPlane } from 'react-icons/fa';
import { BsEnvelopeFill } from 'react-icons/bs';

interface ContactCardProps {
  person: Contact;
}

const ContactCard: React.FC<ContactCardProps> = ({ person }) => {
  const imageUrl = `${BASE_URL_IMAGE}/img/contacts/${person.photo}`;

  return (
    <article
      className={styles.card}
      aria-label={`Contact card for ${person.firstName} ${person.lastName}`}
    >
      <div className={styles.photoContainer}>
        <img
          src={imageUrl}
          alt={`${person.firstName} ${person.lastName}`}
          className={styles.photo}
        />
      </div>

      <div className={styles.info}>
        <h3 className={styles.name}>
          {person.firstName} {person.lastName}
        </h3>

        {person.status && <p className={styles.status}>{person.status}</p>}
        <p className={styles.about}>{person.about}</p>
        <div className={styles.links}>
          {person.github && (
            <a
              href={person.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
              aria-label={`GitHub profile of ${person.firstName}`}
            >
              <FaGithub className={styles.icon} />
            </a>
          )}

          {person.email && (
            <a
              href={`mailto:${person.email}`}
              className={styles.iconLink}
              aria-label={`Send an email to ${person.firstName}`}
            >
              <BsEnvelopeFill className={styles.icon} />
            </a>
          )}

          {person.linkedin && (
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
              aria-label={`LinkedIn profile of ${person.firstName}`}
            >
              <FaLinkedin className={styles.icon} />
            </a>
          )}

          {person.telegram && (
            <a
              href={person.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
            >
              <FaTelegramPlane className={styles.icon} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ContactCard;

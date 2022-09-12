import React from 'react';
import { Link } from 'react-router-dom';
import './error404.css';

/** Création page erreur 404
 * @return {JSX.Element}
 */

const Error404 = () => {
  return (
    <main>
      <section className='error__section'>
        <h1 className='error__title'>404</h1>
        <p className='error__content'>
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to='/'>
          <p className='error__link'>Retourner sur la page d’accueil</p>
        </Link>
      </section>
    </main>
  );
};

export default Error404;

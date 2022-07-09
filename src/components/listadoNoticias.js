import React from 'react';
import Noticia from './noticias';
import PropTypes from 'prop-types'

const ListadoNoticias = ({noticias}) =>  ( 
        <div className="row">
            {noticias.map(noticia => (
                <Noticia 
                    key={noticia.url}
                    noticia={noticia}
                />
            ))}
        </div>
);

ListadoNoticias.propTypes = {
    noticias: PropTypes.array.isRequired
}
 
export default ListadoNoticias
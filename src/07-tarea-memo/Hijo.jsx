import React, { useMemo } from 'react'
import { memo } from 'react'

export const Hijo = memo(({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ')
    return (
        <button
            className="btn btn-info mr-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})

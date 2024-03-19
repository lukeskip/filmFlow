
'use client'

const Cards = ({values}) => {
    return (
        <div>
            
            {
                values.map((elem, i) => {
                    return(
                        <div key={i}>
                            <div>
                                <p>Mostrando cards</p>
                                <p >Elemento: {elem}</p>
                            </div>
                        </div>
                    )}
                )
            }
        </div>
    )
}

export default Cards;
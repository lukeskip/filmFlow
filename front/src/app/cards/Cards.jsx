
'use client'

const Cards = ({values}) => {
    return (
        <div>
            {
                values.map((elem, i) => {
                    return(
                        <div key={i}>
                            <div>
                                <br />
                                <p>Id: {elem.id}</p>
                                <p >Name: {elem.title}</p>
                                <br />
                            </div>
                        </div>
                    )}
                )
            }
        </div>
    )
}

export default Cards;

'use client'

const Cards = ({values}) => {
    return (
        <div className="container">
            {
                values.map((elem, i) => {
                    return(
                        <div>
                            <div key={i}>
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
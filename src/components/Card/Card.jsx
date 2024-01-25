function Card(){
    return (
        <>
          <div className = "card">
            <h2> Rick Sanchez </h2>

            <div className="bio">
                <h3> Status: Vivo </h3>
                <h3>Espécie: Humana </h3>
                <h3> Origem: Terra C-137 </h3>   
            </div>

            <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Rick Sanchez" />
          </div>
        </>
    )
}

export default Card
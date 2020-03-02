


const user1 = {
    // name: 'Alexander Gonzalez',
    username: 'AlexanderGonz',
    country: 'España',
    social: {
        facebook: 'Alexander_Gonzalez',
        twitter: '03_Orion'
    }
}

const saluda = (user) => {
    const { name = "Alexander", country: pais, social: {twitter:tw} } = user
    console.log(
        `Hola soy ${name} vivo en ${pais} y mi twiiter es ${tw}`
    )

}

saluda(user1)
const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async function(db) {
    // inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-22.3354166",
        lng: "-47.43294419",
        name: 'Lar dos meninos',
        about: 'Presta assistência a crianças de 06 a 15 anos que se encontram em situação de risco e/ou vulnerabilidade social.',
        whatsapp: "19378338",    
        images: [
            "https://images.unsplash.com/photo-1562790519-004d066ea916?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1583526362016-c3137c71cc3a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF",
        ].toString(),
        instruction: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "0"
    })

    // consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages);

    // // consultar somente um orphanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    console.log(orphanage);

    // // deletar dado da tabela
    // console.log(await db.run('DELETE FROM orphanages WHERE id = "4"'))
})
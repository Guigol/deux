import fastify from 'fastify'

// Création d'une application fastify
const app = fastify()

// Écoute un port et un host
app.listen({ port: 5353, host: '127.0.0.1' }, () => {
    // Affiche un message dans la console nous indiquant que le serveur est démarré
    console.log("Le serveur http est prêt sur l'address : http://127.0.0.1:5353")
  })

// On utilise l'application fastify pour ajouter des routes. Chaque route possède une méthode HTTP et
// un chemin (Resource, Path) :
app.get('/', () => {
    return 'Bonjour les amis'
  })

 // Ici nous déclarons une route « dynamique ». Et nous devons spécifier via un générique
// le type des nos params :
app.get<{ Params: { name: string } }>('/bonjour/:name', request => {
    // Nous utilisons la request pour récupérer le contenu du paramètre
    // « name » :
    const name = request.params.name
  
    return `Bonjour ${name}`
  }) 

 /**
 * On déclare le type de nos params
 */
type SalutParams = {
    name: string
  }
  
  /**
   * On déclare la route :
   */
  app.get<{ Params: SalutParams }>('/bonjour/:name', request => {
    // Nous utilisons la request pour récupérer le contenu du paramètre
    // « name » :
    const name = request.params.name
  
    return `Bonjour ${name}`
  }) 

 
  /**
   * On déclare la route :
   */
  app.get<SalutRoute>('/bonjour/:name', request => {
    // Nous utilisons la request pour récupérer le contenu du paramètre
    // « name » :
    const name = request.params.name
  
    return `Bonjour ${name}`
  })

 
  /**
   * On déclare un type pour notre route
   */
  type SalutRoute = {
    Params: SalutParams
  }
  
  /**
   * On déclare la route :
   */
  app.get<SalutRoute>('/bonjour/:name', request => {
    // Nous utilisons la request pour récupérer le contenu du paramètre
    // « name » :
    const name = request.params.name
  
    return `Bonjour ${name}`
  })

  
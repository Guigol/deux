import fastify from 'fastify'

/**
 * @module calculatrice
 *
 * @description
 *  Contient la correction de l'exercice de calculatrice.
 */

// Nous allons tout d'abord créer une application fastify
const app = fastify()


/**
 * Représente une chose de à faire
 */
type TodoItem = {
    id: string | number
    title: string
    done: boolean
  }
  
  /**
   * Réprésente une liste de chose à faire
   */
  type TodoList = TodoItem[]
  
  /**
   * Contient la base de données
   */
  const todoList: TodoList = [
    {
      id: 1,
      title: 'Acheter du chocolat',
      done: false,
    },
  ]
  
  // Route permettant de calculer 2 entiers
  app.get('/todos', () => todoList)
   
  
  
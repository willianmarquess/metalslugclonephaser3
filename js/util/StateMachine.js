const stateConfig = {
    onEnter: function(){return},
    onUpdate: function(dt){return},
    onExit: function(){return} 
}

export default class StateMachine {

    /**
     *  @param {string} name
     *  @param {SpriteEntity} context
    */
    constructor(context, name) {
        this.context = context
        this.name = name
        this.currentState = null
        this.previousState = null
        this.states = new Map()
    }

    /**
     *  @param {string} name
     *  @param {stateConfig} config
    */
     addState(name, config = stateConfig)
     {
         //adiciona um estado, passando o nome, e passando os callbacks no mesmo contexto
         this.states.set(name, {
             name,
             onEnter: (config.onEnter) ? config.onEnter.bind(this.context) : () => {},
             onUpdate: (config.onUpdate) ? config.onUpdate.bind(this.context) : () => {},
             onExit: (config.onExit) ? config.onExit.bind(this.context) : () => {}
         })
 
         return this
     }

    isCurrentState(name){
        if(!this.currentState){
            return false
        }

        return this.currentState.name === name
    }

    setState(name)
	{
        //se tentar usar um estado desconhecido... return
		if (!this.states.has(name))
		{
			console.warn(`unknown state : ${name}`)
			return
		}

        //se estou no mesmo estado... return
		if (this.isCurrentState(name))
		{
			return
		}

		console.log(`[StateMachine (${this.name})] change from ${(this.currentState) ? this.currentState.name : 'none' } to ${name}`)

        //se ja estou em um estado e tenho o callback
        //exit, então chamo para finalizar
		if (this.currentState && this.currentState.onExit)
		{
			this.currentState.onExit()
		}

        //estado atual se torna estado anterior
		this.previousState = this.currentState
        //adiciono um novo estado atual
		this.currentState = this.states.get(name)

        //se tive funcao enter, chama
		if (this.currentState.onEnter)
		{
			this.currentState.onEnter()
		}

	}

    update(dt)
	{
        //se existir função de update e tiver um estado
        //executa
		if (this.currentState && this.currentState.onUpdate)
		{
			this.currentState.onUpdate(dt)
		}
	}

}
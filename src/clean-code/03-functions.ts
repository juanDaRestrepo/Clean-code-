(() => {

    function getMovieById( id: string ) {
        console.log({ id });
    }

    function getMovieActorsInfoById( movieId: string ) {
        console.log({ movieId });
    }
   
    function getActorBiographyById( id: string ) {
        console.log({ id });
    }

    interface movieInformation {
        title:       string; 
        description: string; 
        rating:      number; 
        cast:        string[];
    }
    // Crear una película
    function createMovie({title, description, rating , cast }: movieInformation ) {
        console.log( title, description, rating, cast );
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }

    //Continuar
    /* const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        let result;
        if ( isDead ) {
            result = 1500;
        } else {
            if ( isSeparated ) {
                result = 2500;
            } else {
                if ( isRetired ) {
                    result = 3000;
                } else {
                    result = 4000; 
                }
            }
        }
        
        return result;
    }
 */
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        
        if ( isDead ) return 1500;
        if ( isSeparated ) return 2500;
        if( isRetired ) return 3000;
        return 4000;
    }


})();
Setup
    npx create-react-app react-store-thunk
        npm i sass      npm i react-router-dom      npm i firebase
        npm i styled-components
        npm i redux react-redux redux-logger
        npm i reselect  npm i redux-persist
        npm i redux-thunk
    npm start     

Steps to merging branch into master
    $ git checkout master
        Switched to branch 'master'
    $ git merge feature/featured-products
        Merge made by the 'recursive' strategy

featured
    featured-list
        call firebase getFeatured
        useEffect   getData     
        store: dispatch GET_FEATURED
    featured-item
        buttons:    addToCart
        store:  SET_FEATURED
    add styles



    


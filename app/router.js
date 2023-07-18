const { Router, urlencoded } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/champions', (req, res) => {
  const { displayName: nameToFind } = req.params
  const { champions } = req.app.locals;
  

  let foundChampions = champions.find((champion) => champion.name === nameToFind)


  if(foundChampions) {
    return res.render('champions', { champion: foundChampions})
  }
  res.render('champions');
})

router.get('/champions/:championName', (req, res) => {
  const nameToFind  = req.params.championName
  const { champions } = req.app.locals;


champions.forEach(champion => {
  if (nameToFind === champion.displayName){
     clickedChamp = champions.find((champion) => champion.displayName === nameToFind)

    return res.render('champion', {clickedChamp, champions})
  }
})

res.render('champion')
 
})


router.get('/maps', (req, res) =>{

  const { displayMapName: mapNameToFind } = req.params
  const { maps } = req.app.locals;



  let foundMaps = maps.find((map) => map.name === mapNameToFind)

  if(foundMaps) {
    return res.render('maps', { map: foundMaps})
  }
  res.render('maps');

})


router.get ('/maps/:mapName', (req, res) => {
    const mapToFind  = req.params.mapName
    const { maps } = req.app.locals;
  
  
  maps.forEach(map => {
    if (mapToFind === map.displayName){
       clickedMap = maps.find((map) => map.displayName === mapToFind)
      return res.render('map', {clickedMap, maps})
    }
  })
  
  res.render('champion')
   
  })
  




module.exports = router;
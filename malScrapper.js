const malScraper = require('mal-scraper')
const ObjectsToCsv = require('objects-to-csv')

const username = 'WinterLover'
const after = 0
const type = 'anime' // can be either `anime` or `manga`

// Get you an object containing all the entries with status, score... from this user's watch list
malScraper.getWatchListFromUser(username, after, type)
  .then((data) => {
    (async () => {
      console.log(data)
      const csv = new ObjectsToCsv(data);
      
      // Save to file:
      await csv.toDisk('./lolilist.csv');
      
      // Return the CSV file as string:
      // console.log(await csv.toString());
    })();
  })
  .catch((err) => console.log(err))
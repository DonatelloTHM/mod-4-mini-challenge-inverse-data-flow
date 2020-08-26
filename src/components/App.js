import React from 'react';
import Header from './Header';
import SpiceList from './SpiceList';
import NewSpice from './NewSpice';

// spice info taken from spicejungle.com
const spices = [
  {
    "id": 1,
    "title": "Allspice Berries, Whole (Jamaican)",
    "image": "https://www.spicejungle.com/pub/media/catalog/product/cache/3db4d5004662ba3673dd7a19a8603593/w/h/whole-allspice-berries.jpg",
    "description": "Allspice has a curious name, doesn't it? Allspice. It's because it smells like so many other spices all smashed into one. Cinnamon, clove, cardamom.... all the best in one little berry!",
    "notes": "Pungent, Sweet, Warm & Earthy",
    "rating": 3.5
  },
  {
    "id": 10,
    "title": "Caraway Seeds",
    "image": "https://www.spicejungle.com/pub/media/catalog/product/cache/3db4d5004662ba3673dd7a19a8603593/c/a/caraway_seed.jpg",
    "description": "A crusty grandmother. She walked fifteen miles to school every day. Uphill! Both ways! In the snow! She’s cantankerous, but then she has those moments where she makes you tea and homemade bread and enlightens you about the little things in life.",
    "notes": "Bitter or Astringent, Sweet",
    "rating": 2
  },
  {
    "id": 12,
    "title": "Cardamom Pods, Black",
    "image": "https://www.spicejungle.com/pub/media/catalog/product/cache/3db4d5004662ba3673dd7a19a8603593/w/h/whole_black_cardamon.jpg",
    "description": "The smell of yellowed recipe books falling apart from too much use and ancient stains.",
    "notes": "Citrus, Pungent, Smoky, Warm & Earthy",
    "rating": 4.5
  },
  {
    "id": 21,
    "title": "Celery Seed",
    "image": "https://www.spicejungle.com/pub/media/catalog/product/cache/3db4d5004662ba3673dd7a19a8603593/c/e/celery-seed.jpg",
    "description": "Celery seed is that guy at the party who looks all shy and timid but when you talk to him lets loose every opinion, swear word, and colorful anecdote known to man. Celery seeds appear timid, but once they let loose you need to watch out.",
    "notes": "Bitter or Astringent, Pungent",
    "rating": 1.5
  },
  {
    "id": 45,
    "title": "Garam Masala",
    "image": "https://www.spicejungle.com/pub/media/catalog/product/cache/3db4d5004662ba3673dd7a19a8603593/g/a/garam_masala.jpg",
    "description": "Garam masala spice mix is characteristic of pop music or TV shows with too much twee supernaturalism. It might be a bit passe’, but you love it and perhaps you’re not sure why. Still, it’s rather astonishing so who cares?",
    "notes": "Warm & Earthy",
    "rating": 4.5
  },
  {
    "id": 78,
    "title": "Onion, Minced",
    "image": "https://www.spicejungle.com/pub/media/catalog/product/cache/3db4d5004662ba3673dd7a19a8603593/m/i/minced-onion.jpg",
    "description": "We all love that friend that always arrives on time and doesn’t flood your Facebook feed with too many inane game invites. Minced onion is that friend, reliable and always welcome.",
    "notes": "Pungent",
    "rating": 3
  },
  {
    "id": 69,
    "title": "Mustard Powder",
    "image": "https://www.spicejungle.com/pub/media/catalog/product/cache/3db4d5004662ba3673dd7a19a8603593/m/u/mustard-powder.jpg",
    "description": "Someone once must have looked out over a golden field of mustard flowers and said, “I’m gonna eat those somehow.” Thank heaven they did or this fierce, dry mustard powder wouldn’t be with us today.",
    "notes": "Bitter or Astringent",
    "rating": 4
  },
  {
    "id": 66,
    "title": "Long Pepper",
    "image": "https://www.spicejungle.com/pub/media/catalog/product/cache/3db4d5004662ba3673dd7a19a8603593/l/o/long_pepper.jpg",
    "description": "The hipster pepper if there ever was one. All sleeve tattoos and a waxed mustache. It lives in the Capitol Hill district of Seattle by way of India and Indonesia.",
    "notes": "Hot",
    "rating": 4
  },
  {
    "id": 57,
    "title": "Horseradish Powder",
    "image": "https://www.spicejungle.com/pub/media/catalog/product/cache/3db4d5004662ba3673dd7a19a8603593/h/o/horseradish-powder_1.jpg",
    "description": "A shady root of questionable background as it is neither a horse nor a radish.",
    "notes": "Hot, Smoky",
    "rating": 1
  },
]

// function component
class App extends React.Component {
  state = {
    spices: spices
  }

  // TODO: use me to add a new spice when the NewSpice form submits
  addNewSpice = newSpice => {

    this.setState(prevState => {
      const updatedSpices = [newSpice, ...prevState.spices]

      return {
        spices: updatedSpices
      }
    })
  }

  render() {
    return (
      <>
        <Header spiceCount={this.state.spices.length} />
        <main>
          <NewSpice newSpiceHandler={this.addNewSpice}/>
          <SpiceList spices={this.state.spices} />
        </main>
      </>
    );
  }
}

export default App;

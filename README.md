# README
[ReadBooks](https://readbooksapp.herokuapp.com)
[WikiLink](https://github.com/tiffanyw-hu/ReadBooks/wiki)

ReadBooks is a cataloging platform that allows users to comment, organize, and discover books. Backend development is built using Ruby on Rails, while the frontend relies on React Redux.

## Key Features 

+ Secure user authentication 
+ Custom bookshelves for personal organization 
   + Users begin with three main shelves: Read, Currently Reading, Want to Read
   + Users are able to organize books onto their shelves by naming their own shelf
   + Shelves are able to be deleted based on their own 
   + Books can be shelved based on the user's choice of shelf
+ Library of books to peruse 
   + Book details and its reviews are easily accessible via the index
+ Write your own review
   + Users are able to write, edit, and delete their thoughts on a particular book
   + A book detail will display all the reviews from the community of users on the application 

## Functionality 
ReadBooks was designed with components that allowed minimal user navigation for maximum accessibility. A highlighted features will be displayed here:

#### Browsing Books from homepage 
For this application, users are easily able to access between their bookshelves and book index by having a shelf sidebar always accessible as it is an independent component with its own state. When users are perusing books, whether it is from their shelf or through the library, only an individual's component slice of state is being updated.
![browse](http://res.cloudinary.com/dqj3kgpoj/image/upload/c_scale,w_760/v1523654668/first.gif)

#### Adding books to a bookshelf 
Adding a book to a bookshelf is component on the book details page that allows users to add or remove books to their shelves. A book is not able to be in multiple status of the main three: Currently Reading, Read, and Want To Read. This is achieved by having a user shelve a book with an onClick function, which toggles the value of the default state. When a shelf is clicked and does not have a value of "active-shelf", it will delete the shelvings of the book on the other two main shelves and create a shelving on the shelf that has been clicked. This avoids the issue of a book simultaneously being in one of the main three shelves.

```
  constructor(props) {
    super(props);
    let defaultState = {"Read": "",
      "Currently Reading": "",
      "Want to Read": "" }
    defaultState[this.props.readingStatus] = "active-shelf"
    this.state = defaultState
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.mainShelfIds = {"Read": this.props.userShelves[0],
      "Currently Reading": this.props.userShelves[1],
      "Want to Read": this.props.userShelves[2] }
    let chosenShelf = e.target.getAttribute("data-shelfname")
    let newState = {"Read": "",
      "Currently Reading": "",
      "Want to Read": "" }
    if (this.state[chosenShelf] === "active-shelf") {
      this.props.toggleReadingStatus("Want To Read")
      this.deleteTheShelving(chosenShelf, this.mainShelfIds);
    } else {
      newState[chosenShelf] = "active-shelf"
      this.props.toggleReadingStatus(chosenShelf)
      this.mainShelfShelving(chosenShelf, this.mainShelfIds);
    }
    this.setState(newState)
  }
 ```
 ![third](http://res.cloudinary.com/dqj3kgpoj/image/upload/c_scale,w_760/v1523654681/third.gif)
 
 #### Adding a custom shelf 
 Users are able to add a custom shelf, which is a separate component from the three main shelves. The ability to create their own shelf and sort books onto the shelf is a functionality that allows users to catalogue books according to their personal preferences. 

![second](http://res.cloudinary.com/dqj3kgpoj/image/upload/c_scale,w_760/v1523654675/second.gif)

#### Wrting a review 
When users write a review, they are able to see their review render on the page without the page refreshing. When submitting an edited, review, users will be able see their changes right away. This is accomplished by having the user's review having it's own slice of state, so any updates will render right away.
![fourth](http://res.cloudinary.com/dqj3kgpoj/image/upload/c_scale,w_760/v1523656028/fourth.gif)

## Future Direction/Features 
Future updates will include: 
+ Users will be given the option to create a shelf when they want to shelve a book 
+ Users will be able to edit the name of their shelf 
+ User profiles(including user photo and recent activity)
+ Community groups 
+ Users will be able to see the name of the shelf in the individual shelf show page


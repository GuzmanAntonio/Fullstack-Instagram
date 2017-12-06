import React, {Component} from 'react'
import $ from 'jquery'
import IgPosts from './IgPosts'

class App extends Component {
  state = {
    caption: undefined
  }

  componentDidMount() {
    this.loadPostFromServer()
  }

  loadPostFromServer = () => {
    $.ajax({
      url:'/api/instaGram',
      method: 'GET'
    }).done((response) => {
      console.log(response)
      this.setState({post: response.post})
    })
  }

  submitPostToServer = () => {
    const newPost = {
      title: this.state.title,
      img: this.state.img,
      caption: this.state.caption
    }
    $.ajex({
      url: 'api/instaGram',
      method: 'POST',
      data: newPost
    }).done((response) => {
      console.log(response)
        this.loadPostFromServer()
    })
  }
}

updateCaption = (e) => this.setState({title: e.target.value})

render(){
  return(
    <div>
      <Header />
      <form>
        <label>Insert Caption</label>
        <input type='text' onChange={this.updateCaption} />

        <button type='button' onClick={this.submitPostToServer}>Submit</button>
      </form>
    </div>
  )
}

export default App
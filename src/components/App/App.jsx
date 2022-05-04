import axios from "axios"
import React, { Component } from "react"
import { Searchbar } from 'components/Searchbar/Searchbar'
import { Container } from 'components/App/App.styled'
import { ImageGallery } from 'components/ImageGallery/ImageGallery'
import { Button } from 'components/Button/Button'


axios.defaults.baseURL = "https://pixabay.com/api/"

export class App extends Component {

  state = {
    images: [],
    currentPage: 1,
    keyWord: ''
  }

  fetchUrl = async (keyWord) => {
    const images = await axios.get(`?key=25354939-b34ef3161dfabf3cda0874337&q=${keyWord}&image_type=photo&orientation=horizontal&per_page=12&page=${this.state.currentPage}`);
    this.setState({
      images: images.data.hits,
      currentPage: 1,
      keyWord: keyWord
    })
  }

  loadMore = async () => {
    const response = await axios.get(`?key=25354939-b34ef3161dfabf3cda0874337&q=${this.state.keyWord}&image_type=photo&orientation=horizontal&per_page=12&page=${this.state.currentPage + 1}`);
    const newImages = await response.data.hits;

    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
      images: [...prevState.images, ...newImages]
    }))
  }

  componentDidMount () {
    this.fetchUrl('')
  } 

  render() {
    return (
      <Container>
        <Searchbar onSearchSubmit={this.fetchUrl}></Searchbar>
        <ImageGallery images={this.state.images}></ImageGallery>
        {(this.state.images.length !== 0) && <Button loadMore={this.loadMore}></Button>} 
      </Container>
  )}
};

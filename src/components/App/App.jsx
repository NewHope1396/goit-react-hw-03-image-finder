import axios from "axios"
import React, { Component } from "react"
import { Searchbar } from 'components/Searchbar/Searchbar'
import { Container } from 'components/App/App.styled'
import { ImageGallery } from 'components/ImageGallery/ImageGallery'
import { Button } from 'components/Button/Button'
import { MySpiner } from 'components/MySpiner/MySpiner'
import { Modal } from 'components/Modal/Modal'


axios.defaults.baseURL = "https://pixabay.com/api/"

export class App extends Component {

  state = {
    images: [],
    currentPage: 1,
    keyWord: '',
    loading: false,
    selectedImage: null
  }

  fetchImages = async () => {
    const { keyWord, currentPage } = this.state;
    const images = await axios.get(`?key=25354939-b34ef3161dfabf3cda0874337&q=${keyWord}&image_type=photo&orientation=horizontal&per_page=15&page=${currentPage}`);
    return images.data.hits;
  }

  onSubmit = (keyWord) => {
    this.setState({
      currentPage: 1,
      keyWord: keyWord,
      loading: true,
    })
  }

  componentDidUpdate (_, prevState) {
    if (prevState.keyWord !== this.state.keyWord) {
      this.fetchImages().then(
        images => this.setState({images, loading: false})
      );
      return
    }

    if (this.state.currentPage !== prevState.currentPage && this.state.currentPage !== 1) {
      this.fetchImages().then(
        newImages =>
          this.setState((prevState) => {
          return {
            images: [...prevState.images, ...newImages],
            loading: false
          }})
      )
    }
  }

  loadMore = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
      loading: true,
    }))
  }

  closeModal = () => {
  this.setState({
      selectedImage: null
    })
  }

  selectImage = (image) => {
    this.setState(() => {
      return { selectedImage: image }
    })
  }

  render() {

    const { loading, images, selectedImage } = this.state;

    return (
      <Container>
        <Searchbar onSearchSubmit={this.onSubmit}></Searchbar>
        {!loading && <ImageGallery images={images} onImageClick={this.selectImage}></ImageGallery>}
        {loading && <MySpiner></MySpiner>}
        {(images.length !== 0) && !loading && <Button loadMore={this.loadMore}></Button>} 
        {selectedImage && <Modal image={selectedImage} closeModal={this.closeModal}></Modal>}
      </Container>
  )}
};

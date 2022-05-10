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
    showModal: false,
    selectedImage: null
  }

  fetchUrl = async (keyWord) => {
    this.setState({loading:true})
    const images = await axios.get(`?key=25354939-b34ef3161dfabf3cda0874337&q=${keyWord}&image_type=photo&orientation=horizontal&per_page=15&page=${this.state.currentPage}`);
    this.setState({
      images: images.data.hits,
      currentPage: 1,
      keyWord: keyWord,
      loading: false,
    })
  }

  loadMore = async () => {
    this.setState({loading: true})
    const response = await axios.get(`?key=25354939-b34ef3161dfabf3cda0874337&q=${this.state.keyWord}&image_type=photo&orientation=horizontal&per_page=15&page=${this.state.currentPage + 1}`);
    const newImages = await response.data.hits;

    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
      images: [...prevState.images, ...newImages],
      loading: false,
    }))
  }

  closeModal = () => {
  this.setState({
      showModal: false,
    })
  }

  openModal = () => {
    this.setState({
      showModal: true,
    })
  }

  selectImage = (image) => {
    this.setState(() => {
      return { selectedImage: image }
    });
    this.openModal();
  }

  componentDidMount () {
    this.fetchUrl('')
  } 

  render() {

    const { loading, images, showModal, selectedImage } = this.state;

    return (
      <Container>
        <Searchbar onSearchSubmit={this.fetchUrl}></Searchbar>
        {!loading && <ImageGallery images={images} onImageClick={this.selectImage}></ImageGallery>}
        {loading && <MySpiner></MySpiner>}
        {(images.length !== 0) && !loading && <Button loadMore={this.loadMore}></Button>} 
        {showModal && <Modal image={selectedImage} closeModal={this.closeModal}></Modal>}
      </Container>
  )}
};

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchingArtworkDetail } from '../redux/actionCreators';

class ArtworkPage extends Component {
  componentDidMount() {
    // debugger
    const artworkId = this.props.match.params.id
    this.props.fetchingArtworkDetail(artworkId)
  }

  render() {
    // debugger
    return (
      this.props.currentArtwork && this.props.currentArtwork.ObjectID === parseInt(this.props.match.params.id) ? 
      <div>
        <img src={this.props.currentArtwork.Images[0].ImageURLs.Large} alt={`${this.props.currentArtwork.Title}`}/>
        <p>{this.props.currentArtwork.Title}</p>
        <p>{this.props.currentArtwork.Creators[0].ConcatDisplayName}</p>
        <p>{this.props.currentArtwork.DateText}</p>
        <p>{this.props.currentArtwork.Medium}</p>
        <p>{this.props.currentArtwork.Dimensions}</p>
        <p>{this.props.currentArtwork.Description}</p>
      </div> : null
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentArtwork: state.currentArtwork
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchingArtworkDetail: (artworkId) => { dispatch(fetchingArtworkDetail(artworkId))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtworkPage);
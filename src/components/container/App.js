import React, { Component } from 'react'
import ErrorBoundary from './../other/ErrorBoundary'
import Page from './Page'

const pages = [
  'Recipes',
  'Ingredients'
]

export default class App extends Component {
  constructor () {
    super();
    this.state = {
      currentPage: pages[0],
      currentPageIndex: 0,
      pages
    }
    this.handleChangePage = this.handleChangePage.bind(this)
  }

  handleChangePage (index) {
    this.setState(prevState => ({
      currentPageIndex: index,
      currentPage: pages[index]
    }))
  }

  render () {
    const { currentPage, onChangePage } = this.state;
    const { handleChangePage } = this;
    return(
      <ErrorBoundary>
        <Page
          page={currentPage}
          tabs={pages}
          onChangePage={handleChangePage}
        />
      </ErrorBoundary>
    );
  }
}

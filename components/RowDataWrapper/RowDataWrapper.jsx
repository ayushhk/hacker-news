import React from "react";
import Link from "next/link";
import Header from "../Header/Header";
import RowData from "../RowData/RowData";
class RowDataWrapper extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pageId: 0
    };
  }

  clickMore = () => {
    this.setState(prevState => {
      return { pageId: prevState.pageId + 1 };
    });
  };
  
  render() {
    const { data, activeTop, activeNew, path } = this.props;
    const { pageId } = this.state;
    const rowItem =
      data &&
      data.hits &&
      data.hits.map(item => {
        return (
          <RowData
            id={item.objectID}
            comments={item.num_comments}
            points={item.points}
            title={item.title}
            storyUrl={item.story_url}
            author={item.author}
            created={item.created_at}
            storyTitle={item.story_title}
            url={item.url}
            text={item.story_text}
          />
        );
      });
    return (
      <div className="mainContainer">
        <Header activeTop={activeTop} activeNew={activeNew} />
        <div className="rowContainer">{rowItem}</div>
        <div className="linkWrapper">
          <Link href={{ pathname: path, query: { page: pageId + 1 } }}>
            <a className="more" onClick={this.clickMore}>
              More
            </a>
          </Link>
        </div>
      </div>
    );
  }
}
export default RowDataWrapper;

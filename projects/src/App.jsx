import Accordian from "./components/accordian";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import RandomColor from "./components/random-color";
import StartRating from "./components/star-rating";
import TreeView from "./components/tree-active";
import menus from "./components/tree-active/data";
function App() {
  return (
    <>
      {/* <Accordian /> */}

      {/* <RandomColor /> */}

      {/* <StartRating noOfStarts={10} /> */}

      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}
      {/* <LoadMoreData /> */}

      <TreeView menus={menus} />
    </>
  );
}

export default App;

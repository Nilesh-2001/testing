import ListGroup from "./components/ListGroup";
//import Alert from "./components/Alert";

function App() {
  let items = ["Giridih", "Dhanbad", "Wasseypur", "Jamshedpur", "Ranchi"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />  
    </div>
  );
  

}
//function App(){
  
//}
export default App;

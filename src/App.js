import "./App.css";
import { Container } from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";

function App() {
  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance" value="2590.33" size="small" />
      <DisplayBalances />
      <MainHeader title="History" type="h3" />
      <EntryLine descripton="income" value="$45" />
      <EntryLine descripton="expense" value="$20" isExpense />
      <MainHeader title="Add new transactions" type="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;

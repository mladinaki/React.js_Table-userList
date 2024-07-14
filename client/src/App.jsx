import "./styles.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Footer from "./components/Footer";
import UserListTable from "./components/UserListTable";

function App() {
    return (
        <div>
            <Header />
            <main className="main">
                <section className="card users-container">

                    <UserListTable />
                </section>
            </main>
            <Footer />
        </div>
    );
}
export default App;

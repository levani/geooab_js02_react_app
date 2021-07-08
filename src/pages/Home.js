import axios from "axios";
import { useQuery } from "react-query";
import Post from "../components/Post";
import Sidebar from "../components/Sidebar";

function fetchPosts() {
  return axios.get('https://jsonplaceholder.typicode.com/posts');
}

export default function Home() {
  const { isLoading, data } = useQuery('posts', fetchPosts);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="py-5 bg-light border-bottom mb-4">
          <div className="container">
              <div className="text-center my-5">
                  <h1 className="fw-bolder">Welcome to Blog Home!</h1>
                  <p className="lead mb-0">A Bootstrap 5 starter layout for your next blog homepage</p>
              </div>
          </div>
      </div>
      <div className="container">
          <div className="row">
              <div className="col-lg-8">
                  {
                    data.data.map(item => (
                      <Post
                        id={item.id}
                        title={item.title}
                        description={item.body}
                        date="January 1, 2021"
                        image="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                      />
                    ))
                  }
                  
                  <nav aria-label="Pagination">
                      <hr className="my-0" />
                      <ul className="pagination justify-content-center my-4">
                          <li className="page-item disabled"><a className="page-link" href="#" tabindex="-1" aria-disabled="true">Newer</a></li>
                          <li className="page-item active" aria-current="page"><a className="page-link" href="#!">1</a></li>
                          <li className="page-item"><a className="page-link" href="#!">2</a></li>
                          <li className="page-item"><a className="page-link" href="#!">3</a></li>
                          <li className="page-item disabled"><a className="page-link" href="#!">...</a></li>
                          <li className="page-item"><a className="page-link" href="#!">15</a></li>
                          <li className="page-item"><a className="page-link" href="#!">Older</a></li>
                      </ul>
                  </nav>
              </div>
              
              <div className="col-lg-4">
                  <Sidebar />
              </div>
          </div>
      </div>
    </>
  )
}
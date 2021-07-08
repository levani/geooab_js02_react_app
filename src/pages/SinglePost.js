import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function fetchSingPost(id) {
  return axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
}

export default function SinglePost() {
  let { id } = useParams();

  const { isLoading, data } = useQuery(['single_post', id], () => fetchSingPost(id));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  let post = data.data;

  return (
    <div className="container mt-5">
        <div className="row">
            <div className="col-lg-8">
                
                <article>
                    
                    <header className="mb-4">
                        
                        <h1 className="fw-bolder mb-1">{post.title}</h1>
                        
                        <div className="text-muted fst-italic mb-2">Posted on January 1, 2021 by Start Bootstrap</div>
                        
                        <a className="badge bg-secondary text-decoration-none link-light" href="#!">Web Design</a>
                        <a className="badge bg-secondary text-decoration-none link-light" href="#!">Freebies</a>
                    </header>
                    
                    <figure className="mb-4"><img className="img-fluid rounded" src="https://dummyimage.com/900x400/ced4da/6c757d.jpg" alt="..." /></figure>
                    
                    <section className="mb-5">
                      {post.body}
                    </section>
                </article>
                
                <section className="mb-5">
                    <div className="card bg-light">
                        <div className="card-body">
                            
                            <form className="mb-4"><textarea className="form-control" rows="3" placeholder="Join the discussion and leave a comment!"></textarea></form>
                            
                            <div className="d-flex mb-4">
                                
                                <div className="flex-shrink-0"><img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                <div className="ms-3">
                                    <div className="fw-bold">Commenter Name</div>
                                    If you're going to lead a space frontier, it has to be government; it'll never be private enterprise. Because the space frontier is dangerous, and it's expensive, and it has unquantified risks.
                                    
                                    <div className="d-flex mt-4">
                                        <div className="flex-shrink-0"><img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                        <div className="ms-3">
                                            <div className="fw-bold">Commenter Name</div>
                                            And under those conditions, you cannot establish a capital-market evaluation of that enterprise. You can't get investors.
                                        </div>
                                    </div>
                                    
                                    <div className="d-flex mt-4">
                                        <div className="flex-shrink-0"><img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                        <div className="ms-3">
                                            <div className="fw-bold">Commenter Name</div>
                                            When you put money directly to a problem, it makes a good headline.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="d-flex">
                                <div className="flex-shrink-0"><img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                <div className="ms-3">
                                    <div className="fw-bold">Commenter Name</div>
                                    When I look at the universe and all the ways the universe wants to kill us, I find it hard to reconcile that with statements of beneficence.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            
            <div className="col-lg-4">
                <Sidebar />
            </div>
        </div>
    </div>
  )
}